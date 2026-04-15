import { useState } from 'react'
import heroImage from './assets/ronnies.jpeg'
import GalleryGrid from './components/GalleryGrid'
import SectionHeading from './components/SectionHeading'
import ServiceCard from './components/ServiceCard'
import SiteNav from './components/SiteNav'
import './App.css'

// Primary one-page navigation links (used in header and footer).
const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'New Guests' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

// Core salon offerings displayed in the service menu section.
const services = [
  {
    title: 'Braiding',
    description: 'Neat, durable braids styled with precision for everyday elegance and special occasions.',
    price: 'From ₦15,000',
    icon: <ServiceIcon type="braid" />,
  },
  {
    title: 'Wig Installation',
    description: 'Natural-looking installs, secure finishes, and expert customization for a flawless fit.',
    price: 'From ₦10,000',
    icon: <ServiceIcon type="wig" />,
  },
  {
    title: 'Hair Treatment',
    description: 'Restorative treatment sessions to nourish, strengthen, and revive healthy hair growth.',
    price: 'From ₦12,000',
    icon: <ServiceIcon type="treatment" />,
  },
  {
    title: 'Styling',
    description: 'Soft glam blowouts, sleek ponytails, and polished looks tailored to your mood.',
    price: 'From ₦8,000',
    icon: <ServiceIcon type="styling" />,
  },
  {
    title: 'Coloring',
    description: 'Professional color services with rich tones that enhance depth, shine, and personality.',
    price: 'Consultation needed',
    icon: <ServiceIcon type="color" />,
  },
  {
    title: 'Scalp Care',
    description: 'Gentle scalp cleansing and pampering rituals that support comfort and balance.',
    price: 'From ₦6,000',
    icon: <ServiceIcon type="care" />,
  },
]

// New guest journey, inspired by the reference flow.
const guestSteps = [
  {
    number: '01',
    title: 'Choose Your Service',
    description: 'Select your ideal service from braiding, installs, treatment, coloring, and styling.',
    action: { label: 'View Service Menu', href: '#services' },
  },
  {
    number: '02',
    title: 'Tell Us Your Goal',
    description: 'Share your desired look, hair history, and timing so we can personalize your appointment.',
    action: { label: 'Send a Message', href: '#contact' },
  },
  {
    number: '03',
    title: 'Book Your Appointment',
    description: 'Secure your date via WhatsApp and get ready for your premium Ronnie’s salon experience.',
    action: { label: 'Book Now', href: 'https://wa.me/2348033207529?text=Hello%20Ronnie%27s%20Hair%20Salon,%20I%20would%20like%20to%20book%20an%20appointment.' },
  },
]

const testimonials = [
  {
    quote: 'Lovely ambience, very neat braids, and the service felt premium from start to finish.',
    author: '— Amina M.',
  },
  {
    quote: 'My wig install looked so natural. Ronnie’s team is patient, professional, and very skilled.',
    author: '— Chidinma O.',
  },
  {
    quote: 'I came in for treatment and styling and left feeling confident and refreshed. Highly recommended!',
    author: '— Esther K.',
  },
]

const specialties = [
  {
    title: 'The Signature Ronnie Blend',
    description:
      'A balanced color + treatment package that adds depth, shine, and healthy softness while keeping your look effortlessly elegant.',
  },
  {
    title: 'Luxury Wig Perfection',
    description:
      'Custom wig fitting, secure installation, and seamless finishing tailored for natural movement and confident wear.',
  },
  {
    title: 'Glow & Restore Treatment',
    description:
      'Intensive hydration and scalp-focused care designed to revive stressed hair and support long-term strength.',
  },
]

// Responsive gallery placeholders to showcase salon aesthetics.
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&w=900&q=80',
    alt: 'Woman with a polished braided hairstyle',
  },
  {
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80',
    alt: 'Elegant beauty portrait with soft glam styling',
  },
  {
    src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80',
    alt: 'Luxury salon hairstyle close-up',
  },
  {
    src: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?auto=format&fit=crop&w=900&q=80',
    alt: 'Styled hair in a modern beauty studio',
  },
  {
    src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80',
    alt: 'Natural curls styled for a premium salon look',
  },
  {
    src: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a9f3?auto=format&fit=crop&w=900&q=80',
    alt: 'Chic salon portrait with warm feminine tones',
  },
]

