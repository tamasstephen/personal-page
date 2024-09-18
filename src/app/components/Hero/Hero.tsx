import Image from "next/image";
import PortraitImage from "@/assets/portrait.png";
import { Wrapper } from "../Wrapper";
import { ContactLinks } from "../ContactLinks";

export const Hero = () => {
  return (
    <Wrapper>
      <section
        className="md:flex md:justify-between md:gap-20 w-full"
        id="about"
      >
        <div className="w-full md:w-1/3 md:flex md:justify-end">
          <div className="flex flex-col gap-4 items-center w-[120px] md:w-[200px] md:order-last">
            <div className="relative aspect-square">
              <Image src={PortraitImage} alt="3d style portrait" />
            </div>
            <ContactLinks />
          </div>
        </div>
        <div className="mt-10 md:mt-0 grid gap-5 lg:gap-7 md:order-first md:w-2/3">
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tighter">
            Hi, I&apos;m Tamás Stephen
          </h1>
          <p className="text-xl lg:text-2xl font-semibold tracking-tighter lg:tracking-tight">
            Frontend developer, located in Budapest
          </p>
          <p className="lg:text-xl text-paragraphColor">
            I specialize in building dynamic, user-friendly interfaces with a
            focus on usability and accessibility. I have a deep commitment to
            creating visually appealing and highly functional web applications
            that provide seamless user experiences. Throughout my career, I’ve
            had the privilege to work in dynamic digital agencies and contribute
            to healthcare applications, where delivering high-quality,
            user-centered web solutions was paramount.
          </p>
        </div>
      </section>
    </Wrapper>
  );
};
