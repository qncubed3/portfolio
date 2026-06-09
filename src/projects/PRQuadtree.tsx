import { ProjectCard } from '../components/ui/ProjectCard'
import type { Project } from './types'

const project: Project = {
  id: 'pr-quadtree',
  name: 'Melbourne Footpath Spatial Index (University Project)',
  date: '2022 Semester 2',
  description: [
    'Built a point-region (PR) quadtree in C to index Melbourne footpath geometry by start and end coordinates. The structure supports fast point lookup and bounding-box search across Melbourne\'s footpath network.',
  ],
  tools: ['C', 'Spatial Indexing', 'GCC', 'Make'],
  githubUrl: 'https://github.com/qncubed3/quadtree',
}

export function PRQuadtree() {
  return <ProjectCard project={project} />
}
