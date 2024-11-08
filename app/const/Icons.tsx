import { cn } from "@/lib/utils";
import { FaEnvelope } from "react-icons/fa";
import { FaGithubAlt, FaLinkedinIn } from "react-icons/fa6";

export type IconStruct = {
  label: string;
  icon: JSX.Element;
};

const icons = [
  {
    label: "GitHub",
    icon: (className?: string) => <FaGithubAlt className={cn(className)} />,
  },
  {
    label: "LinkedIn",
    icon: (className?: string) => <FaLinkedinIn className={cn(className)} />,
  },
  {
    label: "Email",
    icon: (className?: string) => <FaEnvelope className={cn(className)} />,
  },
];

export function getIcon(iconLabel: string, className?: string): JSX.Element {
  return Array.from(icons).filter((icon) => icon.label === iconLabel)[0].icon(className);
}

export default icons;