function App() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [emailSignup, setEmailSignup] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false)

  // External contact and location links used across CTA areas.
  const whatsappLink = 'https://wa.me/2348033207529?text=Hello%20Ronnie%27s%20Hair%20Salon,%20I%20would%20like%20to%20book%20an%20appointment.'
  const instagramLink = 'https://instagram.com/ronnieshairsalon'
  const locationLink = 'https://www.google.com/maps/search/?api=1&query=Aminu+Kano+Crescent+Wuse+2+Abuja+Nigeria'

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormState((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setFormState({ name: '', email: '', message: '' })
  }

  const handleNewsletterSubmit = (event) => {
    event.preventDefault()
    setNewsletterSubmitted(true)
    setEmailSignup('')
  }

  return (
    <div className="app-shell rose-inspired-theme">
      <SiteNav links={navLinks} />

      <main>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <div className="hero-copy reveal">
              <span className="pill">Ronnie&apos;s Hair Salon · Wuse 2, Abuja</span>
              <p className="hero-kicker">Let us help you blossom into your best self.</p>
              <h1>Luxury beauty experiences tailored for modern women.</h1>
              <p className="hero-text">
                At Ronnie&apos;s Hair Salon, we blend artistry, healthy hair practices, and feminine elegance
                to deliver beautiful, confidence-boosting results every visit.
              </p>
              <div className="hero-actions">
                <a className="primary-button" href={whatsappLink} target="_blank" rel="noreferrer">
                  Book Appointment
                </a>
                <a className="secondary-button" href="#experience">
                  New Guest Guide
                </a>
              </div>
              <div className="hero-metrics" aria-label="Salon highlights">
                <div>
                  <strong>5-Star</strong>
                  <span>customer care focus</span>
                </div>
                <div>
                  <strong>Healthy Hair</strong>
                  <span>treatment-first approach</span>
                </div>
                <div>
                  <strong>Premium</strong>
                  <span>soft glam finishes</span>
                </div>
              </div>
            </div>

            <div className="hero-visual reveal">
              <div className="hero-image-card">
                <img src={heroImage} alt="Ronnie's Hair Salon sign" />
                <div className="image-badge">Aminu Kano Crescent, Wuse 2 · Abuja</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section guest-section" id="experience">
          <div className="container">
            <SectionHeading
              eyebrow="The New Guest Experience"
              title="A calm three-step path to your perfect hair day."
              description="Inspired by premium salon booking journeys, we make getting started simple, clear, and stress-free."
              align="center"
            />

            <div className="guest-grid">
              {guestSteps.map((step) => (
                <article className="guest-card reveal" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <a
                    href={step.action.href}
                    className="inline-link"
                    target={step.action.href.startsWith('http') ? '_blank' : undefined}
                    rel={step.action.href.startsWith('http') ? 'noreferrer' : undefined}
                  >
                    {step.action.label}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container">
            <SectionHeading
              eyebrow="About Us"
              title="A feminine salon experience rooted in beauty, confidence, and care."
              description="Ronnie's Hair Salon serves women who value polished looks, healthy hair, and a welcoming luxury environment in Abuja."
            />

            <div className="about-grid">
              <article className="info-card reveal">
                <h3>Who we are</h3>
                <p>
                  We are a beauty-focused salon in Abuja dedicated to healthy hair artistry, refined service,
                  and a welcoming space where women can feel seen and celebrated.
                </p>
              </article>
              <article className="info-card reveal">
                <h3>Mission</h3>
                <p>
                  To deliver premium, detail-driven hair services that uplift confidence and protect natural hair.
                </p>
              </article>
              <article className="info-card reveal">
                <h3>Vision</h3>
                <p>
                  To become Abuja&apos;s favorite destination for stylish women seeking dependable, beautiful results.
                </p>
              </article>
              <article className="info-card reveal">
                <h3>Customer promise</h3>
                <p>
                  We promise attentive consultation, gentle handling, excellent hygiene, and beautiful finishes.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <SectionHeading
              eyebrow="Select Your Services"
              title="A premium service menu designed around your lifestyle."
              description="From protective styles to treatment and transformative color, each appointment is tailored to your hair goals."
              align="center"
            />

            <div className="services-grid">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>

            <div className="specialties-grid" aria-label="Our specialties">
              {specialties.map((item) => (
                <article className="specialty-card reveal" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonials-section" id="testimonials">
          <div className="container">
            <SectionHeading
              eyebrow="What People Are Saying"
              title="Real guest love from women who trust Ronnie’s."
              align="center"
            />

            <div className="testimonial-grid">
              {testimonials.map((item) => (
                <blockquote className="testimonial-card reveal" key={item.author}>
                  <p>&ldquo;{item.quote}&rdquo;</p>
                  <cite>{item.author}</cite>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section className="section gallery-section" id="gallery">
          <div className="container">
            <SectionHeading
              eyebrow="Gallery"
              title="Explore soft glam inspiration and signature Ronnie’s finishes."
              description="A responsive showcase of salon-style beauty visuals that adapts elegantly across screen sizes."
              align="center"
            />
            <GalleryGrid images={galleryImages} />
          </div>
        </section>

        <section className="section newsletter-section" id="updates">
          <div className="container">
            <div className="newsletter-card reveal">
              <SectionHeading
                eyebrow="Stay In The Know"
                title="Join the Ronnie’s community for offers, updates, and beauty tips."
                description="Get salon updates and seasonal beauty inspiration directly in your inbox."
              />

              <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={emailSignup}
                  onChange={(event) => setEmailSignup(event.target.value)}
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className="primary-button">
                  Sign Up
                </button>
              </form>
              {newsletterSubmitted ? <p className="form-note">You&apos;re in! We&apos;ll keep you updated.</p> : null}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy reveal">
              <SectionHeading
                eyebrow="Contact"
                title="Let’s book your next beautiful look."
                description="Reach us on WhatsApp, Instagram, or visit us at Aminu Kano Crescent, Wuse 2, Abuja, Nigeria."
              />

              <div className="contact-links">
                <a className="contact-link whatsapp" href={whatsappLink} target="_blank" rel="noreferrer">
                  WhatsApp: 08033207529
                </a>
                <a className="contact-link instagram" href={instagramLink} target="_blank" rel="noreferrer">
                  Instagram: @ronnieshairsalon
                </a>
                <a className="contact-link location" href={locationLink} target="_blank" rel="noreferrer">
                  Location: Aminu Kano Crescent, Wuse 2, Abuja
                </a>
              </div>

              <div className="map-card">
                <iframe
                  title="Ronnie's Hair Salon location map"
                  src="https://www.google.com/maps?q=Aminu+Kano+Crescent+Wuse+2+Abuja+Nigeria&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <form className="contact-form reveal" onSubmit={handleSubmit}>
              <h3>Send a message</h3>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us what you need"
                  rows="5"
                  required
                />
              </label>
              <button className="primary-button form-button" type="submit">
                Submit Inquiry
              </button>
              {submitted ? <p className="form-note">Thanks! Your message is ready for follow-up.</p> : null}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a className="brand footer-brand" href="#home">
              <span className="brand-mark">R</span>
              <span>
                Ronnie&apos;s <small>Hair Salon</small>
              </span>
            </a>
            <p>
              Feminine beauty, premium care, and stylish results for women in Abuja.
            </p>
          </div>

          <div>
            <h3>Additional Links</h3>
            <div className="footer-links">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3>Social</h3>
            <div className="footer-links">
              <a href={instagramLink} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a href={locationLink} target="_blank" rel="noreferrer">
                Directions
              </a>
            </div>
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Ronnie&apos;s Hair Salon. All rights reserved.</p>
      </footer>

      <a className="floating-whatsapp" href={whatsappLink} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <WhatsAppIcon />
      </a>
    </div>
  )
}

// Small inline SVG icon set used by service cards.
function ServiceIcon({ type }) {
  const paths = {
    braid: 'M12 3c2.8 0 5 2.2 5 5v2.2l1.7 1.7c.9.9 1.3 2 1.3 3.2v1.9c0 2.8-2.2 5-5 5H9c-2.8 0-5-2.2-5-5v-1.9c0-1.2.5-2.3 1.3-3.2L7 10.2V8c0-2.8 2.2-5 5-5Zm0 2c-1.7 0-3 1.3-3 3v2.8l-2.3 2.3c-.4.4-.7 1-.7 1.6v1.9c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-1.9c0-.6-.2-1.2-.7-1.6L15 10.8V8c0-1.7-1.3-3-3-3Zm-2.5 9.5h5v2h-5v-2Z',
    wig: 'M12 3c4.4 0 8 3.6 8 8v3c0 3.3-2.7 6-6 6h-4c-3.3 0-6-2.7-6-6v-3c0-4.4 3.6-8 8-8Zm0 2c-3.3 0-6 2.7-6 6v3c0 2.2 1.8 4 4 4h4c2.2 0 4-1.8 4-4v-3c0-3.3-2.7-6-6-6Zm-1 5h2v6h-2v-6Z',
    treatment: 'M8 4h8l1 3v13H7V7l1-3Zm1.5 2L9 7h6l-.5-1H9.5Zm-.5 3v9h7V9H9Zm1 1.5h5v2h-5v-2Zm0 3h5v2h-5v-2Z',
    styling: 'M12 3c2.8 0 5 2.2 5 5 0 1.7-.8 3.2-2 4.1V14h2v2h-4v-2h2v-1.8c-1.1-.4-2-.9-2.7-1.8H8.5c-.9 1.5-1.4 3.3-1.4 5.3V18h2v2H5v-2h1.1c0-2.8.7-5 2-6.9A5 5 0 0 1 12 3Z',
    color: 'M6 7h12v3H6V7Zm0 5h8v3H6v-3Zm0 5h10v3H6v-3Z',
    care: 'M12 4c2.3 0 4 1.8 4 4 0 4-4 8-4 8s-4-4-4-8c0-2.2 1.7-4 4-4Zm0 2c-1.1 0-2 .9-2 2 0 1.7 1.1 3.4 2 4.6 1-1.2 2-2.9 2-4.6 0-1.1-.9-2-2-2Z',
  }

  return (
    <svg viewBox="0 0 24 24" role="presentation" aria-hidden="true">
      <path d={paths[type]} />
    </svg>
  )
}

// Floating WhatsApp quick-chat icon.
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" role="presentation">
      <path d="M12 3a9 9 0 0 0-7.7 13.7L3 21l4.4-1.2A9 9 0 1 0 12 3Zm0 16.2c-1.2 0-2.4-.3-3.4-.9l-.2-.1-2.5.7.7-2.4-.1-.2A6.7 6.7 0 1 1 12 19.2Zm3.9-5.2c-.2-.1-1.3-.7-1.5-.8s-.3-.1-.4.1-.5.8-.6.9-.2.1-.4 0a5.4 5.4 0 0 1-1.6-1c-.6-.5-1.1-1.1-1.2-1.3s0-.3.1-.4l.3-.3.2-.3c.1-.1.1-.2.2-.4s0-.2 0-.3-.4-1.1-.5-1.5-.3-.3-.4-.3h-.4c-.1 0-.4 0-.6.3s-.8.8-.8 2 .9 2.3 1 2.4c.1.2 1.7 2.7 4.2 3.8.6.2 1.1.4 1.5.5.6.2 1.1.2 1.5.1.5-.1 1.3-.6 1.5-1.2s.2-1 .1-1.1-.2-.1-.4-.2Z" />
    </svg>
  )
}

export default App
