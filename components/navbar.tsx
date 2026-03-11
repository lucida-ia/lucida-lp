import {
  CircleQuestionMark,
  DollarSign,
  MessageCircle,
  School,
} from "lucide-react";
import { FloatingNav, NavItem } from "./ui/floating-navbar";

export default function Navbar() {
  const navItems: NavItem[] = [
    {
      name: "Como funciona",
      link: "/#how-it-works",
      type: "nav",
      icon: (
        <CircleQuestionMark className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Preços",
      link: "/prices",
      type: "nav",
      icon: <DollarSign className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contato",
      link: "/contact",
      type: "nav",
      icon: (
        <MessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Para instituições",
      link: "/contact/institutions",
      type: "nav",
      icon: <School className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return <FloatingNav navItems={navItems} />;
}
