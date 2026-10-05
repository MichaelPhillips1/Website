import { experience } from '../data/resume'
import SectionHeading from './SectionHeading'

export default function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHeading
        label="Experience"
        title="Professional Experience"
        copy="Software engineering, data engineering, and technical leadership experience across government, consulting, startup, and enterprise environments."
      />

      <div className="experience-list">
        {experience.map((job) => (
          <article className="experience-row" key={`${job.company}-${job.role}`}>
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
            <div className="skill-line">{job.tags.join(' · ')}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
