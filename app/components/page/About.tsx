import { HiMapPin } from "react-icons/hi2";
import Retriever from "../../lib/Retriever";
import Title from "../Title";

export default async function About() {
  const name = await Retriever.name;
  const title = await Retriever.title;
  const about = await Retriever.about;
  const location = await Retriever.location;

  return (
    <section className="h-screen flex justify-center flex-col">
      <Title>{<>{name}</>}</Title>
      <div className="text-sm mb-8">{title}</div>
      <p className="mb-8">{about}</p>
      <div className="">
        <HiMapPin className="w-6 h-6 inline-block mr-2" />
        <span className="leading-4">{location}</span>
      </div>
    </section>
  );
}
