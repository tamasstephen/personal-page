import Link from "next/link";

interface NavLinkProps {
  title: string;
  link: string;
  isFirst?: boolean;
  isMobile?: boolean;
}

export const NavLink = ({ title, link, isFirst, isMobile }: NavLinkProps) => {
  return (
    <li
      className={`${isFirst ? "ml-auto" : "ml-5"} ${
        isMobile ? "block" : "hidden"
      } md:block text-xl hover:underline ${isMobile ? "ml-0 mb-8" : ""}`}
    >
      <Link href={`#${link}`}>{title}</Link>
    </li>
  );
};
