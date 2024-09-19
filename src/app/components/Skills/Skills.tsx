import { H2 } from "../H2";
import { Wrapper } from "../Wrapper";
import { ToolBox } from "./components";

export const Skills = () => {
  return (
    <Wrapper>
      <section className="mt-32" id="skills">
        <H2>My Development Toolkit.</H2>
        <div className="mt-10 lg:mt-16 grid gap-10 md:grid-cols-2">
          <ToolBox isFirst />
          <ToolBox />
        </div>
      </section>
    </Wrapper>
  );
};
