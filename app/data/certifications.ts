export type Certification = {
  id: string
  name: string
  issuer: string
  year: string
  credentialId?: string
}

export const certifications: Certification[] = [
  {
    id: 'python-specialization',
    name: 'Python Specialization',
    issuer: 'University of Michigan',
    year: '2020',
    credentialId: '5JQ42L7G3YJW',
  },
]

export const education = {
  heading: 'Engineering foundation',
  degree: 'Engineering Degree — Computer Science',
  school: 'Mohammadia School of Engineers',
  location: 'Rabat',
  year: '2022',
  subjects: ['Data Structures', 'Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks'],
  prep: {
    note: 'Preparatory classes',
  },
}
