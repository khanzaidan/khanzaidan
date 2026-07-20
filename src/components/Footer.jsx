import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #1a1a1a',
      padding: '2rem',
      textAlign: 'center',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <p style={{ color: '#6b7280', fontSize: '0.875rem' }}>
          <span style={{ color: '#10B981', fontWeight: 700 }}>Zaidan Khan</span> · Embedded Hardware Engineer · 2026
        </p>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          {[
            { href: 'https://github.com/khanzaidan', icon: <FiGithub size={18} />, label: 'GitHub' },
            { href: 'https://linkedin.com/in/zaidan-khan-ab30922aa', icon: <FiLinkedin size={18} />, label: 'LinkedIn' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              style={{
                color: '#6b7280',
                textDecoration: 'none',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#10B981'}
              onMouseLeave={e => e.currentTarget.style.color = '#6b7280'}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
