import { HiChevronUp } from "react-icons/hi"; // Only needed here, it'll always appear inside NavHub when rendered
import { NavHubButton } from "../buttons";
import { useSections } from "../../hooks/useSections";

export default function NavHub() {
  const { sections, activeSectionId, scrollToSection } = useSections();

  {/* HANDLERS */}
  // Last Button, always scrolls to top - 64px (MainNavbar's height)
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 - 64, behavior: "smooth" });
  };
  
  // Defines the First Button, always scrolls to top - 64px, so it activates the current section's feedback of NavHub
  const handleButtonClick = (sectionId: string, sectionScrollOffSet: number, buttonIndex: number) => {
  if (buttonIndex === 0) {
    handleScrollToTop();
  } else {
    scrollToSection(sectionId, sectionScrollOffSet);
  }
};

  // Conditional rendering: Don't render NavHub if there are no sections
  if (sections.length === 0) {
    return null;
  }

  return (
    <nav className="nav-hub">
      {/* Map over dynamically registered sections */}
      {sections.map((section, index) => (
        <NavHubButton
          key={section.id}
          aria-label={section.label}
          onClick={() => handleButtonClick(section.id, (section.scrollOffSet ? section.scrollOffSet : 0), index)}
          // Apply active state styling
          className={activeSectionId === section.id ? "bg-white/16" : ""}
        >
          <section.icon size={24} />
        </NavHubButton>
      ))}

      {/* Always include the scroll-to-top button as the last one */}
      <NavHubButton aria-label="Back to top" onClick={handleScrollToTop}>
        <HiChevronUp size={24} />
      </NavHubButton>
    </nav>
  );
}
