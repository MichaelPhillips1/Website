import { profile } from '../data/resume'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-main">
        <p className="eyebrow">Software Engineer</p>
        <h1>Michael Phillips</h1>
        <p className="hero-summary">{profile.summary}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="./resume.pdf" target="_blank" rel="noreferrer">View Resume</a>
          <a className="button button-secondary" href="#experience">View Experience</a>
        </div>
      </div>

      <aside className="profile-card" aria-label="Professional profile">
        <dl>
          <div><dt>Location</dt><dd>{profile.location}</dd></div>
          <div><dt>Current Role</dt><dd>Associate, Technomics, Inc.</dd></div>
          <div><dt>Education</dt><dd>Virginia Tech · B.S. Computer Science</dd></div>
          <div><dt>Clearance</dt><dd>{profile.clearance}</dd></div>
        </dl>
        <div className="profile-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </aside>
    </section>
  )
}
