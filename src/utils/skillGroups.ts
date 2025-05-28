export type SkillGroup = 'design' | 'research' | 'soft-meta' | 'management' | 'comms' | 'dev';

export interface SkillGroupMeta {
  label: string;
  emoji: string;
}

export const SKILL_GROUPS: Record<SkillGroup,SkillGroupMeta> = {
  design:      { label: 'Design',           emoji: '🎨' },
  research:    { label: 'Research/Process', emoji: '🧠' },
  'soft-meta': { label: 'Soft/Meta',        emoji: '☁️' },
  management:  { label: 'Management',       emoji: '📝' },
  comms:       { label: 'Comms',            emoji: '💬' },
  dev:         { label: 'Dev',              emoji: '⚙️' },
};