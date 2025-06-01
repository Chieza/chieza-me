import React from 'react';
import type { SectionsContextType } from '../types/nav-section';

// Create and export the context object
export const SectionsContext = React.createContext<SectionsContextType | undefined>(undefined);