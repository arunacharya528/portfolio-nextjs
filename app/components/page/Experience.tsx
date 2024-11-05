import Title from "../Title";
import {
  formatExperienceDate,
  getDifferenceOfExperienceDates,
} from "@/app/lib/Date";
import Retriever from "@/app/lib/Retriever";

export default async function Experience() {
  const experiences = await Retriever.experience;

  return (
    <section className="min-h-screen py-10">
      <Title>{<>Experience</>}</Title>
      <div className="flex flex-col space-y-5 mt-10">
        {experiences.map((experience, index) => (
          <section key={index}>
            <h3 className="font-bold">{experience.title}</h3>
            <div className="mb-2">{experience.company}</div>
            <div className="mb-2 text-sm">
              {formatExperienceDate(experience.duration.from) +
                " - " +
                formatExperienceDate(experience.duration.to)}{" "}
              (
              {getDifferenceOfExperienceDates(
                experience.duration.from,
                experience.duration.to
              )}
              )
            </div>

            <ul className="text-sm space-y-1 list-disc ms-5">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
