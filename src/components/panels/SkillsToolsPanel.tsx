import { useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GroupCard from "../cards/SkillsToolsGroupCard";
import type { SkillGroup } from "../../utils/skillGroups";

// Import backgrounds
import designBg from "../../assets/images/backgrounds/skill-groups/design.jpg";
import researchBg from "../../assets/images/backgrounds/skill-groups/research.jpg";
import softMetaBg from "../../assets/images/backgrounds/skill-groups/soft-meta.jpg";
import managementBg from "../../assets/images/backgrounds/skill-groups/management.jpg";
import commsBg from "../../assets/images/backgrounds/skill-groups/comms.jpg";
import devBg from "../../assets/images/backgrounds/skill-groups/dev.jpg";

const bgMap: Record<SkillGroup, string> = {
  design: designBg,
  research: researchBg,
  "soft-meta": softMetaBg,
  management: managementBg,
  comms: commsBg,
  dev: devBg,
};

// Possible entry offsets
const directions = [
  { x: -200, y: 0 },
  { x: 200, y: 0 },
  { x: 0, y: -200 },
  { x: 0, y: 200 },
];

export interface SkillsToolsCardProps {
  selected: SkillGroup;
}

export default function SkillsToolsCard({ selected }: SkillsToolsCardProps) {
  // pick a random direction each render
  const dir = useMemo(
    () => directions[Math.floor(Math.random() * directions.length)],
    [selected]
  );

  const variants = {
    initial: (d: typeof dir) => ({ x: d.x, y: d.y, opacity: 0 }),
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: (d: typeof dir) => ({
      x: -d.x,
      y: -d.y,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    }),
  };

  return (
    <div
      className="
        relative w-full h-100 overflow-hidden rounded-lg
        bg-center bg-cover
      "
    >
      <div
        className="absolute inset-0 bg-center bg-cover opacity-16"
        style={{ backgroundImage: `url(${bgMap[selected]})` }}
      />
      <AnimatePresence mode="wait">
        <motion.div
          key={selected}
          custom={dir}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0 flex items-center justify-center"
        >
          <GroupCard group={selected} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
