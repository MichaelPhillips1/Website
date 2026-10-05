export default function SectionHeading({ index, label, title, copy }) {
  return (
    <div className="section-heading reveal">
      <div className="section-label"><span>{index}</span>{label}</div>
      <div className="section-title-wrap">
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </div>
  )
}
