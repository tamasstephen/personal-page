import { ContactLinks } from "../ContactLinks";
import { Wrapper } from "../Wrapper";

export const Footer = () => {
  return (
    <footer className="flex justify-center w-full py-5 lg:py-10">
      <Wrapper isFooter>
        <div className="flex justify-between w-full">
          <ContactLinks dontShowMail />
          <p className="">
            <a
              className="flex relative after:content-[''] after:h-[2px] after:w-0 after:absolute after:bg-white after:-bottom-1 after:left-0 hover:after:w-full after:transition-all"
              href="mailto:tamas.stephen@proton.me"
            >
              tamas.stephen@proton.me
            </a>
          </p>
        </div>
      </Wrapper>
    </footer>
  );
};
