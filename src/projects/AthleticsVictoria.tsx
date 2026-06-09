import { ProjectCard } from '../components/ui/ProjectCard'
import athsvicImage from '../assets/athsvic1.png'
import athsvicVideo from '../assets/athsvic-video.mp4'
import type { Project } from './types'

const project: Project = {
  id: 'athletics-victoria',
  name: 'Athletics Victoria Analytics Platform',
  date: 'May 2026',
  description: [
    'Built a full-stack analytics platform for Athletics Victoria race data using Typescript and React on the frontend, with Next.js and Django on the backend, normalising semistructured ResultsHub feed into clean JSON API endpoints.',
    'Developed interactive views including a Mapbox relay replay animation, Leaflet venue map with meet counts, athlete head-to-head comparison, calendar event views, and athlete results tables and charts.',
  ],
  tools: [
    'TypeScript',
    'React',
    'Next.js',
    'Python',
    'Django',
    'Mapbox',
    'Leaflet',
    'Recharts',
  ],
  demoUrl: 'https://athletics-victoria-app.vercel.app/',
  githubUrl: 'https://github.com/qncubed3/athletics-victoria-app',
  previewDarkFrame: true,
  previews: [
    {
      type: 'video',
      src: athsvicVideo,
      alt: 'AthsVic Insights app screen recording',
    },
    {
      type: 'image',
      src: athsvicImage,
      alt: 'AthsVic Insights venues map showing competition locations across Victoria',
    },
  ],
}

export function AthleticsVictoria() {
  return <ProjectCard project={project} />
}
