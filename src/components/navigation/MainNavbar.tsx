import { useState } from "react";
import { Link } from "react-router-dom";
import { OutlineButton, GradientButton, NavbarButton } from "../buttons";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../../assets/images/logo.svg";

interface MainNavbarProps {
  onContactClick: () => void;
  onLoginClick: () => void;
}

export default function MainNavbar({
  onContactClick,
  onLoginClick,
}: MainNavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 shadow-lg shadow-purple-500/8 bg-neutral-900">
      <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Lil'Logo Here" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          <Link to="/">
            <NavbarButton>Home</NavbarButton>
          </Link>
          <Link to="/about">
            <NavbarButton>About</NavbarButton>
          </Link>
          <Link to="/experiences">
            <NavbarButton>Experiences</NavbarButton>
          </Link>
          <Link to="/portfolio">
            <NavbarButton>Portfolio</NavbarButton>
          </Link>
          <Link to="/side-projects">
            <NavbarButton>Side Projects</NavbarButton>
          </Link>
        </div>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex items-center space-x-4">
          {/* Hide Action Buttons on Mobile */}
          <div className="hidden sm:flex space-x-4">
            <OutlineButton onClick={onLoginClick}>Login</OutlineButton>
            <GradientButton onClick={onContactClick}>Contact</GradientButton>
          </div>
          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white/75 focus:outline-none cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX size={40} /> : <HiMenu size={40} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-8 py-8 space-y-4 text-white bg-neutral-900">
          <Link to="/" onClick={() => setOpen(false)} className="block">
            Home
          </Link>
          <Link to="/about" onClick={() => setOpen(false)} className="block">
            About
          </Link>
          <Link
            to="/experiences"
            onClick={() => setOpen(false)}
            className="block"
          >
            Experiences
          </Link>
          <Link
            to="/portfolio"
            onClick={() => setOpen(false)}
            className="block"
          >
            Portfolio
          </Link>
          <Link
            to="/side-projects"
            onClick={() => setOpen(false)}
            className="block"
          >
            Side Projects
          </Link>
        </div>
      )}
    </nav>
  );
}
