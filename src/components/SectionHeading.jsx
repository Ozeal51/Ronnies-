// Reusable section title block with optional eyebrow text and alignment.
export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`section-heading ${align === 'center' ? 'is-centered' : ''}`}>
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  )
}
