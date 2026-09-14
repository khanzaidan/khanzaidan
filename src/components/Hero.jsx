import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const titles = [
  'Embedded Hardware Engineer',
  'Hardware Design Engineer',
  'PCB & Systems Design',
  'Embedded R&D Engineer',
]

const stats = [
  { value: '8+', label: 'Months Hardware Design Exp.' },
  { value: '4', label: 'Projects Completed' },
  { value: '7.79', label: 'CGPA' },
  { value: '4', label: 'Certifications' },
]

function TypingText() {
  const [titleIdx, setTitleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const timer = useRef(null)

  useEffect(() => {
    const full = titles[titleIdx]
    if (!deleting) {
      if (displayed.length < full.length) {
        timer.current = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 60)
      } else {
        timer.current = setTimeout(() => setDeleting(true), 2200)
      }
    } else {
      if (displayed.length > 0) {
        timer.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setDeleting(false)
        setTitleIdx((i) => (i + 1) % titles.length)
      }
    }
    return () => clearTimeout(timer.current)
  }, [displayed, deleting, titleIdx])

  return (
    <span style={{ color: '#10B981', fontWeight: 700 }}>
      {displayed}
      <span style={{
        display: 'inline-block',
        width: '2px',
        height: '1.1em',
        backgroundColor: '#10B981',
        marginLeft: '2px',
        verticalAlign: 'text-bottom',
        animation: 'blink 1s step-end infinite',
      }} />
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  )
}

function FloatingIcon({ icon, style }) {
  return (
    <motion.div
      style={{
        position: 'absolute',
        fontSize: '2rem',
        color: 'rgba(16,185,129,0.15)',
        userSelect: 'none',
        ...style,
      }}
      animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
      transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
    >
      {icon}
    </motion.div>
  )
}

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="dot-pattern"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '6rem 2rem 4rem',
      }}
    >
      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Floating icons */}
      <FloatingIcon icon="⚡" style={{ top: '15%', left: '8%' }} />
      <FloatingIcon icon="🔧" style={{ top: '20%', right: '10%' }} />
      <FloatingIcon icon="💡" style={{ bottom: '25%', left: '6%' }} />
      <FloatingIcon icon="⚙️" style={{ bottom: '30%', right: '8%' }} />
      <FloatingIcon icon="📡" style={{ top: '50%', left: '3%' }} />
      <FloatingIcon icon="🖥️" style={{ top: '45%', right: '5%' }} />

      <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'rgba(16,185,129,0.1)',
            border: '1px solid rgba(16,185,129,0.3)',
            borderRadius: '100px',
            padding: '0.35rem 1rem',
            marginBottom: '2rem',
            fontSize: '0.8rem',
            color: '#10B981',
            fontWeight: 500,
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block', animation: 'pulse 2s infinite' }} />
            Currently @ SB Components Ltd. — B.Tech ECE Graduate, 2026
          </div>

          {/* Name */}
          <h1 className="gradient-text" style={{
            fontSize: 'clamp(3rem, 8vw, 5.5rem)',
            fontWeight: 900,
            letterSpacing: '-2px',
            lineHeight: 1.05,
            marginBottom: '1rem',
          }}>
            Zaidan Khan
          </h1>

          {/* Typing */}
          <p style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
            marginBottom: '1.25rem',
            color: '#9ca3af',
            fontWeight: 400,
            minHeight: '2em',
          }}>
            <TypingText />
          </p>

          {/* Tagline */}
          <p style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
            color: '#6b7280',
            fontStyle: 'italic',
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.6,
          }}>
            "Designing hardware that works in safety-critical environments — from schematic to silicon."
          </p>

          {/* Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
          }}>
            {stats.map((s) => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#10B981' }}>{s.value}</div>
                <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.2rem' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <button
              onClick={() => scrollTo('projects')}
              className="glow-btn"
              style={{
                padding: '0.75rem 1.75rem',
                backgroundColor: '#10B981',
                color: '#000',
                border: 'none',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '0.95rem',
                cursor: 'pointer',
              }}
            >
              View My Work
            </button>
            <a
              href="/resume.pdf"
              download="Zaidan_Khan_Resume.pdf"
              style={{
                padding: '0.75rem 1.75rem',
                backgroundColor: 'transparent',
                color: '#10B981',
                border: '1px solid #10B981',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.95rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#10B981'; e.currentTarget.style.color = '#000' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#10B981' }}
            >
              Download Resume
            </a>
            <button
              onClick={() => scrollTo('contact')}
              style={{
                padding: '0.75rem 1.75rem',
                backgroundColor: 'transparent',
                color: '#9ca3af',
                border: '1px solid #2a2a2a',
                borderRadius: '8px',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#9ca3af'; e.currentTarget.style.color = '#f1f1f1' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.color = '#9ca3af' }}
            >
              Contact Me
            </button>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            {[
              { href: 'https://github.com/khanzaidan', icon: <FiGithub size={20} />, label: 'GitHub' },
              { href: 'https://linkedin.com/in/zaidan-khan-ab30922aa', icon: <FiLinkedin size={20} />, label: 'LinkedIn' },
              { href: 'mailto:khanzaidaan786@gmail.com', icon: <FiMail size={20} />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noreferrer"
                aria-label={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '42px',
                  height: '42px',
                  borderRadius: '8px',
                  border: '1px solid #2a2a2a',
                  color: '#9ca3af',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#10B981'; e.currentTarget.style.color = '#10B981'; e.currentTarget.style.backgroundColor = 'rgba(16,185,129,0.1)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.backgroundColor = 'transparent' }}
              >
                {icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)' }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div style={{ width: '24px', height: '38px', border: '2px solid #2a2a2a', borderRadius: '12px', display: 'flex', justifyContent: 'center', paddingTop: '6px' }}>
          <div style={{ width: '4px', height: '8px', backgroundColor: '#10B981', borderRadius: '2px' }} />
        </div>
      </motion.div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.2)} }`}</style>
    </section>
  )
}
