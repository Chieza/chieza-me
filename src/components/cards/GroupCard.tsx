// File: src/components/cards/GroupCard.tsx
import React from 'react'
import type { SkillGroup } from '../../utils/skillGroups'
import { SKILL_GROUPS } from '../../utils/skillGroups'

// placeholder content per group
const contentMap: Record<SkillGroup, string[]> = {
  design:      ['Figma', 'Sketch', 'Adobe XD', 'Miro'],
  research:    ['User Interviews', 'Surveys', 'Persona Creation'],
  'soft-meta': ['Agile/Scrum', 'Sprint Planning', 'Async Collaboration'],
  management:  ['Roadmapping', 'Stakeholder Management', 'OKRs'],
  comms:       ['Workshops', 'Presentations', 'Writing'],
  dev:         ['React', 'TypeScript', 'Tailwind', 'Git'],
}

export interface GroupCardProps {
  group: SkillGroup
}

export default function GroupCard({ group }: GroupCardProps) {
  const { emoji, label } = SKILL_GROUPS[group]

  return (
    <div className="relative bg-white/20 backdrop-blur-lg rounded-lg p-6 w-80 text-white">
      {/* floating emoji in top-right */}
      <span className="absolute top-4 right-4 text-2xl">{emoji}</span>

      <h3 className="mb-4 text-xl font-semibold">{label}</h3>

      <ul className="list-disc list-inside space-y-2">
        {contentMap[group].map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
