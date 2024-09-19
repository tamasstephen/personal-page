import { projects } from "@/app/data";
import { H2 } from "../H2";
import { Wrapper } from "../Wrapper";
import Image from "next/image";
import Link from "next/link";

export const Projects = () => {
  return (
    <Wrapper>
      <section className="my-32" id="projects">
        <H2>Things I&apos;ve done</H2>
        <ul className="mt-10 lg:mt-14">
          {Object.entries(projects).map(([slug, project]) => (
            <li key={project.id} className="grid gap-5 group lg:hover:">
              <Link href={`/${slug}`}>
                <article className="md:grid md:grid-cols-2 gap-5 relative">
                  <div className="absolute inset-0 lg:bg-gradient-to-r pointer-events-none transition-all lg:group-hover:from-[#8087AB]/[0.1] lg:group-hover:to-[#A0A5C0]/[0.1] lg:group-hover:shadow-sm rounded-md z-[-1] lg:w-[104%] lg:h-[114%] lg:translate-x-[-2%] lg:translate-y-[-7%]"></div>
                  <div className="relative aspect-video">
                    <Image
                      className="rounded-md object-cover group-hover:border border-[#C0B8A0] transition-all duration-75"
                      src={project.image}
                      alt={project.coverAlt}
                      fill
                    />
                  </div>
                  <div className="grid gap-7 mt-5 md:mt-0">
                    <h3 className="text-xl font-bold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="leading-tight text-paragraphColor">
                      {project.description}
                    </p>
                    <ul className="flex gap-2">
                      {project.tools.map((tool) => (
                        <li className="" key={tool.id}>
                          <p className="py-1 px-2 font-bold text-white border border-[#C0B8A0] rounded-md text-xs bg-[#C0B8A0] bg-opacity-30">
                            {tool.title}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Wrapper>
  );
};
