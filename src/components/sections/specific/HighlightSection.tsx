import HighlightBg from "../../../assets/images/backgrounds/sections/highlight-bg.png";
import ComponentsExample from "../../../assets/images/projects/components-example.jpg";
import VariablesExample from "../../../assets/images/projects/variables-example.jpg";
import { useSectionRegistry } from "../../../hooks/useSectionRegistry";
import { HiStar } from "react-icons/hi";
import { SectionContentLayout } from "../../layouts/index";

interface HighlightSectionProps {
  id: string;
}

export default function HeroSection({ id }: HighlightSectionProps) {
  useSectionRegistry(id, HiStar, "Highlights");
  return (
    <SectionContentLayout
      id={id}
      bgSrc={HighlightBg}
      bgAltText="Highlight BG"
      className="min-h-[calc(100vh+8rem)] justify-center items-center"
      contentClassName="z-10 justify-center gap-8"
    >
      {/* Content */}
      <h1 className="text-white text-4xl md:text-6xl font-bold">
        Current Highlight
      </h1>
      <p className="text-white text-base md:text-lg">
        <span className="font-bold">ChiezaDS | </span>Built a badass Design
        System to keep my portfolio looking sharp, because pixel-perfect or
        detail-oriented ain't just a “buzzword” for me.
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Color palette card */}
        <div className="rounded-lg overflow-hidden shadow-lg flex flex-col h-full text-white/80 font-medium">
          {/* Purple */}
          <div className="flex flex-1 max-h-[60px] md:max-h-none justify-between items-center px-4 py-2 bg-[#8200DB]">
            <span>Purple</span>
            <span>#8200DB</span>
          </div>
          {/* Blue */}
          <div className="flex flex-1 max-h-[60px] md:max-h-none justify-between items-center px-4 py-2 bg-[#2B7FFF]">
            <span>Blue</span>
            <span>#2B7FFF</span>
          </div>
          {/* Neutral */}
          <div className="flex flex-1 max-h-[60px] md:max-h-none justify-between items-center px-4 py-2 bg-[#212121]">
            <span>Neutral</span>
            <span>#212121</span>
          </div>
          {/* Gradient */}
          <div className="flex flex-1 max-h-[60px] md:max-h-none justify-between items-center px-4 py-2 bg-gradient-to-r from-[#2B7FFF] to-[#8200DB]">
            <span>Gradient</span>
            <span>Blue &lt;&gt; Purple</span>
          </div>
        </div>

        {/* Top-right Image */}
        <div className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg">
          <img
            src={VariablesExample}
            alt="Screenshot 1"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Bottom Image */}
        <div className="sm:col-span-2 bg-neutral-900 rounded-lg overflow-hidden shadow-lg">
          <img
            src={ComponentsExample}
            alt="Screenshot 2"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <p className="text-white text-base md:text-lg">
        A comprehensive Design System that defines typography, color schemes,
        spacing, interactive components and much more. Ensuring visual
        consistency and streamlined scalability across my portfolio.
      </p>
    </SectionContentLayout>
  );
}
