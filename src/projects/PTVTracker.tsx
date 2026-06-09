import { ProjectCard } from '../components/ui/ProjectCard'
import ptvTrackerImage from '../assets/ptv-tracker.png'
import ptvVideo from '../assets/ptv-video.mp4'
import type { Project } from './types'

const project: Project = {
  id: 'ptv-tracker',
  name: 'PTV Vehicle Tracker',
  date: 'January 2026',
  description: [
    'Built a full-stack geospatial web application with Next.js, React, TypeScript, and Mapbox to visualise real-time and historical public transport vehicle locations and service data across the PTV network.',
    'Developed a multi-threaded Python ingestion pipeline processing 600+ live vehicle updates per minute from the PTV API, applying geospatial validation to verify and correct train line assignments before storing data in PostgreSQL (Supabase) for real-time querying.',
  ],
  tools: [
    'TypeScript',
    'React',
    'Next.js',
    'Mapbox',
    'Python',
    'PostgreSQL',
    'Supabase',
  ],
  demoUrl: 'https://ptv-vehicle-tracker.vercel.app/',
  githubUrl: 'https://github.com/qncubed3/ptv-vehicle-tracker',
  previewAspectRatio: 1483 / 865,
  previewDarkFrame: true,
  previews: [
    {
      type: 'video',
      src: ptvVideo,
      alt: 'PTV Vehicle Tracker live map recording',
    },
    {
      type: 'image',
      src: ptvTrackerImage,
      alt: 'PTV Vehicle Tracker map showing live vehicle positions',
    },
  ],
}

export function PTVTracker() {
  return <ProjectCard project={project} />
}
