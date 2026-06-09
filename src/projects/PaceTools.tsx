import { ProjectCard } from '../components/ui/ProjectCard'
import paceToolsImage from '../assets/pace-tools.png'
import type { Project } from './types'

const project: Project = {
  id: 'pace-tools',
  name: 'Pace Tools',
  date: 'March 2026',
  description: [
    'Built a responsive web application for athletes to perform instant pace, distance and time calculations with multi-unit conversion, deployed on Vercel for public use.',
    'Integrated GitHub OAuth authentication via NextAuth.js with a PostgreSQL database and Prisma ORM, allowing users to save and manage personalised pace records across sessions.',
  ],
  tools: [
    'TypeScript',
    'React',
    'Next.js',
    'NextAuth.js',
    'Prisma',
    'PostgreSQL',
    'Tailwind',
  ],
  demoUrl: 'https://pace-tools-six.vercel.app/',
  githubUrl: 'https://github.com/qncubed3/pace-tools',
  image: paceToolsImage,
  imageAlt: 'Pace Tools pace, distance and time calculator',
}

export function PaceTools() {
  return <ProjectCard project={project} />
}
