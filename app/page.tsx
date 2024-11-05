import About from "./components/page/About";
import Experience from "./components/page/Experience";
import Links from "./components/page/Links";
import Project from "./components/page/Project";

export default async function Home() {
  return (
    <>
      <div className="w-9/12 mx-auto">
        <About />
        <Experience />
        <Project />
        <Links />
      </div>
    </>
  );
}
