import HeroBg from "../../assets/images/backgrounds/sections/hero-bg.png";
import { Link } from "react-router-dom";
import { OutlineButton, GradientButton } from "../buttons";
import { useSectionRegistry } from "../../hooks/useSectionRegistry";
import { HiHome } from "react-icons/hi";
import { SectionLayout } from '../layouts/index'

interface HeroSectionProps {
  id: string;
  onContactClick: () => void;
}

export default function HeroSection({ id, onContactClick }: HeroSectionProps) {
  useSectionRegistry(id, HiHome, 'Hero');
  return (
    <SectionLayout
    id={id}
      className="min-h-[calc(100vh-4rem)] relative flex items-center justify-center"
    >
      {/* Background */}
      <img
        src={HeroBg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content Centered */}
      <div className="relative z-10 flex flex-col text-center px-6 md:px-12 lg:px-24 space-y-8 text-white">
        <p className="text-2xl">Bruno Caliman</p>
        <h1 className="text-4xl/12 md:text-4xl/12 font-bold">
          Designing Solutions That Flows!
        </h1>
        <p className="hidden lg:block text-base md:text-lg max-w-4xl mb-8">
          Detail-driven Product Designer focused on web and mobile interfaces.
          With my hybrid approach blending design with a dev background, I
          deliver impactful user experiences.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center">
          <OutlineButton onClick={onContactClick} className="hidden md:block">Let's Chat!</OutlineButton>
          <Link to="/portfolio">
            <GradientButton>Explore My Work</GradientButton>
          </Link>
        </div>
      </div>
    </SectionLayout>
  );
}