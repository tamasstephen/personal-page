import { Hero, Skills } from "./components";

export default function Home() {
  return (
    <main className="flex justify-center">
      <div>
        <Hero />
        <Skills />
      </div>
    </main>
  );
}
