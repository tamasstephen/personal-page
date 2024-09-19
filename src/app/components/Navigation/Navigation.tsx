import Link from "next/link";
import { NavLink } from "./NavLink";
import { MobileNav } from "./MobileNav";
import { navItems } from "@/app/constants";

export const Navigation = () => {
  return (
    <nav
      aria-labelledby="mainmenulabel"
      className="flex justify-center items-center w-full h-20 z-30 mb-10 md:mb-40 relative"
    >
      <h2
        id="mainmenulabel"
        className="border-0 w-0 h-0 absolute overflow-hidden"
      >
        Main Menu
      </h2>
      <ul className="flex items-center py-4 w-full xl:px-0 max-w-6xl  mx-5 xl:mx-0">
        <li className="w-32 leading-tight font-bold tracking-tighter text-xl">
          <Link href="/#about">TS.</Link>
        </li>
        {navItems.map((item, idx) => (
          <NavLink
            title={item.title}
            link={item.link}
            key={item.id}
            isFirst={idx === 0 ? true : false}
          />
        ))}
        <MobileNav />
      </ul>
    </nav>
  );
};
