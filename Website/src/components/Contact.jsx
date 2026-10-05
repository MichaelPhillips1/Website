import { profile } from '../data/resume'

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="contact-layout">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Contact Information</h2>
          <p>For professional inquiries, recruiting, or project discussions, feel free to reach out directly.</p>
        </div>
        <div className="contact-details">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href="./resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>
    </section>
  )
}
