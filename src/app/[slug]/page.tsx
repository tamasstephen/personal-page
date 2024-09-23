import { Wrapper } from "../components";
import { projects } from "../data";
import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
  const isProject = Object.keys(projects).includes(params.slug);
  if (!isProject) {
    return <main>Project not found</main>;
  }
  const details = projects[params.slug as keyof typeof projects];
  return (
    <main className="flex justify-center">
      <Wrapper>
        <section>
          <h1 className="text-3xl lg:text-5xl font-bold tracking-tighter">
            {details.title}
          </h1>
          <div className="aspect-video mt-10">
            <Image
              src={details.image}
              alt={details.coverAlt}
              className="rounded-md"
            />
          </div>
        </section>
        <section className="lg:grid lg:grid-cols-2 mt-10 mb-40">
          <div></div>
          <div className="text-paragraphColor">
            {details.overview.split("\n").map((str, idx) => (
              <p key={`${"str" + idx}`}>
                <br />
                {str}
              </p>
            ))}
          </div>
        </section>
      </Wrapper>
    </main>
  );
}
