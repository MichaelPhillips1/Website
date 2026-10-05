import { education, profile } from '../data/resume'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section className="section background-section" id="background">
      <SectionHeading
        index="04"
        label="Background"
        title="Computer science is about impact as much as technical elegance."
      />

      <div className="background-grid">
        <div className="background-copy reveal">
          <p className="lead">
            I gravitate toward engineering work where the requirements are imperfect, the users are close to the problem, and the software has to make an existing process meaningfully better.
          </p>
          <p>
            My experience spans government-facing applications and data workflows, startup full-stack engineering, cloud infrastructure, computer vision, local LLM experimentation, systems programming, and game development. I like owning enough of the stack to understand how the whole system behaves.
          </p>
        </div>

        <div className="background-info reveal">
          <div>
            <span>Education</span>
            <strong>{education.shorthand}</strong>
            <p>{education.degree}</p>
            <p>{education.dates}</p>
          </div>
          <div>
            <span>Clearance</span>
            <strong>{profile.clearance}</strong>
            <p>Active U.S. Department of Defense security clearance.</p>
          </div>
          <div>
            <span>Location</span>
            <strong>{profile.location}</strong>
            <p>Open to software engineering opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
