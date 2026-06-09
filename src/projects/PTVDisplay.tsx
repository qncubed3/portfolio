import { ProjectCard } from '../components/ui/ProjectCard'
import ptvDisplayImage from '../assets/ptv-display.jpeg'
import type { Project } from './types'

const project: Project = {
  id: 'ptv-display',
  name: 'ESP32 Live PTV Display',
  date: 'May 2026',
  description: [
    'An API pulling live Melbourne train departures from AnyTrip APIs and returns a compact JSON object to be consumed by an ESP32 microcontroller and displayed on an SSD1306 OLED display.'
  ],
  tools: ['Python', 'FastAPI', 'REST APIs', 'ESP32', 'Arduino C++'],
  demoUrl: 'https://esp32-ptv-display-um8x.vercel.app/docs',
  githubUrl: 'https://github.com/qncubed3/esp32-ptv-display',
  image: ptvDisplayImage,
  imageAlt: 'ESP32 live PTV departure display on OLED',
}

export function PTVDisplay() {
  return <ProjectCard project={project} />
}
