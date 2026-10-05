export default function SectionHeading({ label, title, copy }) {
  return (
    <div className="section-heading">
      <p className="section-label">{label}</p>
      <div>
        <h2>{title}</h2>
        {copy && <p className="section-copy">{copy}</p>}
      </div>
    </div>
  )
}
