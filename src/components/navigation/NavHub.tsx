import { HiHome, HiUser, HiStar, HiCog, HiChevronUp } from "react-icons/hi";
import { NavHubButton } from "../buttons";

export default function NavHub() {
  return (
    <nav
      className="flex flex-col p-2 space-y-4 bg-gradient-to-b from-purple-100/16 to-blue-300/16 rounded-full backdrop-blur-lg transition-all duration-1000 ease-in-out fixed top-1/2 right-8 transform -translate-y-1/2 z-50"
    >
      <NavHubButton aria-label="Home">
        <HiHome size={20} />
      </NavHubButton>
      <NavHubButton aria-label="Profile">
        <HiUser size={20} />
      </NavHubButton>
      <NavHubButton aria-label="Favorites">
        <HiStar size={20} />
      </NavHubButton>
      <NavHubButton aria-label="Settings">
        <HiCog size={20} />
      </NavHubButton>
      <NavHubButton aria-label="Back to top">
        <HiChevronUp size={20} />
      </NavHubButton>
    </nav>
  );
}