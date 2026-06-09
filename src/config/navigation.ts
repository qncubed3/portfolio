export const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'thesis', label: 'Thesis' },
  { id: 'projects', label: 'Projects' },
] as const

export function scrollToSection(id: string) {
  const root = document.querySelector('.content')
  const section = document.getElementById(id)
  if (!root || !section) return

  const offset = parseFloat(getComputedStyle(section).scrollMarginTop) || 0
  const rootTop = root.getBoundingClientRect().top
  const sectionTop = section.getBoundingClientRect().top
  const top = root.scrollTop + sectionTop - rootTop - offset

  root.scrollTo({ top, behavior: 'smooth' })
}
