// Service item card used in the services grid.
export default function ServiceCard({ title, description, price, icon }) {
  return (
    <article className="service-card">
      <div className="service-icon" aria-hidden="true">
        {icon}
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      {price ? <span className="service-price">{price}</span> : null}
    </article>
  )
}
