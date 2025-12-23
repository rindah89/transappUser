export default function StickyMenu(selector: string = '.appie-sticky'): void {
  if (typeof window === 'undefined') return;
  
  const handleScroll = (): void => {
    try {
      const element = document.querySelector(selector);
      if (element) {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          element.classList.add('sticky');
        } else {
          element.classList.remove('sticky');
        }
      }
    } catch (error) {
      // Silently handle any DOM access errors (e.g., from browser extensions)
      console.debug('StickyMenu: Error accessing DOM element', error);
    }
  };

  try {
    document.addEventListener('scroll', handleScroll);
  } catch (error) {
    // Silently handle any event listener errors
    console.debug('StickyMenu: Error adding scroll listener', error);
  }
}
