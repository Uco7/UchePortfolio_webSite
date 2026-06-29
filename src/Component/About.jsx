import { useReveal } from '../hook/useReveal'
import "../css/App.css"

const FACTS = [
  { label: 'based in', value: 'Benue, NG' },
  { label: 'experience', value: '5+ years' },
  { label: 'focus', value: 'full-stack & AI' },
  { label: 'currently', value: 'open to roles' },
]

export default function About() {
  const [ref, visible] = useReveal()

  return (
    <section className="about section" id="about">
      <div className="section-inner">
        <h2 className="section-label heading-text"> About Me</h2>

        <div
          ref={ref}
          className={`about-grid reveal ${visible ? 'is-visible' : ''}`}
        >
          <div className="about-copy col">
            <h2>I build software that thinks a little, and works a lot.</h2>
            <p className="text-muted">
              I'm a Full-Stack & AI Developer with over 5 years of
              experience designing and shipping scalable web and mobile
              applications. My work spans AI-powered tools, transactional
              systems, booking platforms, and digital libraries — built
              with React, React Native, Node.js, Express, MongoDB, and
              AWS. I spend a lot of time integrating LLMs (OpenAI,
              Gemini) and AI APIs into real products, not just demos.
            </p>
            <p className="text-muted">
              Currently a Software Developer at Goodisoft Technology,
              building React Native apps and AI-assisted automation for
              enterprise workflows, while also taking on freelance
              full-stack and AI projects — from secure payment systems
              with Paystack to custom backend architecture deployed on
              AWS.
            </p>
          </div>

          <dl className="about-facts">
            {FACTS.map((fact) => (
              <div className="about-fact" key={fact.label}>
                <dt className="mono text-muted">{fact.label}</dt>
                <dd className="mono">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}