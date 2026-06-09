import { AboutSection } from './components/AboutSection'
import { ProjectsSection } from './components/ProjectsSection'
import { Sidebar } from './components/Sidebar'
import { ThesisSection } from './components/ThesisSection'
import './styles/layout.css'
import './styles/cards.css'
import './styles/projects.css'
import './styles/thesis.css'

function App() {
  return (
    <div className="viewport">
      <div className="page">
        <Sidebar />

        <main className="content">
          <div className="content-inner">
            <AboutSection />

            <ThesisSection />

            <ProjectsSection />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
