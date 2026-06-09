import { ProjectCard } from '../components/ui/ProjectCard'
import ptvDisplayImage from '../assets/ptv-display.jpeg'
import type { Project } from './types'

const project: Project = {
  id: 'ptv-display',
  name: 'ESP32 Live PTV Display',
  date: 'May 2026',
  description: [
    'A Python REST API and ESP32 firmware that pulls live Melbourne train departures and shows them on an SSD1306 OLED display.',
    'The API returns compact JSON for the microcontroller; the device supports configurable station, platform, and how many departures to show.',
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
