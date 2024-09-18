import { Wrapper } from "../Wrapper";
import Image from "next/image";
import TerminalIcon from "@/assets/terminal.svg";
import MonitorIcon from "@/assets/monitor.svg";

export const Skills = () => {
  return (
    <Wrapper>
      <section className="mt-32" id="skills">
        <h2 className="font-bold tracking-tight text-2xl lg:text-3xl">
          My Development Toolkit.
        </h2>
        <div className="mt-10 lg:mt-16 grid gap-10 md:grid-cols-2">
          <div className="rounded-md overflow-hidden md:h-full">
            <div className="border-2 md:h-full [border-image:linear-gradient(to_top,#C0B8A0,#BCC3EB)_30]  p-6">
              <p className="flex text-xl font-bold">
                <Image src={TerminalIcon} alt="terminal icon" />
                <span className="ml-2">Languages I speak</span>
              </p>
              <ul className="list-disc pl-6 grid gap-2 mt-6">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Sass</li>
                <li>React</li>
                <li>Hungarian</li>
                <li>English</li>
                <li>German</li>
              </ul>
            </div>
          </div>
          <div className="rounded-md overflow-hidden">
            <div className="border-2 [border-image:linear-gradient(to_top,#BCC3EB,#C0B8A0)_30]  p-6">
              <p className="flex text-xl font-bold">
                <Image src={MonitorIcon} alt="monitor icon" />
                <span className="ml-2">Tools I use</span>
              </p>
              <ul className="list-disc pl-6 grid gap-2 mt-6">
                <li>Git</li>
                <li>Tailwind</li>
                <li>NextJs</li>
                <li>Github</li>
                <li>Docker</li>
                <li>Vercel</li>
                <li>Express Js</li>
                <li>Jest</li>
                <li>React Testing Library</li>
                <li>Figma</li>
                <li>Supabase</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};
