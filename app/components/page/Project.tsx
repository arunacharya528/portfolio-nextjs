import Retriever from "@/app/lib/Retriever";
import Title from "../Title";
import Image from "next/image";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";

export default async function Project() {
  const projects = await Retriever.projects;

  return (
    <section className="py-10">
      <Title>{<>My Projects</>}</Title>

      {projects.map((project, index) => (
        <div
          className="flex flex-col md:flex-row md:space-x-10 mt-8 items-center space-y-4 md:space-y-0"
          key={index}
        >
          <div className="w-64 h-52 flex-none flex flex-col justify-center relative">
            {Boolean(project.preview_url) && (
              <Image
                src={project.preview_url ?? ""}
                alt={project.title + " preview"}
                className="w-full h-auto object-contain"
                priority={true}
                fill={true}
                sizes="100%"
              />
            )}
          </div>
          <div className="grow flex flex-col space-y-4">
            <div className="font-bold text-lg">{project.title}</div>
            <p className="grow">{project.summary}</p>
            <div className="flex flex-wrap">
              {project.technologies?.map((technology, index) => (
                <span className="badge" key={index}>
                  {technology}
                </span>
              ))}
            </div>
            <div className="flex space-x-2">
              {Boolean(project.project_url) && (
                <a
                  className="btn gap-3 flex items-center"
                  href={project.project_url ?? "#"}
                  target="_blank"
                >
                  GitHub
                  <HiArrowTopRightOnSquare className="w-5 h-5 inline" />
                </a>
              )}
              {Boolean(project.demo_url) && (
                <a
                  className="btn gap-3 flex items-center"
                  href={project.demo_url ?? "#"}
                  target="_blank"
                >
                  Demo
                  <HiArrowTopRightOnSquare className="w-5 h-5 inline" />
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
