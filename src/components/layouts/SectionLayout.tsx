import React from 'react';

interface SectionLayoutProps {
  children: React.ReactNode;
  id?: string;
  className?: string; // Optional: for additional custom classes
}

export default function SectionLayout({ children, id, className }: SectionLayoutProps) {
  return (
    <section id={id} className={`overflow-hidden px-8 py-16 w-full text-white ${className || ''}`}>
      {children}
    </section>
  );
}

interface SectionLayoutProps {
  children: React.ReactNode;
  id?: string; // ADDED: Optional id prop
  className?: string; // Optional: for additional custom classes
}