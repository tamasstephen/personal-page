import { Hero, Projects, Skills } from "./components";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div>
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}
