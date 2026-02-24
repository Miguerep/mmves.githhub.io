import { useState, useEffect } from 'react'

const links = ['about', 'skills', 'experience', 'projects', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#about" className="navbar-logo">
        <span className="tag">&lt;</span>
        MMVES
        <span className="tag">/&gt;</span>
      </a>
      <ul className="navbar-links">
        {links.map(link => (
          <li key={link}>
            <a
              href={`#${link}`}
              className={active === link ? 'active' : ''}
              onClick={() => setActive(link)}
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
