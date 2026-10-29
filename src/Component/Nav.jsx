import "../css/App.css"


const LINKS = [
  { href: '#about', label: 'about' },
  { href: '#skills', label: 'skills' },
  { href: '#projects', label: 'projects' },
  { href: '#contact', label: 'contact' },
]

export default function Nav() {
  return (
    <nav className="nav">
      <a className="nav-logo mono" href="#top">
       Uche Emmanuel Innocent<span className="nav-logo-dot">.</span>
      </a>
      <ul className="nav-links">
        {LINKS.map((link) => (
          <li key={link.href}>
            <a className="mono" href={link.href}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}