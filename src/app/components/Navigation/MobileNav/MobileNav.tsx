"use client";

import { useState } from "react";
import { NavLink } from "../NavLink";

export const MobileNav = () => {
  const [isVisible, setIsVisible] = useState("-translate-x-full");
  const openMenu = () => setIsVisible("translate-x-0 open-menu");
  const closeMenu = () => setIsVisible("-translate-x-full");
  return (
    <>
      <li className="ml-auto md:hidden">
        <button onClick={openMenu}>menu</button>
      </li>
      <div
        className={`absolute md:hidden w-dvw  top-0 left-0 h-dvh bg-gradient-to-r from-[#2b2c33] to-[#363e6b] transition-all ${isVisible}  `}
      >
        <div className="w-full h-full relative flex flex-col items-center justify-center">
          <button className="absolute top-8 right-8" onClick={closeMenu}>
            Close
          </button>
          <NavLink title="About" link="about" isMobile />
          <NavLink title="Skills" link="skills" isMobile />
          <NavLink title="Projects" link="projects" isMobile />
          <NavLink title="Contact" link="contact" isMobile />
        </div>
      </div>
    </>
  );
};
