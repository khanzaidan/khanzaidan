import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = navLinks.map(l => l.href.slice(1))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 3,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid #2a2a2a' : 'none',
      transition: 'all 0.3s ease',
      padding: '0 2rem',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
      }}>
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: '#10B981',
            textDecoration: 'none',
            letterSpacing: '-0.5px',
          }}
        >
          ZK
        </a>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="desktop-nav">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
              style={{
                padding: '0.4rem 0.75rem',
                borderRadius: '6px',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
                color: active === link.href.slice(1) ? '#10B981' : '#9ca3af',
                backgroundColor: active === link.href.slice(1) ? 'rgba(16,185,129,0.1)' : 'transparent',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { if (active !== link.href.slice(1)) e.currentTarget.style.color = '#f1f1f1' }}
              onMouseLeave={e => { if (active !== link.href.slice(1)) e.currentTarget.style.color = '#9ca3af' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Zaidan_Khan_Resume.pdf"
            style={{
              marginLeft: '0.75rem',
              padding: '0.4rem 1rem',
              border: '1px solid #10B981',
              borderRadius: '6px',
              color: '#10B981',
              fontSize: '0.875rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#10B981'; e.currentTarget.style.color = '#000' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#10B981' }}
          >
            Resume
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: '1px solid #2a2a2a',
            borderRadius: '6px',
            padding: '0.4rem 0.6rem',
            cursor: 'pointer',
            color: '#f1f1f1',
            fontSize: '1.2rem',
          }}
          className="hamburger"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: 'rgba(17,17,17,0.98)',
          borderTop: '1px solid #2a2a2a',
          padding: '1rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
              style={{
                padding: '0.6rem 0',
                color: active === link.href.slice(1) ? '#10B981' : '#9ca3af',
                textDecoration: 'none',
                fontWeight: 500,
                borderBottom: '1px solid #1a1a1a',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download="Zaidan_Khan_Resume.pdf"
            style={{
              marginTop: '0.5rem',
              padding: '0.6rem 1rem',
              border: '1px solid #10B981',
              borderRadius: '6px',
              color: '#10B981',
              textDecoration: 'none',
              textAlign: 'center',
              fontWeight: 500,
            }}
          >
            Download Resume
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
