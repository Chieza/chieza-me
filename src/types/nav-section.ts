export interface NavSection {
  id: string; // Unique identifier for the section (e.g., 'home', 'about')
  icon: React.ElementType; // The React Icon component (e.g., HiHome, HiStar)
  label: string; // Accessibility label for the button
  scrollOffSet?: number; // Amount of pixels NavHub will scroll relative to section's off set top
}

export interface SectionsContextType {
  sections: NavSection[];
  activeSectionId: string | null;
  registerSection: (section: NavSection) => void;
  unregisterSection: (id: string) => void;
  scrollToSection: (id: string, scrollOffSet?: number) => void;
}