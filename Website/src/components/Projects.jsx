import { projects } from '../data/resume'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <SectionHeading
        label="Projects"
        title="Selected Technical Projects"
        copy="Independent software, data, and machine learning projects demonstrating practical implementation across multiple technical areas."
      />

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <p className="project-type">{project.eyebrow}</p>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <ul>
              {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
            <p className="project-tags">{project.tags.join(' · ')}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
