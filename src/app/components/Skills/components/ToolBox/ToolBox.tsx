import Image from "next/image";
import TerminalIcon from "@/assets/terminal.svg";
import MonitorIcon from "@/assets/monitor.svg";

const firstBoxContent = {
  el: (
    <>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>TypeScript</li>
      <li>Sass</li>
      <li>React</li>
      <li>Hungarian</li>
      <li>English</li>
      <li>German</li>
    </>
  ),
  style: "[border-image:linear-gradient(to_top,#C0B8A0,#BCC3EB)_30]",
  icon: TerminalIcon,
};

const secondBoxContent = {
  el: (
    <>
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
    </>
  ),
  style: "[border-image:linear-gradient(to_top,#BCC3EB,#C0B8A0)_30] ",
  icon: MonitorIcon,
};

interface ToolboxProps {
  isFirst?: boolean;
}

export const ToolBox = ({ isFirst }: ToolboxProps) => {
  return (
    <div className="rounded-md overflow-hidden md:h-full">
      <div
        className={`border-2 md:h-full ${
          isFirst ? firstBoxContent.style : secondBoxContent.style
        }  p-6`}
      >
        <p className="flex text-xl font-bold">
          <Image
            src={isFirst ? firstBoxContent.icon : secondBoxContent.icon}
            alt="terminal icon"
            className="w-auto"
          />
          <span className="ml-2">
            {isFirst ? "Languages I speak" : "Tools I use"}
          </span>
        </p>
        <ul className="list-disc pl-6 grid gap-2 mt-6">
          {isFirst ? firstBoxContent.el : secondBoxContent.el}
        </ul>
      </div>
    </div>
  );
};
