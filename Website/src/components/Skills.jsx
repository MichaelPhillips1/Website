import { skillGroups } from '../data/resume'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeading
        label="Skills"
        title="Technical Skills"
        copy="Languages, frameworks, platforms, and engineering practices used across professional and project work."
      />

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skills-card" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
