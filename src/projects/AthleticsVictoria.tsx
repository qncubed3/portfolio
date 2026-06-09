import { ProjectCard } from '../components/ui/ProjectCard'
import athsvicImage from '../assets/athsvic1.png'
import athsvicVideo from '../assets/athsvic-video.mp4'
import type { Project } from './types'

const project: Project = {
  id: 'athletics-victoria',
  name: 'AthsVic Insights',
  date: 'June 2026',
  description: [
    'Built a full-stack analytics dashboard for Athletics Victoria race data, with a Next.js frontend and Django REST API that normalises the legacy ResultsHub feed into structured JSON endpoints.',
    'Developed interactive views including a Leaflet venue map with meet counts, athlete head-to-head comparison, and calendar and results browsing, with custom parsers for relay leg data and HTML athlete result tables.',
  ],
  tools: [
    'TypeScript',
    'React',
    'Next.js',
    'Python',
    'Django',
    'REST APIs',
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
