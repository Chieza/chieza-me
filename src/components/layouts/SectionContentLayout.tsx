import React from "react";

interface SectionContentLayoutProps {
  // Section's Attributes
  id?: string;
  className?: string;
  children: React.ReactNode;

  // Section's BG-Image Attributes
  bgSrc?: string;
  bgAltText?: string;
  bgStyle?: string;

  // Section's Content Attributes
  contentClassName?: string;
}

export default function SectionLayout({
  id,
  className,
  bgSrc,
  bgAltText,
  children,
  contentClassName,
}: SectionContentLayoutProps) {
  return (
    <section
      id={id}
      className={`relative w-full flex flex-col ${
        className || ""
      }`}
    >
      {bgSrc && (
        <img
          src={bgSrc}
          alt={bgAltText || ""}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      <div className={`w-full max-w-7xl mx-auto flex flex-col px-8 py-16 ${contentClassName || ""}`}>
        {children}
      </div>
    </section>
  );
}
