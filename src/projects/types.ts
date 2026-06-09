export type PreviewMedia = {
  type: 'image' | 'video'
  src: string
  alt?: string
}

export type Project = {
  id: string
  name: string
  date: string
  description: string[]
  tools: string[]
  demoUrl?: string
  githubUrl: string
  previews?: PreviewMedia[]
  previewAspectRatio?: number
  previewDarkFrame?: boolean
  image?: string
  video?: string
  imageAlt?: string
}

export function getProjectPreviews(project: Project): PreviewMedia[] {
  if (project.previews?.length) return project.previews

  const items: PreviewMedia[] = []
  if (project.video) {
    items.push({
      type: 'video',
      src: project.video,
      alt: project.imageAlt,
    })
  }
  if (project.image) {
    items.push({
      type: 'image',
      src: project.image,
      alt: project.imageAlt,
    })
  }
  return items
}
