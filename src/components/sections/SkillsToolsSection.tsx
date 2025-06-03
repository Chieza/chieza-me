import { useState } from "react";
import SkillsGroupButton from "../buttons/SkillsGroupButton";
import type { SkillGroup } from "../../utils/skillGroups";
import SkillsToolsPanel from "../panels/SkillsToolsPanel";
import { useSectionRegistry } from "../../hooks/useSectionRegistry";
import { HiOutlinePuzzle } from "react-icons/hi";
import { SectionLayout } from '../layouts/index'

interface SkillsToolsProps {
  id: string;
}

const allGroups: SkillGroup[] = [
  "design",
  "research",
  "soft-meta",
  "management",
  "comms",
  "dev",
];

export default function SkillsTools({ id }: SkillsToolsProps) {
  const [selected, setSelected] = useState<SkillGroup>("design");
  useSectionRegistry(id, HiOutlinePuzzle, "Skills & Tools");

  return (
    <SectionLayout
      id={id}
      className="min-h-[calc(100vh+2rem)] flex flex-col items-center justify-center"
    >
      <div
        className="w-full max-w-[1200px]
        relative z-10
        flex flex-col
        gap-8"
      >
        <h2 className="text-white text-4xl md:text-6xl font-bold">
          Skills &amp; Tools
        </h2>
        <p className="text-base text-gray-300">
          This is the “No Fluff” Section, only showcasing skills and tools I'm
          fully confident in. If a specific skill or tool isn't listed, it
          doesn't mean I'm unfamiliar with it or can't master it, it's just not
          a primary focus here.
        </p>

        {/* Toggle buttons */}
        <div className="flex flex-wrap gap-4 md:gap-8">
          {allGroups.map((g) => (
            <SkillsGroupButton
              key={g}
              group={g}
              isActive={g === selected}
              onClick={() => setSelected(g)}
            />
          ))}
        </div>

        {/* Animated Card */}
        <SkillsToolsPanel selected={selected} />
      </div>
    </SectionLayout>
  );
}
