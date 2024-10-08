"use client";

import { useState } from "react";
import { NavLink } from "../NavLink";
import { navItems } from "@/app/constants";

export const MobileNav = () => {
  const [isVisible, setIsVisible] = useState("-translate-x-full");
  const openMenu = () => setIsVisible("translate-x-0 open-menu");
  const closeMenu = () => setIsVisible("-translate-x-full");
  const onClick = () => closeMenu();
  return (
    <>
      <li className="ml-auto md:hidden">
        <button onClick={openMenu}>menu</button>
        <div
          className={`absolute md:hidden w-dvw  top-0 left-0 h-dvh bg-gradient-to-r from-[#2b2c33] to-[#363e6b] transition-all ${isVisible}  `}
        >
          <button className="absolute top-8 right-8 z-50" onClick={closeMenu}>
            Close
          </button>
          <ul className="w-full h-full relative flex flex-col items-center justify-center">
            {navItems.map((item) => (
              <NavLink
                title={item.title}
                link={item.link}
                key={item.id}
                isMobile
                onClick={onClick}
              />
            ))}
          </ul>
        </div>
      </li>
    </>
  );
};
