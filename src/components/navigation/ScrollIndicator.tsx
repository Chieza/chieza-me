import { useState, useEffect, useCallback } from 'react';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi2';

const ScrollIndicator: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Determine visibility based on scroll position
  const handleScroll = useCallback(() => {
    // Show Scroll Indicator only if browser is at the top of the page
    setIsVisible(window.scrollY === 0);
  }, []);

  // Scroll down the page and hide Scroll Indicator
  const handleClick = useCallback(() => {
    // Scroll down
    window.scrollBy({ top: window.innerHeight + 64, behavior: 'smooth' }); // Minus 64px is due to 1rem = 16px (4rem), adjust if needed
    setIsVisible(false); // Hide after click
  }, []);

  // Add/remove scroll listener
  useEffect(() => {
    // Initial visibility
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Render if isVisible is true
  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-1/2 -translate-x-1/2 z-50 cursor-pointer animate-bounce rounded-full"
      onClick={handleClick}
      aria-label="Scroll down to see more content"
    >
      <HiOutlineChevronDoubleDown className="h-10 w-10 text-white/64 hover:text-white" />
    </div>
  );
};

export default ScrollIndicator;