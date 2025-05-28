import React, { useState } from "react";
import { Link } from "react-router-dom";
import { OutlineButton, GradientButton, NavbarButton } from "../buttons";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../../assets/images/Logo.svg";

interface MainNavbarProps {
  onContactClick: () => void
  onLoginClick: () => void
}

export default function MainNavbar({ onContactClick, onLoginClick }: MainNavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-neutral-800 shadow-md">
      <div className="max-w-7xl mx-auto h-16 px-4 flex items-center justify-between">
        {/* Logo */}
        <div>
          <Link to="/" className="flex items-center">
            <img src={Logo} alt="Lil'Logo Here" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-6">
          <NavbarButton to="/">Home</NavbarButton>
          <NavbarButton to="/about">About</NavbarButton>
          <NavbarButton to="/experiences">Experiences</NavbarButton>
          <NavbarButton to="/portfolio">Portfolio</NavbarButton>
          <NavbarButton to="/side-projects">Side Projects</NavbarButton>
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
            className="md:hidden text-white focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0f0f0f] px-4 pb-4 space-y-2">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="block text-white"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="block text-white"
          >
            About
          </Link>
          <Link
            to="/experiences"
            onClick={() => setOpen(false)}
            className="block text-white"
          >
            Experiences
          </Link>
          <Link
            to="/portfolio"
            onClick={() => setOpen(false)}
            className="block text-white"
          >
            Portfolio
          </Link>
          <Link
            to="/side-projects"
            onClick={() => setOpen(false)}
            className="block text-white"
          >
            Side Projects
          </Link>
        </div>
      )}
    </nav>
  );
}
