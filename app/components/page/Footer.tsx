import { getIcon } from "@/app/const/Icons";
import Retriever from "@/app/lib/Retriever";
import dayjs from "dayjs";
import Link from "next/link";

export default async function Footer() {
  const links = await Retriever.links;
  const name = await Retriever.name;

  return <footer className="flex flex-col">
    <div className="flex flex-row justify-between items-center  py-10 border-t">
      <div>
        &copy; {new Date().getFullYear()} {name}
      </div>
      <div className="space-x-5 flex flex-row">
        {links.map((link, index) =>
          <Link key={index} href={link.href}>{getIcon(link.title, "size-6")}</Link>)
        }
      </div>
    </div>
  </footer>;
}
