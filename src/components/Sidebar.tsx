import profilePicture from '../assets/profile-picture-white.png'
import { PROFILE } from '../config/profile'
import { SECTIONS, scrollToSection } from '../config/navigation'
import { useActiveSection } from '../hooks/useActiveSection'

export function Sidebar() {
  const activeId = useActiveSection()

  return (
    <aside className="sidebar">
      <div className="profile-avatar">
        <img
          src={profilePicture}
          alt=""
          className="profile-avatar-image"
        />
      </div>
      <h1 className="name">{PROFILE.name}</h1>
      <a className="email" href={`mailto:${PROFILE.email}`}>
        {PROFILE.email}
      </a>
      <p className="description">{PROFILE.description}</p>
      <nav className="nav" aria-label="Page sections">
        <p className="nav-label">Menu</p>
        <ul>
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <button
                type="button"
                className={`nav-link${activeId === id ? ' active' : ''}`}
                onClick={() => scrollToSection(id)}
                aria-current={activeId === id ? 'true' : undefined}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}
