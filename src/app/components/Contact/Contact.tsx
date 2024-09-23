import { H2 } from "../H2";
import { Wrapper } from "../Wrapper";

export const Contact = () => {
  return (
    <section className="mt-32 mb-40" id="contact">
      <Wrapper>
        <div className="text-center mb-10 lg:mb-14">
          <H2>Contact.</H2>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-center text-paragraphColor leading-normal text-[2rem] lg:text-[3rem] lg:max-w-2xl mb-10 lg:mb-14">
            Want to connect? I’d love to hear from you! Feel free to reach out
            to me!
          </p>

          <div>
            <a
              className="relative flex py-4 px-6 font-bold text-xl lg:text-2xl bg-[#4D4F5D] hover:bg-[#C0B8A0]/[0.1] hover:text-[#4D4F5D] tracking-tight transition-all w-full rounded-md text-white∂"
              href="mailto:tamas.stephen@proton.me"
            >
              <div className="absolute inset-0 top-0 left-0 w-[102%] h-[108%] translate-x-[-1%] rounded-md translate-y-[-4%]  z-[-1] bg-gradient-to-r from-[#8087AB] to-[#C0B8A0]"></div>
              Get in Touch
            </a>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};
