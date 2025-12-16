'use client'

import React, { useState, useEffect } from 'react';
import { usePWAInstall } from '../../Hooks/usePWAInstall';
import { X, Download, Smartphone } from 'lucide-react';
import styles from './PWAInstallPrompt.module.css';

const PWAInstallPrompt: React.FC = () => {
  const { isInstallable, isInstalled, promptInstall } = usePWAInstall();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has previously dismissed the prompt
    if (typeof window !== 'undefined') {
      const dismissed = localStorage.getItem('pwa-install-dismissed');
      if (dismissed) {
        const dismissedTime = parseInt(dismissed, 10);
        const daysSinceDismissed = (Date.now() - dismissedTime) / (1000 * 60 * 60 * 24);
        // Show again after 7 days if dismissed
        if (daysSinceDismissed < 7) {
          setIsDismissed(true);
        }
      }
    }
  }, []);

  useEffect(() => {
    // Show prompt if installable and not installed and not dismissed
    if (isInstallable && !isInstalled && !isDismissed) {
      // Delay showing the prompt slightly for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000); // Show after 2 seconds

      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isInstallable, isInstalled, isDismissed]);

  const handleInstall = async () => {
    try {
      await promptInstall();
      setIsVisible(false);
    } catch (error) {
      console.error('Error installing PWA:', error);
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('pwa-install-dismissed', Date.now().toString());
    }
  };

  // Don't render if not visible, installed, or dismissed
  if (!isVisible || isInstalled) {
    return null;
  }

  return (
    <div className={styles.pwaInstallPrompt}>
      <div className={styles.content}>
        <div className={styles.icon}>
          <Smartphone size={32} />
        </div>
        <div className={styles.text}>
          <h4 className={styles.title}>Install TransApp</h4>
          <p className={styles.description}>
            Get the full app experience! Install TransApp on your phone for faster access and offline support.
          </p>
        </div>
        <div className={styles.actions}>
          <button
            onClick={handleInstall}
            className={styles.button}
            aria-label="Install TransApp"
          >
            <Download size={18} />
            <span>Install</span>
          </button>
          <button
            onClick={handleDismiss}
            className={styles.close}
            aria-label="Dismiss install prompt"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PWAInstallPrompt;

