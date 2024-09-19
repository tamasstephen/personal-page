import { ContactLinks } from "../ContactLinks";
import { Wrapper } from "../Wrapper";

export const Footer = () => {
  return (
    <footer className="flex justify-center w-full py-5 lg:py-10">
      <Wrapper isFooter>
        <div className="flex justify-between w-full">
          <ContactLinks dontShowMail />
          <p>
            <a href="mailto:tamas.stephen@proton.me">tamas.stephen@proton.me</a>
          </p>
        </div>
      </Wrapper>
    </footer>
  );
};
