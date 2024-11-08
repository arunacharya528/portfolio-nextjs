import Retriever, { ProjectType } from "@/app/lib/Retriever";
import Title from "../Title";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "@/components/ui/animated-modal";
import { FaEye } from "react-icons/fa6";
import { MdOpenInNew } from "react-icons/md";

function ProjectDetailModal({ project }: {
  project: ProjectType
}) {
  return <Modal>
    <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn items-center text-sm">
      <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 font-semibold">
        View More
      </span>
      <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
        <FaEye className="size-5" />
      </div>
    </ModalTrigger>
    <ModalBody>
      <ModalContent>
        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
          {project.title}
        </h4>
        <div className="flex justify-center items-center">
          <Link href={project.preview_url ?? "#"} target="_blank" className="flex flex-1 w-full h-full min-h-64 rounded-xl flex-col justify-center relative border">
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
          </Link>
        </div>
        <p className="mt-4 text-base">
          {project.summary}
        </p>
        <div className="flex flex-wrap mt-4">
          {project.technologies?.map((technology, index) =>
            <span key={index} className="text-sm border dark:border-white/[0.2] border-black/[0.2] rounded-full text-black dark:text-white px-2 py-0.5 whitespace-nowrap mr-1 mb-1 font-semibold">
              {technology}
            </span>
          )}
        </div>
      </ModalContent>
      <ModalFooter className="gap-4">
        {
          project.project_url &&
          <Link href={project.project_url ?? "#"} target="_blank" className="px-5 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg flex gap-3">
            <FaGithub className="size-5" />
            Github
          </Link>
        }
        {
          project.demo_url &&
          <Link href={project.demo_url ?? "#"} target="_blank" className="px-5 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg flex gap-3">
            <MdOpenInNew className="size-5" />
            Demo
          </Link>
        }

      </ModalFooter>
    </ModalBody>
  </Modal>
}

export default async function Project() {
  const projects = await Retriever.projects;


  return (

    <section className="mx-auto w-full mt-20 min-h-screen">
      <Title className="font-bold">{<>My Projects</>}</Title>
      <p>Here are all the projects that i have been tinkering with.</p>

      <BentoGrid className="mt-8">
        {projects.map((project, i) => (
          <BentoGridItem
            key={i}
            title={project.title}
            description={<div className="grid gap-2 grid-cols-2">
              <ProjectDetailModal project={project} />
              <Link href={project.project_url ?? "#"} target="_blank" className="px-4 py-2 text-black backdrop-blur-sm border border-black rounded-md hover:shadow-[0px_0px_4px_4px_rgba(0,0,0,0.1)] bg-white/[0.2] text-sm transition duration-200 gap-2 flex justify-center items-center font-semibold">
                <FaGithub className="size-5" />
                Github
              </Link>
            </div>}
            header={<>
              <Link href={project.preview_url ?? "#"} target="_blank" className="flex flex-1 w-full min-h-32 md:min-h-64 rounded-xl flex-col justify-center border relative ">
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
              </Link>
            </>}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

