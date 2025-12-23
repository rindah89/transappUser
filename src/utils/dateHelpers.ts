/**
 * Date utility functions using date-fns
 * Replaces moment.js for better performance and smaller bundle size
 */

import { format, parseISO, isValid, parse } from 'date-fns';

/**
 * Format a date for display (DD/MM/YYYY format)
 */
export const formatDateDisplay = (date: string | Date | null | undefined): string => {
  return formatDate(date, 'dd/MM/yyyy');
};

/**
 * Format a date to YYYY-MM-DD format
 */
export const formatDate = (date: string | Date | null | undefined, formatStr: string = 'yyyy-MM-dd'): string => {
  if (!date) return '';
  
  try {
    let dateObj: Date;
    
    if (typeof date === 'string') {
      // Try parsing ISO format first
      dateObj = parseISO(date);
      // If invalid, try parsing as regular date string
      if (!isValid(dateObj)) {
        dateObj = new Date(date);
      }
    } else {
      dateObj = date;
    }
    
    if (!isValid(dateObj)) {
      return '';
    }
    
    return format(dateObj, formatStr);
  } catch {
    return '';
  }
};

/**
 * Format time to HH:mm format (24-hour)
 */
export const formatTime = (time: string | Date | null | undefined, formatStr: string = 'HH:mm'): string => {
  if (!time) return '';
  
  try {
    let dateObj: Date;
    
    if (typeof time === 'string') {
      // If it's just a time string like "14:30", create a date with it
      if (time.match(/^\d{1,2}:\d{2}$/)) {
        dateObj = parse(time, 'HH:mm', new Date());
      } else if (time.match(/^\d{1,2}:\d{2}\s?(AM|PM)$/i)) {
        // Handle 12-hour format
        dateObj = parse(time, 'hh:mm a', new Date());
      } else {
        // Try parsing as ISO or regular date
        dateObj = parseISO(time);
        if (!isValid(dateObj)) {
          dateObj = new Date(time);
        }
      }
    } else {
      dateObj = time;
    }
    
    if (!isValid(dateObj)) {
      return '';
    }
    
    return format(dateObj, formatStr);
  } catch {
    return '';
  }
};

/**
 * Convert a date to a Date object (for date pickers)
 */
export const toDate = (date: string | Date | null | undefined): Date | undefined => {
  if (!date) return undefined;
  
  try {
    if (typeof date === 'string') {
      const parsed = parseISO(date);
      if (isValid(parsed)) {
        return parsed;
      }
      const fallback = new Date(date);
      return isValid(fallback) ? fallback : undefined;
    }
    
    return date instanceof Date && isValid(date) ? date : undefined;
  } catch {
    return undefined;
  }
};

/**
 * Parse a time string with multiple formats (for backward compatibility)
 */
export const parseTime = (time: string | Date | null | undefined, formats: string[] = ['HH:mm', 'hh:mm a']): Date | undefined => {
  if (!time) return undefined;
  
  try {
    if (typeof time === 'string') {
      for (const fmt of formats) {
        try {
          const parsed = parse(time, fmt, new Date());
          if (isValid(parsed)) {
            return parsed;
          }
        } catch {
          // Try next format
        }
      }
      // Fallback to Date constructor
      const fallback = new Date(`2000-01-01T${time}`);
      return isValid(fallback) ? fallback : undefined;
    }
    
    return time instanceof Date && isValid(time) ? time : undefined;
  } catch {
    return undefined;
  }
};

