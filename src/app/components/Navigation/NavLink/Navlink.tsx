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
      } md:block text-xl hover:underline ${isMobile ? "ml-0 mb-8" : ""}`}
      onClick={onClick}
    >
      <Link href={`#${link}`}>{title}</Link>
    </li>
  );
};
