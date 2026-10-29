import { useReveal } from '../hook/useReveal'

import "../css/App.css"


const SKILL_GROUPS = [
  {
    key: 'languages',
    label: 'languages',
    items: ['JavaScript', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    key: 'frontend',
    label: 'frontend',
    items: ['React', 'React Native (Expo)', 'Next.js', 'Vite', ],
  },
  {
    key: 'backend',
    label: 'backend',
    items: ['Node.js', 'Express', 'MongoDB & Mongoose', 'REST API Design', 'JWT Authentication'],
  },
  {
    key: 'Cloud & DevOps',
    label: 'Cloud & DevOps',
    items: ['Git & GitHub', 'Docker', 'AWS (EC2, S3, VPC)','Render (and more)','Cloudflare Pages', 'CI/CD'],
  },
  {
    key: 'AI & Integrations',
    label: 'AI & Integrations',
    items: ['OpenAI API', 'Gemini API', 'Prompt Engineering',
      'AI Integration','Google AdMob', 'Paystack','Google AdSense',
      'SEO (Search Engine Optimization)'],
  },
]

export default function Skills() {
  const [ref, visible] = useReveal()

  return (
    <section className="skills section" id="skills">
      <div className="section-inner">
        <h2 className="section-label heading-text"> My Skill Set</h2>

        <div
          ref={ref}
          className={`skills-grid reveal ${visible ? 'is-visible' : ''}`}
        >
          {SKILL_GROUPS.map((group) => (
            <div className="skills-group" key={group.key}>
              <h3 className="skills-group-label mono">{group.label}</h3>
              <ul className="skills-list">
                {group.items.map((item) => (
                  <li className="skills-item mono" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}