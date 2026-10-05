import { useEffect, useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="wordmark" href="#top" onClick={close} aria-label="Michael Phillips home">
        Michael Phillips
      </a>

      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
        <span />
        <span />
      </button>

      <nav className={`nav ${open ? 'is-open' : ''}`}>
        <a href="#experience" onClick={close}>Experience</a>
        <a href="#projects" onClick={close}>Projects</a>
        <a href="#background" onClick={close}>Background</a>
        <a href="#contact" onClick={close}>Contact</a>
        <a className="nav-resume" href="./resume.pdf" target="_blank" rel="noreferrer">Resume ↗</a>
      </nav>
    </header>
  )
}
