import MeCard from "../cards/MeCard";
import { useSectionRegistry } from "../../hooks/useSectionRegistry";
import { HiUser } from "react-icons/hi";
import { SectionLayout } from '../layouts/index'

interface MeSectionProps {
  id: string;
}

export default function MeSection({ id }: MeSectionProps) {
  useSectionRegistry(id, HiUser, "About Me");
  return (
    <SectionLayout
      id={id}
      className="min-h-[calc(100vh+2rem)] flex justify-center items-center"
    >
      <MeCard />
    </SectionLayout>
  );
}