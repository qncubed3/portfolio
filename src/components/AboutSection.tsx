import { PROFILE } from '../config/profile'

export function AboutSection() {
  return (
    <section id="about" className="section section--compact">
      <h2>About</h2>
      <p>{PROFILE.about[0]}</p>
      <p>
        Outside of coding, I am a competitive marathon runner, math youtuber (running{' '}
        <a
          className="inline-link"
          href={PROFILE.youtubeUrl}
          target="_blank"
          rel="noreferrer"
        >
          qncubed3
        </a>
        ), university math tutor, and former VCE private math tutor. I have also been a
        CAS programmer on the TI-Nspire calculator since 2019, writing programs and
        software reaching over 3000 students across Victoria.
      </p>
    </section>
  )
}
