export type SkillGroup = {
  label: string
  tags: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'Backend',
    tags: ['Java', 'Spring', 'SpringBoot', 'Node', 'Express', 'Python', 'Flask'],
  },
  {
    label: 'Frontend',
    tags: ['React', 'NextJS', 'Vue', 'Angular', 'TypeScript', 'JavaScript'],
  },
  {
    label: 'Architecture',
    tags: ['Microservices', 'REST', 'Kafka', 'OOP'],
  },
  {
    label: 'Databases',
    tags: ['SQL', 'MongoDB'],
  },
  {
    label: 'Infrastructure',
    tags: ['Docker', 'Git', 'Unix', 'Grafana', 'Keycloak'],
  },
]
