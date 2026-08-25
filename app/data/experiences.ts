export type Experience = {
  id: string
  company: string
  role: string
  period: string
  location?: string
  current?: boolean
  post: string
  tags: string[]
  details?: string[]
}

export const experiences: Experience[] = [
  {
    id: 'bmce-capital',
    company: 'BMCE Capital',
    role: 'Software Engineer',
    period: 'April 2025 – Present',
    location: 'Casablanca, Morocco',
    current: true,
    post: 'Building and maintaining Java/Spring Boot and React applications that generate regulatory and business reporting from Kondor, Sophis and Sypex, including deliveries to Bank Al-Maghrib.',
    tags: ['Java', 'SpringBoot', 'React', 'Kondor', 'Sophis', 'Sypex', 'RiskManagement', 'Reporting'],
    details: [
      'Production troubleshooting',
      'Backend performance improvements',
      'Requirements analysis',
      'Coordination with internal users and external providers',
      'Code reviews and mentoring',
      'Application lifecycle management',
      'Compliance and reporting systems',
    ],
  },
  {
    id: 'logigroup',
    company: 'Logigroup',
    role: 'Software Engineer',
    period: 'December 2022 – March 2025',
    post: 'Focused on backend optimization and API reliability, working across Spring and Vue.js to migrate legacy systems and reduce technical debt.',
    tags: ['Spring', 'Vue.js', 'API Reliability', 'Legacy Migration', 'Technical Debt'],
  },
  {
    id: 'aikyo',
    company: 'Aikyo',
    role: 'Software Engineer',
    period: 'August 2022 – October 2022',
    post: 'Worked on telemedicine applications, building real-time chat features on Firebase with Python and Firebase Cloud Messaging.',
    tags: ['Telemedicine', 'Firebase', 'Real-time Chat', 'Python', 'FCM'],
  },
  {
    id: 'infine',
    company: 'Infine',
    role: 'Software Engineer Intern',
    period: 'February 2022 – June 2022',
    post: 'Explored machine learning and full-stack engineering, combining TypeScript, Angular, Spring Boot and Flask with Python and K-means clustering over APIs.',
    tags: ['Machine Learning', 'TypeScript', 'Angular', 'SpringBoot', 'Flask', 'Python', 'K-means'],
  },
  {
    id: 'marsa-maroc',
    company: 'Marsa Maroc',
    role: 'Software Engineer Intern',
    period: 'July 2021 – August 2021',
    post: 'Built backend APIs with Spring Boot and contributed to a React Native mobile client, alongside technical documentation.',
    tags: ['SpringBoot', 'Backend APIs', 'React Native', 'Documentation'],
  },
]
