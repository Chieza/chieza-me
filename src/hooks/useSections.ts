import { useContext } from 'react';
import { SectionsContext } from '../contexts/_sections-context';
import type { NavSection } from '../types/nav-section';

// Define the shape of the context value for this hook's consumer (must be identical)
interface SectionsContextType {
  sections: NavSection[];
  activeSectionId: string | null;
  registerSection: (section: NavSection) => void;
  unregisterSection: (id: string) => void;
  scrollToSection: (id: string, scrollOffSet: number) => void;
}

// Custom hook to consume the context
export const useSections = () => {
  const context = useContext(SectionsContext);
  if (context === undefined) {
    throw new Error('useSections must be used within a SectionsProvider');
  }
  return context as SectionsContextType;
};