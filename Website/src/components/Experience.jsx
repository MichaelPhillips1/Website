import { experience } from '../data/resume'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section className="section section-experience" id="experience">
      <SectionHeading
        index="01"
        label="Experience"
        title="Work that lives beyond the demo."
        copy="Software and data systems built around real users, operational constraints, and changing requirements."
      />

      <div className="experience-list">
        {experience.map((job, i) => (
          <article className="experience-row reveal" key={`${job.company}-${job.role}`}>
            <div className="experience-index">0{i + 1}</div>
            <div className="experience-main">
              <div className="experience-heading">
                <div>
                  <h3>{job.role}</h3>
                  <p className="company">{job.company}</p>
                </div>
                <div className="experience-meta">
                  <span>{job.dates}</span>
                  <span>{job.location}</span>
                </div>
              </div>
              <p className="experience-summary">{job.summary}</p>
              <ul className="experience-bullets">
                {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <div className="skill-line">{job.tags.join('  /  ')}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
