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
              I'm a Full-Stack Developer | AI Integration Engineer with over 5 years of
              experience designing and shipping scalable web and mobile
              applications. My work spans AI-powered tools, transactional
              systems, booking platforms, and digital libraries — built 
              with React, React Native, Next.js, Node.js, Express, MongoDB, Docker, and AWS. 
              I specialize in integrating Large Language Models (LLMs) such as OpenAI and Gemini into production-ready applications, 
              creating intelligent features that improve automation, user experience, and business workflows.
            </p>
            <p className="text-muted">
             I completed my Industrial Training (IT) at Goodisoft Technology, where I contributed to React Native applications and AI-assisted automation for enterprise workflows. Alongside this experience, I've continued building freelance and personal full-stack projects, including secure payment 
             systems with Paystack and backend architectures deployed on AWS, Render, and Cloudflare Pages.
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