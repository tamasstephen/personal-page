import { links } from "@/app/constants";
import { ContactIcon } from "../ContactIcon";
import LinkedInIcon from "@/assets/linkedin.svg";
import GithubIcon from "@/assets/github.svg";
import MailIcon from "@/assets/mail.svg";

interface ContactLinksProps {
  dontShowMail?: boolean;
}

export const ContactLinks = ({ dontShowMail }: ContactLinksProps) => {
  return (
    <div className="flex gap-2">
      <ContactIcon
        link={links.linkedin}
        image={LinkedInIcon}
        alt="linkedin icon"
      />
      <ContactIcon link={links.github} image={GithubIcon} alt="github icon" />
      {!dontShowMail && (
        <ContactIcon link={links.email} image={MailIcon} alt="email icon" />
      )}
    </div>
  );
};
