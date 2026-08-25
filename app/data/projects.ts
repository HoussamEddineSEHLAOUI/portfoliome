export type Project = {
  id: string
  name: string
  description: string
  highlight?: string
  architecture?: string[]
  decisions?: string[]
  technologies: string[]
  githubUrl: string
  metric?: string
}

export const projects: Project[] = [
  {
    id: 'shopapp',
    name: 'ShopApp',
    description: 'Microservices e-commerce application built around independently deployable services.',
    highlight:
      'Event-driven microservices architecture with independent databases and centralized authentication.',
    architecture: ['Product Service', 'Order Service', 'Inventory Service', 'Notification Service'],
    decisions: [
      'Independent databases per service to keep ownership and scaling boundaries clean',
      'Apache Kafka for asynchronous, event-driven communication between services',
      'Keycloak for centralized authentication and authorization across the platform',
    ],
    technologies: ['SpringBoot', 'MongoDB', 'MySQL', 'Kafka', 'Keycloak'],
    githubUrl: 'https://github.com/HoussamEddineSEHLAOUI',
  },
  {
    id: 'emilog',
    name: 'EmiLog',
    description: 'School housing management system for tracking student accommodation and records.',
    metric: '+40% data accuracy',
    decisions: [
      'Structured relational data model to keep housing records consistent and auditable',
      'Improved data accuracy and operational efficiency by roughly 40% over the previous process',
    ],
    technologies: ['React', 'Node.js'],
    githubUrl: 'https://github.com/HoussamEddineSEHLAOUI',
  },
  {
    id: 'deliveryapp-ui',
    name: 'DeliveryApp UI',
    description: 'Cross-platform mobile UI for a delivery app, focused on a responsive, native-feeling experience.',
    decisions: [
      'Single React Native codebase targeting a consistent cross-platform experience',
      'Responsive layouts tuned for a smooth, native-feeling mobile UX',
    ],
    technologies: ['React Native'],
    githubUrl: 'https://github.com/HoussamEddineSEHLAOUI',
  },
]
