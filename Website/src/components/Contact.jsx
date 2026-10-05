import { profile } from '../data/resume'

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner reveal">
        <p className="contact-kicker">Get in touch</p>
        <h2>Have a hard problem worth building for?</h2>
        <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} ↗</a>
        <div className="contact-links">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="./resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
        </div>
      </div>
    </section>
  )
}
