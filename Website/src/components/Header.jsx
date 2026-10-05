import { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" onClick={close}>Michael Phillips</a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
        <span />
        <span />
      </button>
      <nav className={`nav ${open ? 'is-open' : ''}`}>
        <a href="#experience" onClick={close}>Experience</a>
        <a href="#projects" onClick={close}>Projects</a>
        <a href="#skills" onClick={close}>Skills</a>
        <a href="#background" onClick={close}>Background</a>
        <a href="#contact" onClick={close}>Contact</a>
        <a className="nav-resume" href="./resume.pdf" target="_blank" rel="noreferrer">Resume</a>
      </nav>
    </header>
  )
}
