import Retriever from "@/app/lib/Retriever";
import Title from "../Title";

export default async function Bio() {
    const about = await Retriever.about;

    return <div className="mx-auto min-h-screen flex justify-center items-start flex-col">
        <Title className="font-semibold">About Me</Title>
        <div dangerouslySetInnerHTML={{ __html: about }}>
        </div>
    </div>;
}