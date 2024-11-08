import About from "./components/page/About";
import Experience from "./components/page/Experience";
import Project from "./components/page/Project";
import Footer from "./components/page/Footer";
import Bio from "./components/page/Bio";

export default async function Home() {
  return (
    <>

      <div className="dark:bg-black bg-white bg-fixed bg-repeat dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col px-5 md:px-32 mx-auto">
        <About />
        <Bio />
        <Experience />
        <Project />
        <Footer />
      </div>
    </>
  );
}
