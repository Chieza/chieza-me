import type { SkillGroup } from '../../utils/skillGroups'
import { SKILL_GROUPS } from '../../utils/skillGroups'

// placeholder content per group
const contentMap: Record<SkillGroup, string[]> = {
  design:      ['Figma', 'Figjam', 'Design System', 'LottieFiles', 'Adobe XD'],
  research:    ['Design Thinking', 'Usability Testing', 'User Flows', 'Wireframing', 'Surveys', 'Documentation'],
  'soft-meta': ['Agile/Scrum', 'Sprint Planning','Autonomy', 'Async Collaboration', 'Accessibility Awareness'],
  management:  ['Azuer DevOps', 'ClickUp', 'Notion', 'Google Workspace', 'Trello'],
  comms:       ['Microsoft Teams', 'Discord', 'Slack', 'Feel others'],
  dev:         ['React', 'TypeScript', 'Tailwind', 'GitHub', 'Vite', 'HTML & CSS'],
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
