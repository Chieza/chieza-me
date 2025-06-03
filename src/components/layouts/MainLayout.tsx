import React from 'react';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="max-w-screen-xl mx-auto w-full">
      {children}
    </div>
  );
}