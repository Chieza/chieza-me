import HeroBg from "../../assets/images/backgrounds/sections/hero-bg.png";
import { Link } from "react-router-dom";
import { OutlineButton, GradientButton } from "../buttons";
import { useSectionRegistry } from "../../hooks/useSectionRegistry";
import { HiHome } from "react-icons/hi";

interface HeroSectionProps {
  id: string;
  onContactClick: () => void;
}

export default function HeroSection({ id, onContactClick }: HeroSectionProps) {
  useSectionRegistry(id, HiHome, 'Hero');
  return (
    <section
      id={id}
      className="h-[calc(100vh-4rem)] relative w-full overflow-hidden"
    >
      {/* Background image, covers full area */}
      <img
        src={HeroBg}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Content overlay, centered */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-12 lg:px-24">
        <p className="text-white text-2xl md:text-4xl mb-8">Bruno Caliman</p>
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-8">
          Designing Solutions That Flows!
        </h1>
        <p className="text-white text-base md:text-lg max-w-4xl mb-8">
          Detail-driven Product Designer focused on web and mobile interfaces.
          With my hybrid approach blending design with a dev background, I
          deliver impactful user experiences.
        </p>

        {/* Buttons row */}
        <div className="flex flex-wrap gap-4 justify-center">
          <OutlineButton onClick={onContactClick}>Let's Chat!</OutlineButton>
          <Link to="/portfolio">
            <GradientButton>Explore My Work</GradientButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
