import { skillGroups } from '../data/resume'
import SectionHeading from './SectionHeading'

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <SectionHeading
        index="03"
        label="Technical Toolkit"
        title="The tools change. The job is still solving the problem."
      />

      <div className="skills-table reveal">
        {skillGroups.map((group) => (
          <div className="skills-row" key={group.title}>
            <h3>{group.title}</h3>
            <p>{group.items.join(' · ')}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
