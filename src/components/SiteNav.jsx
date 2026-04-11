export default function SiteNav({ links }) {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary">
        <a className="brand" href="#home">
          <span className="brand-mark">R</span>
          <span>
            Ronnie's <small>Hair Salon</small>
          </span>
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#contact">
          Book Now
        </a>
      </nav>
    </header>
  )
}
