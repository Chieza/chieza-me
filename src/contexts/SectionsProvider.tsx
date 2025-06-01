import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import type { NavSection, SectionsContextType } from "../types/nav-section"; // Import NavSection and SectionsContextType
import { SectionsContext } from "./_sections-context"; // Import the context object

// Provider component that manages state and provides the context value
export const SectionsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [sections, setSections] = useState<NavSection[]>([]);
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const registerSection = useCallback((newSection: NavSection) => {
    setSections((prevSections) => {
      if (!prevSections.some((s) => s.id === newSection.id)) {
        const sortedSections = [...prevSections, newSection].sort((a, b) => {
          const elA = document.getElementById(a.id);
          const elB = document.getElementById(b.id);
          if (elA && elB) {
            return elA.offsetTop - elB.offsetTop;
          }
          return 0;
        });
        return sortedSections;
      }
      return prevSections;
    });
  }, []);

  const unregisterSection = useCallback((id: string) => {
    setSections((prevSections) => prevSections.filter((s) => s.id !== id));
  }, []);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect;
            if (
              rect.top <= window.innerHeight / 2 &&
              rect.bottom >= window.innerHeight / 2
            ) {
              setActiveSectionId(entry.target.id);
            } else if (rect.top <= 0 && rect.bottom > 0) {
              setActiveSectionId(entry.target.id);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -50% 0px",
        threshold: 0,
      }
    );

    const currentObserver = observerRef.current;
    return () => {
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect(); 
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observerRef.current?.observe(element);
        }
      });
    }
  }, [sections]);

  const contextValue: SectionsContextType = { // Explicitly type contextValue for clarity
    sections,
    activeSectionId,
    registerSection,
    unregisterSection,
    scrollToSection,
  };

  return (
    <SectionsContext.Provider value={contextValue}>
      {children}
    </SectionsContext.Provider>
  );
};