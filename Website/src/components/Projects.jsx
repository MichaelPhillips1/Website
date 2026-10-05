import { projects } from '../data/resume'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section className="section" id="projects">
      <SectionHeading
        index="02"
        label="Selected Projects"
        title="Things I built because I wanted the system to exist."
      />

      <div className="project-list">
        {projects.map((project, i) => (
          <article className="project-row reveal" key={project.title}>
            <div className="project-number">0{i + 1}</div>
            <div className="project-copy">
              <span className="project-type">{project.eyebrow}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="project-details">
              <ul>
                {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
              <span>{project.tags.join(' · ')}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
