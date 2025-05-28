import classNames from 'classnames'
import type { SkillGroup } from '../../utils/skillGroups'
import { SKILL_GROUPS } from '../../utils/skillGroups'

export interface SkillsGroupButtonProps {
  group: SkillGroup
  isActive: boolean
  onClick: () => void
  className?: string
}

const activeStyles: Record<SkillGroup, string> = {
  design:       'bg-purple-600 text-white',
  research:     'bg-pink-600 text-white',
  'soft-meta':  'bg-indigo-900 text-white',
  management:   'bg-yellow-600 text-white',
  comms:        'bg-gray-600 text-white',
  dev:          'bg-sky-600 text-white',
}

export default function SkillsGroupButton({
  group,
  isActive,
  onClick,
  className = '',
}: SkillsGroupButtonProps) {
  const { label, emoji } = SKILL_GROUPS[group]

  return (
    <button
      onClick={onClick}
      className={classNames(
        'inline-flex items-center px-4 py-2 rounded-full cursor-pointer',
        isActive ? activeStyles[group] : 'bg-neutral-700 text-gray-300',
        className
      )}
    >
      <span className="mr-2 text-lg">{emoji}</span>
      <span>{label}</span>
    </button>
  )
}
