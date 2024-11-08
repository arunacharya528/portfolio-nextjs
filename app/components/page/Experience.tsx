import Title from "../Title";
import {
  formatExperienceDate,
  getDifferenceOfExperienceDates,
} from "@/app/lib/Date";
import Retriever from "@/app/lib/Retriever";
import { Timeline } from "@/components/ui/timeline";

export default async function Experience() {
  const experiences = await Retriever.experience;

  return (
      <Timeline data={experiences.map((experience, index) => ({
        title: `
          ${formatExperienceDate(experience.duration.from)} 
          -
          ${formatExperienceDate(experience.duration.to)}
     
        (${getDifferenceOfExperienceDates(
          experience.duration.from,
          experience.duration.to
        )})`,
        content: <section className="">
          <div className="text-xl font-bold">Organization: {experience.company}</div>
          <h3 className="font-semibold mb-5">{experience.title}</h3>

          {experience.responsibilities.map((responsibility, index) => (
            <li key={index} className="text-sm">{responsibility}</li>
          ))}

        </section>

      }))}
        title="My Involvements"
        subTitle="I have been involved in backend development for the last 3 Years." />
  );
}
