import { projects } from "@/app/data";
import { H2 } from "../H2";
import { Wrapper } from "../Wrapper";
import { ProjectCard } from "./components";

export const Projects = () => {
  return (
    <Wrapper>
      <section className="mt-32 mb-10" id="projects">
        <H2>Things I&apos;ve done recently.</H2>
        <ul className="mt-10 lg:mt-14 grid gap-10">
          {Object.entries(projects).map(([slug, project]) => (
            <li key={project.id} className="grid gap-5 group lg:hover:">
              <ProjectCard slug={slug} project={project} />
            </li>
          ))}
        </ul>
      </section>
      <p className="text-center text-lg text-paragraphColor">More to come...</p>
    </Wrapper>
  );
};
