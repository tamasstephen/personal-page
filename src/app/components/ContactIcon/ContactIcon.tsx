import Image from "next/image";
import { links } from "../../constants/links";

interface ContactIconProps {
  image: string;
  alt: string;
  link: (typeof links)[keyof typeof links];
}

export const ContactIcon = ({ image, alt, link }: ContactIconProps) => {
  return (
    <a href={link} rel="noopener noreferrer" target="_blank">
      <div>
        <Image className="aspect-square" src={image} alt={alt} />
      </div>
    </a>
  );
};
