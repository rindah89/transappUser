'use client'

import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Ticket, List, Menu } from 'lucide-react'

type BottomNavProps = {
  onMenu: () => void
}

function isActivePath(pathname: string, match: string): boolean {
  if (match === '/') return pathname === '/'
  return pathname === match || pathname.startsWith(`${match}/`)
}

const BottomNav: React.FC<BottomNavProps> = ({ onMenu }) => {
  const pathname = usePathname() ?? ""
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem('authClient')
      if (!raw) {
        setIsAuthenticated(false)
        return
      }
      const parsed = JSON.parse(raw)
      const email =
        parsed?.user?.email ??
        parsed?.data?.email ??
        parsed?.data?.data?.email ??
        undefined
      setIsAuthenticated(Boolean(email))
    } catch {
      setIsAuthenticated(false)
    }
  }, [])

  const ticketsHref = useMemo(
    () => (isAuthenticated ? '/user-bookings' : `/login?redirect=${encodeURIComponent('/user-bookings')}`),
    [isAuthenticated]
  )

  const items = [
    { href: '/', label: 'Home', icon: Home, active: isActivePath(pathname, '/') },
    { href: '/book', label: 'Book', icon: Ticket, active: isActivePath(pathname, '/book') },
    { href: ticketsHref, label: 'Tickets', icon: List, active: isActivePath(pathname, '/user-bookings') },
  ] as const

  return (
    <nav className="ta-bottom-nav d-lg-none" aria-label="Primary">
      <div className="ta-bottom-nav__inner">
        {items.map(({ href, label, icon: Icon, active }) => (
          <Link
            key={href}
            href={href}
            className={`ta-bottom-nav__item ${active ? 'is-active' : ''}`}
            aria-current={active ? 'page' : undefined}
          >
            <Icon size={20} aria-hidden="true" />
            <span className="ta-bottom-nav__label">{label}</span>
          </Link>
        ))}

        <button type="button" className="ta-bottom-nav__item" onClick={onMenu} aria-label="Open menu">
          <Menu size={20} aria-hidden="true" />
          <span className="ta-bottom-nav__label">Menu</span>
        </button>
      </div>
    </nav>
  )
}

export default BottomNav


