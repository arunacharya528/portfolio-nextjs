import { getIcon } from "@/app/const/Icons";
import Retriever from "@/app/lib/Retriever";
import React from "react";

export default async function Links() {
  const links = await Retriever.links;
  return (
    <div className="fixed bottom-2 left-2 md:bottom-5 md:left-5 space-y-5">
      {links.map((link, index) => {
        let icon = React.cloneElement(getIcon(link.title), {
          className: `w-5 h-5 md:w-8 md:h-8`,
        });
        return (
          <a href={link.href} target="_blank" className="block" key={index}>
            {icon}
          </a>
        );
      })}
    </div>
  );
}
