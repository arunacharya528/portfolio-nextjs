import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export type IconStruct = {
  label: string;
  icon: JSX.Element;
};

const icons = [
  {
    label: "GitHub",
    icon: <FaGithub />,
  },
  {
    label: "LinkedIn",
    icon: <FaLinkedin />,
  },
  {
    label: "Email",
    icon: <FaEnvelope />,
  },
];

export function getIcon(iconLabel: string): JSX.Element {
  return Array.from(icons).filter((icon) => icon.label === iconLabel)[0].icon;
}

export default icons;
