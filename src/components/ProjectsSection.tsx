import { AthleticsVictoria } from '../projects/AthleticsVictoria'
import { PaceTools } from '../projects/PaceTools'
import { PRQuadtree } from '../projects/PRQuadtree'
import { PTVDisplay } from '../projects/PTVDisplay'
import { PTVTracker } from '../projects/PTVTracker'

export function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <ul className="project-list">
        <PTVTracker />
        <AthleticsVictoria />
        <PaceTools />
        <PRQuadtree />
        <PTVDisplay />
      </ul>
    </section>
  )
}
