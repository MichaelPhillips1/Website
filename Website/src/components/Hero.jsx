import { profile } from '../data/resume'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-title-block reveal">
        <p className="hero-overline">Software Engineer · Arlington, VA</p>
        <h1>Michael<br />Phillips</h1>
        <p className="hero-role">Software engineering, data systems, and applied AI.</p>
      </div>

      <div className="hero-intro reveal reveal-delay">
        <p className="hero-statement">{profile.summary}</p>
        <p className="hero-detail">
          I currently build client-facing software and data workflows supporting DOE/NNSA stakeholders, with prior full-stack engineering experience at Peraton and as CTO of a startup platform.
        </p>
        <div className="hero-links">
          <a href="#experience">View experience ↓</a>
          <a href="./resume.pdf" target="_blank" rel="noreferrer">Download resume ↗</a>
        </div>
      </div>

      <div className="hero-facts" aria-label="Profile facts">
        <div><span>Current</span><strong>Technomics, Inc.</strong></div>
        <div><span>Education</span><strong>Virginia Tech · B.S. Computer Science</strong></div>
        <div><span>Clearance</span><strong>{profile.clearance}</strong></div>
      </div>
    </section>
  )
}
