import { useState } from 'react'
import { useReveal } from '../hook/useReveal'
import "../css/App.css"

const MY_EMAIL = 'ucheinnocent070@gmail.com'

const SOCIALS = [
  { label: 'email:', value: MY_EMAIL, href: `mailto:${MY_EMAIL}` },
  { label: 'github:', value: 'https://github.com/Uco7', href: 'https://github.com/Uco7' },
  { label: 'linkedin:', value: 'https://www.linkedin.com/in/uche-innocent-60741624b/', href: 'https://www.linkedin.com/in/uche-innocent-60741624b/' },
]

export default function Contact() {
  const [ref, visible] = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sent

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    // No backend yet — hand off to the user's email client instead,
    // pre-filled with what they typed, addressed straight to me.
    const subject = `Portfolio enquiry from ${form.name}`
    const body = `${form.message}\n\n— ${form.name} (${form.email})`

    const mailtoUrl = `mailto:${MY_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
    setStatus('sent')
  }

  return (
    <section className="contact section" id="contact">
      <div className="section-inner">
        <h2 className="section-label heading-text"> Contact Me</h2>

        <div
          ref={ref}
          className={`contact-grid reveal ${visible ? 'is-visible' : ''}`}
        >
          <div className="contact-intro col">
            <h2>Let's build something.</h2>
            <p className="text-muted">
              Open to full-time roles and select freelance work. The
              fastest way to reach me is email — I usually reply within a
              day or two.
            </p>

            <ul className="contact-socials">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a className="contact-social-link" href={s.href}>
                    <span className="mono text-muted">{s.label}</span>
                    <span className="mono">{s.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="contact-field">
              <span className="mono text-muted">name</span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </label>

            <label className="contact-field">
              <span className="mono text-muted">email</span>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
              />
            </label>

            <label className="contact-field">
              <span className="mono text-muted">message</span>
              <textarea
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
              />
            </label>

            <button className="btn btn-primary" type="submit">
              {status === 'sent' ? 'Opening your email app…' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}