import Link from "next/link";

interface NavLinkProps {
  title: string;
  link: string;
  isFirst?: boolean;
  isMobile?: boolean;
  onClick?: () => void;
}

export const NavLink = ({
  title,
  link,
  isFirst,
  isMobile,
  onClick,
}: NavLinkProps) => {
  return (
    <li
      className={`${isFirst ? "ml-auto" : "ml-5"} ${
        isMobile ? "block" : "hidden"
      } flex relative md:block text-white text-xl after:content-[""] after:h-[2px] after:w-0 after:absolute after:bg-white after:-bottom-1 after:left-0 hover:after:w-full after:transition-all  ${
        isMobile ? "ml-0 mb-8" : ""
      }`}
      onClick={onClick}
    >
      <Link href={`/#${link}`}>{title}</Link>
    </li>
  );
};
