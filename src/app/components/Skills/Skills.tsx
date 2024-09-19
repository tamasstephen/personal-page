import { Wrapper } from "../Wrapper";
import { ToolBox } from "./components";

export const Skills = () => {
  return (
    <Wrapper>
      <section className="mt-32" id="skills">
        <h2 className="font-bold tracking-tight text-2xl lg:text-3xl">
          My Development Toolkit.
        </h2>
        <div className="mt-10 lg:mt-16 grid gap-10 md:grid-cols-2">
          <ToolBox isFirst />
          <ToolBox />
        </div>
      </section>
    </Wrapper>
  );
};
