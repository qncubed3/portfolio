import { ProjectCard } from '../components/ui/ProjectCard'
import type { Project } from './types'

const project: Project = {
  id: 'pr-quadtree',
  name: 'Melbourne Footpath Spatial Index',
  date: 'January 2025',
  description: [
    'Built a point-region quadtree in C to index Melbourne footpath geometry by start and end coordinates. The structure supports fast point lookup and bounding-box search across the city’s footpath network. Boundary-aware quadrant partitioning handles shared coordinates and deduplicates results for area queries.',
  ],
  tools: ['C', 'Spatial Indexing', 'GCC', 'Make'],
  githubUrl: 'https://github.com/qncubed3/quadtree',
}

export function PRQuadtree() {
  return <ProjectCard project={project} />
}
