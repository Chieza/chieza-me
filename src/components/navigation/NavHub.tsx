import { HiChevronUp } from "react-icons/hi"; // Only needed here, it'll always appear inside NavHub when rendered
import { NavHubButton } from "../buttons";
import { useSections } from "../../hooks/useSections";

export default function NavHub() {
  const { sections, activeSectionId, scrollToSection } = useSections();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 - 64, behavior: "smooth" });
  };

  // Conditional rendering: Don't render NavHub if there are no sections
  if (sections.length === 0) {
    return null;
  }

  return (
    <nav className="nav-hub">
      {/* Map over dynamically registered sections */}
      {sections.map((section) => (
        <NavHubButton
          key={section.id}
          aria-label={section.label}
          onClick={() => scrollToSection(section.id)}
          // Apply active state styling
          className={activeSectionId === section.id ? "bg-white/20" : ""} // Example active style
        >
          <section.icon size={16} />
        </NavHubButton>
      ))}

      {/* Always include the scroll-to-top button as the last one */}
      <NavHubButton aria-label="Back to top" onClick={handleScrollToTop}>
        <HiChevronUp size={16} />
      </NavHubButton>
    </nav>
  );
}
