import { useEffect, useState } from 'react'
import '../../css/App.css'
import photo from '../../assets/mypic.jpg'

const ROLE_LINES = [
  'building AI-powered apps',
  'integrating LLMs into products',
  'shipping React & React Native',
  'designing scalable REST APIs',
]

const PHOTO_SRC = photo

export default function Hero() {
  const [lineIndex, setLineIndex] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = ROLE_LINES[lineIndex]
    const speed = deleting ? 35 : 55
    const pause = 1400

    if (!deleting && charCount === current.length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    if (deleting && charCount === 0) {
      const t = setTimeout(() => {
        setDeleting(false)
        setLineIndex((i) => (i + 1) % ROLE_LINES.length)
      }, 300)
      return () => clearTimeout(t)
    }

    const t = setTimeout(
      () => setCharCount((c) => c + (deleting ? -1 : 1)),
      speed
    )
    return () => clearTimeout(t)
  }, [charCount, deleting, lineIndex])

  return (
    <header className="hero section" id="top">
      <div className="hero-inner section-inner">
        <div className="hero-content">
          <div className="hero-photo-wrap">
            <div className="hero-photo-frame">
              {PHOTO_SRC ? (
                <img
                  src={PHOTO_SRC}
                  alt="Uche Emmanuel Innocent"
                  className="hero-photo"
                />
              ) : (
                <div className="hero-photo-placeholder mono">
                  add photo
                </div>
              )}
              <span className="hero-photo-badge mono">
                <span className="hero-photo-badge-dot" aria-hidden="true" />
                available
              </span>
            </div>
          </div>

          <div className="hero-text">

            <h1 className="hero-name">Uche Emmanuel Innocent</h1>

            <p className="hero-role mono">
              <span aria-hidden="true" className="hero-role-text">
                {ROLE_LINES[lineIndex].slice(0, charCount)}
              </span>
              <span className="hero-cursor" aria-hidden="true">_</span>
              <span className="sr-only">{ROLE_LINES[lineIndex]}</span>
            </p>

            <p className="hero-summary col">
              Full-Stack & AI Developer with 5+ years of experience building
              scalable web and mobile applications — from AI-powered tools
              and booking platforms to digital libraries and
              payment-driven systems, using React, React Native, Node.js,
              and AWS.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary" href="#projects">
                View projects
              </a>
              <a className="btn btn-ghost" href="#contact">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-meta section-inner" aria-hidden="true">
        <span className="mono">benue, ng</span>
        <span className="mono">available for work</span>
        <span className="mono">v1.0.0</span>
      </div>
    </header>
  )
}