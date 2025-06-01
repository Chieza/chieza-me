import { useEffect } from 'react';
import { useSections } from './useSections';
import type { NavSection } from '../types/nav-section'; // Import NavSection

// Explicitly use NavSection types for the parameters to satisfy the linter
export const useSectionRegistry = (
  id: NavSection['id'], // Explicitly typing 'id' as NavSection's id type
  icon: NavSection['icon'], // Explicitly typing 'icon' as NavSection's icon type
  label: NavSection['label'] // Explicitly typing 'label' as NavSection's label type
) => {
  const { registerSection, unregisterSection } = useSections();

  useEffect(() => {
    // The object creation is now correctly inside the effect
    registerSection({ id, icon, label });

    return () => {
      unregisterSection(id);
    };
  }, [id, icon, label, registerSection, unregisterSection]);
};