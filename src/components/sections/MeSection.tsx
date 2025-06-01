import MeCard from "../cards/MeCard";
import { useSectionRegistry } from "../../hooks/useSectionRegistry";
import { HiUser } from "react-icons/hi";

interface MeSectionProps {
  id: string;
}

export default function MeSection({ id }: MeSectionProps) {
  useSectionRegistry(id, HiUser, 'About Me');
  return (
    <section
      id={id}
      className="
      flex justify-center items-center
      w-full
      px-4 pt-24 pb-8
      sm:px-8 sm:pt-32 sm:pb-16
      lg:px-16 lg:pt-48 lg:pb-32
      2xl:h-[calc(100vh-4rem)]
      "
    >
      <MeCard />
    </section>
  );
}
