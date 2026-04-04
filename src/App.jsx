import { useState } from 'react'
import './App.css'

/* ───────────── Data ───────────── */

const services = [
  {
    icon: '🗑️',
    title: 'Front Door Trash Pickup',
    desc: 'We collect your trash right from your doorstep — no more hauling bags across the parking lot. Just set it out and we handle the rest.',
  },
  {
    icon: '♻️',
    title: 'Recycling Pickup',
    desc: 'Hassle-free recycling collected from your front door on a consistent schedule. We make going green easy for your community.',
  },
  {
    icon: '🐾',
    title: 'Dog Waste Stations',
    desc: 'We supply, install, and maintain pet waste stations throughout your property — keeping common areas clean and sanitary.',
  },
  {
    icon: '📦',
    title: 'Bulk Item Pickup',
    desc: 'Furniture, mattresses, appliances — we handle large item removal so your property stays clutter-free.',
  },
  {
    icon: '🧹',
    title: 'Dumpster Maintenance',
    desc: 'We keep your dumpster areas clean, organized, and free of overflow. A tidy dumpster area reflects well on your entire property.',
  },
]

const features = [
  {
    icon: '👀',
    title: 'Double-Checked Service',
    desc: 'Every pickup is verified by a second team member. Two sets of eyes means nothing gets missed and no messes are left behind.',
  },
  {
    icon: '🏠',
    title: 'Locally Owned',
    desc: 'A Colorado family business — not a franchise. When you call, you talk to the people who actually do the work.',
  },
  {
    icon: '⏰',
    title: 'Reliable & Consistent',
    desc: 'Same team, same schedule, same quality — every single day. You can count on us to show up and get it done right.',
  },
  {
    icon: '🤝',
    title: 'Community Focused',
    desc: 'Proudly serving Denver metro apartments and senior living communities with the care and attention they deserve.',
  },
]

/* ───────────── Sections ───────────── */

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#hero" className="header-logo">
          <img src="/trash-penguins.png" alt="Trash Penguins logo" className="header-logo-img" />
          <span className="header-logo-text">Trash Penguins</span>
        </a>
        <nav className="header-nav">
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a href="tel:7209989292" className="header-phone">
          <span className="phone-icon">📞</span> (720) 998-9292
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Denver's Premier Valet Trash Service</h1>
          <p className="hero-subtitle">
            Reliable doorstep trash and recycling pickup for apartments and senior living communities across the Denver metro area.
          </p>
          <a href="#contact" className="btn btn-primary">Get a Free Quote</a>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Everything your property needs to stay clean and well-maintained</p>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} className="service-card">
              <span className="service-icon">{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <section id="why-us" className="why-us">
      <div className="container">
        <h2 className="section-title">Why Choose Trash Penguins?</h2>
        <p className="section-subtitle">We go above and beyond so you don't have to</p>
        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Meet the Owner</h2>
        <div className="about-content">
          <img src="/greg-fam1.png" alt="Greg and his family in Colorado" className="about-photo-horizontal" />
          <div className="about-text">
            <h3>Greg Delich</h3>
            <p>
              Hey, I'm Greg — a Colorado native, Colorado State University grad, and the owner of Trash Penguins. What started as a simple idea to provide better valet trash service has grown into a family business I'm incredibly proud of.
            </p>
            <p>
              When I'm not running the business, you'll find me hiking and camping around Colorado with my two kids, my dog, and my amazing wife. That same love for our community is what drives everything we do at Trash Penguins.
            </p>
            <p>
              We're not a big corporate franchise — we're your neighbors. And we believe that the properties and communities we serve deserve better than the bare minimum. That's why every pickup gets a second check, and why we treat every property like it's our own.
            </p>
          </div>
          <img src="/greg-and-dog.png" alt="Greg and his dog" className="about-photo-vertical" />
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="section-subtitle">Ready for above-and-beyond trash and recycling service? Reach out today!</p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <h3>Contact Info</h3>
              <a href="tel:7209989292" className="contact-link">
                <span>📞</span> (720) 998-9292
              </a>
              <a href="mailto:gregdelich@trashpenguins.com" className="contact-link">
                <span>✉️</span> gregdelich@trashpenguins.com
              </a>
              <div className="contact-link">
                <span>📍</span> Serving the Denver Metro Area
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            {submitted ? (
              <div className="form-success">
                <span className="success-icon">✅</span>
                <h3>Thanks for reaching out!</h3>
                <p>We'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  placeholder="Tell us about your property and what services you're interested in..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/trash-penguins.png" alt="Trash Penguins" className="footer-logo" />
          <span className="footer-name">Trash Penguins</span>
        </div>
        <div className="footer-links">
          <a href="tel:7209989292">📞 (720) 998-9292</a>
          <a href="mailto:gregdelich@trashpenguins.com">✉️ gregdelich@trashpenguins.com</a>
        </div>
        <p className="footer-copy">&copy; 2026 Trash Penguins. All rights reserved.</p>
      </div>
    </footer>
  )
}

/* ───────────── App ───────────── */

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
