import { useEffect, useState } from 'react'
import { SECTIONS } from '../config/navigation'

export function useActiveSection() {
  const [activeId, setActiveId] = useState<string>(SECTIONS[0].id)

  useEffect(() => {
    const root = document.querySelector('.content')
    if (!root) return

    const sectionIds = SECTIONS.map((section) => section.id)

    const updateActive = () => {
      const rootRect = root.getBoundingClientRect()
      const sampleSection = document.getElementById(sectionIds[0])
      const offset = sampleSection
        ? parseFloat(getComputedStyle(sampleSection).scrollMarginTop)
        : 0
      const marker = rootRect.top + offset

      let current = sectionIds[0]
      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (!section) continue
        if (section.getBoundingClientRect().top <= marker) {
          current = id
        }
      }
      setActiveId(current)
    }

    updateActive()
    root.addEventListener('scroll', updateActive, { passive: true })
    window.addEventListener('resize', updateActive)

    return () => {
      root.removeEventListener('scroll', updateActive)
      window.removeEventListener('resize', updateActive)
    }
  }, [])

  return activeId
}
