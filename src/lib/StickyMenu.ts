export default function StickyMenu(selector: string = '.appie-sticky'): void {
  if (typeof window === 'undefined') return;
  
  const handleScroll = (): void => {
    const element = document.querySelector(selector);
    if (element) {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        element.classList.add('sticky');
      } else {
        element.classList.remove('sticky');
      }
    }
  };

  document.addEventListener('scroll', handleScroll);
}
