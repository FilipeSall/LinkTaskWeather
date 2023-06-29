import { MdOutlineDesignServices, MdRemoveRedEye, MdSave } from "react-icons/md";
import { SiCoffeescript } from "react-icons/si";

export const Headerbuttons = [
    {
      href: "/",
      text: "Início",
      icon: <SiCoffeescript />,
      className: "headerBtn",
    },
    {
      href: "/frontend",
      text: "Front-end",
      icon: <MdRemoveRedEye />,
      className: "headerBtn",
    },
    {
      href: "/backend",
      text: "Back-end",
      icon: <MdSave />,
      className: "headerBtn",
    },
    {
      href: "/design",
      text: "UI/UX design",
      icon: <MdOutlineDesignServices />,
      className: "headerBtn",
    },
  ]

