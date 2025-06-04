import HeroBg from "../../assets/images/backgrounds/sections/hero-bg.png";
import { Link } from "react-router-dom";
import { OutlineButton, GradientButton } from "../buttons";
import { useSectionRegistry } from "../../hooks/useSectionRegistry";
import { HiHome } from "react-icons/hi";
import { SectionContentLayout } from "../layouts/index";

interface HeroSectionProps {
  id: string;
  onContactClick: () => void;
}

export default function HeroSection({ id, onContactClick }: HeroSectionProps) {
  useSectionRegistry(id, HiHome, "Hero");
  return (
    <SectionContentLayout
      bgSrc={HeroBg}
      bgAltText="Hero Bg"
      id={id}
      className="min-h-[calc(100vh+8rem)] justify-center items-center"
      contentClassName="z-10 justify-center items-center gap-8 text-center"
    >
      {/* Content */}
      <p className="text-2xl">Bruno Caliman</p>
      <h1 className="text-4xl/12 md:text-4xl/12 font-bold">
        Designing Solutions That Flows!
      </h1>
      <p className="hidden lg:block text-base md:text-lg max-w-4xl mb-8">
        Detail-driven Product Designer focused on web and mobile interfaces.
        With my hybrid approach blending design with a dev background, I deliver
        impactful user experiences.
      </p>
      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <OutlineButton onClick={onContactClick} className="hidden md:block">
          Let's Chat!
        </OutlineButton>
        <Link to="/portfolio">
          <GradientButton>Explore My Work</GradientButton>
        </Link>
      </div>
    </SectionContentLayout>
  );
}
