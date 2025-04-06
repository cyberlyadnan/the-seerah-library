import { Feature } from "@/types/feature";
import { BsBookHalf, BsGlobe, BsPeople, BsCalendar2Check } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaMosque } from "react-icons/fa";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <BsBookHalf size={40} className="text-primary" />,
    title: "Authentic Seerah Content",
    paragraph:
      "Explore the life of Prophet Muhammad ﷺ through verified and trusted sources with clear references.",
  },
  {
    id: 2,
    icon: <BsGlobe size={40} className="text-primary" />,
    title: "Global Relevance",
    paragraph:
      "Understand how the teachings of Seerah are relevant to modern challenges and global issues today.",
  },
  {
    id: 3,
    icon: <FaMosque size={40} className="text-primary" />,
    title: "Chronological Timeline",
    paragraph:
      "Follow the journey of the Prophet ﷺ from birth to prophethood, migration, and beyond with a clear timeline.",
  },
  {
    id: 4,
    icon: <BsPeople size={40} className="text-primary" />,
    title: "Sahaba Highlights",
    paragraph:
      "Learn about the beloved companions of the Prophet ﷺ and their sacrifices for Islam.",
  },
  {
    id: 5,
    icon: <HiOutlineLightBulb size={40} className="text-primary" />,
    title: "Wisdom & Lessons",
    paragraph:
      "Extract valuable life lessons, leadership skills, and spiritual insights from the Seerah.",
  },
  {
    id: 6,
    icon: <BsCalendar2Check size={40} className="text-primary" />,
    title: "Events & Battles",
    paragraph:
      "Deep dive into key events like Hijrah, Badr, Uhud, and Hudaybiyyah with contextual analysis.",
  },
];

export default featuresData;
