import MeCard from "../cards/MeCard";
import { useSectionRegistry } from "../../hooks/useSectionRegistry";
import { HiUser } from "react-icons/hi";
import { SectionContentLayout } from "../layouts/index";

interface MeSectionProps {
  id: string;
}

export default function MeSection({ id }: MeSectionProps) {
  useSectionRegistry(id, HiUser, "About Me");
  return (
    <SectionContentLayout
      id={id}
      className="min-h-[calc(100vh+8rem)] justify-center items-center"
      contentClassName="justify-center items-center"
    >
      <MeCard />
    </SectionContentLayout>
  );
}
