/**
 * Utility functions with TypeScript types
 */

export const formatDate = (date: string | Date): string => {
  const d = new Date(date);
  if (isNaN(d.getTime())) return '';
  
  // Format as DD/MM/YYYY
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
};

export const formatCurrency = (amount: number, currency: string = 'XAF'): string => {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency,
  }).format(amount);
};

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9]{9,15}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
};

export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const isEmpty = (value: string | number | object | null | undefined): boolean => {
  if (value === null || value === undefined) {
    return true;
  }
  if (typeof value === 'string' && value.trim() === '') {
    return true;
  }
  if (typeof value === 'object' && Object.keys(value).length === 0) {
    return true;
  }
  return false;
};

/**
 * Rounds a price up to the nearest multiple of 50
 * @param price - The price to round (can be number or string)
 * @returns The rounded price as a number
 */
export const roundPriceToNearest50 = (price: number | string): number => {
  const numPrice = typeof price === 'string' ? parseFloat(price) : Number(price);
  if (!Number.isFinite(numPrice) || numPrice <= 0) return 0;
  return Math.ceil(numPrice / 50) * 50;
};
