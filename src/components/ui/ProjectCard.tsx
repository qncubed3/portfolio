import { useState } from 'react'
import { getProjectPreviews } from '../../projects/types'
import type { Project } from '../../projects/types'
import { ProjectPreviewDeck } from './ProjectPreviewDeck'

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [previewOpen, setPreviewOpen] = useState(true)
  const previews = getProjectPreviews(project)

  return (
    <li className="content-card">
      <div className="project-header">
        <h3 className="project-name">{project.name}</h3>
        <span className="project-date">{project.date}</span>
      </div>
      <div className="project-links">
        {project.demoUrl && (
          <a href={project.demoUrl} target="_blank" rel="noreferrer">
            Demo
          </a>
        )}
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
      {previews.length > 0 && (
        <div className="project-image-dropdown">
          <button
            type="button"
            className="project-image-toggle"
            onClick={() => setPreviewOpen((open) => !open)}
            aria-expanded={previewOpen}
            aria-controls={`project-preview-${project.id}`}
          >
            <span>{previewOpen ? 'Hide preview' : 'Show preview'}</span>
            <span
              className={`project-image-chevron${previewOpen ? ' open' : ''}`}
              aria-hidden="true"
            />
          </button>
          <div
            className={`project-preview-panel${previewOpen ? ' open' : ''}`}
            id={`project-preview-${project.id}`}
            aria-hidden={!previewOpen}
          >
            <div className="project-preview-panel-inner">
              <ProjectPreviewDeck
                items={previews}
                aspectRatio={project.previewAspectRatio}
                panelOpen={previewOpen}
                darkFrame={project.previewDarkFrame}
              />
            </div>
          </div>
        </div>
      )}
      {project.description.map((paragraph) => (
        <p key={paragraph} className="project-description">
          {paragraph}
        </p>
      ))}
      <ul className="project-tools">
        {project.tools.map((tool) => (
          <li key={tool} className="tool-pill">
            {tool}
          </li>
        ))}
      </ul>
    </li>
  )
}
