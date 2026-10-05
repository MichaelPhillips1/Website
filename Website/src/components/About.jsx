import { education, profile } from '../data/resume'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section className="section section-alt" id="background">
      <SectionHeading
        label="Background"
        title="Education & Professional Background"
      />

      <div className="background-grid">
        <div className="background-copy">
          <p className="lead">
            Computer Science graduate with experience in full-stack software development, data engineering, cloud infrastructure, and applied machine learning.
          </p>
          <p>
            Professional work has included DOE/NNSA client applications, relational data modeling, Python data pipelines, Microsoft Power Platform development, React-based software, REST APIs, SQL systems, and Azure infrastructure.
          </p>
        </div>

        <div className="background-info">
          <div>
            <span>Education</span>
            <strong>{education.shorthand}</strong>
            <p>{education.degree}</p>
            <p>{education.dates}</p>
          </div>
          <div>
            <span>Security Clearance</span>
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
