import SectionWrapper, { SectionHeading } from './SectionWrapper'

const contactItems = [
  {
    icon: '📧',
    label: 'Email',
    value: 'khanzaidaan786@gmail.com',
    href: 'mailto:khanzaidaan786@gmail.com',
    color: '#10B981',
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+91-78704-13769',
    href: 'tel:+917870413769',
    color: '#06b6d4',
  },
  {
    icon: '💻',
    label: 'GitHub',
    value: 'github.com/khanzaidan',
    href: 'https://github.com/khanzaidan',
    color: '#8b5cf6',
  },
  {
    icon: '🔗',
    label: 'LinkedIn',
    value: 'linkedin.com/in/zaidan-khan-ab30922aa',
    href: 'https://linkedin.com/in/zaidan-khan-ab30922aa',
    color: '#f59e0b',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Bhopal, Madhya Pradesh, India',
    href: null,
    color: '#ef4444',
  },
]

export default function Contact() {
  return (
    <div style={{ backgroundColor: '#0d0d0d' }}>
      <SectionWrapper id="contact">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ color: '#10B981', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>// GET IN TOUCH</p>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#f1f1f1', letterSpacing: '-0.5px', marginBottom: '1rem' }}>
            Let's Build Together
          </h2>
          <div style={{ width: '48px', height: '3px', backgroundColor: '#10B981', borderRadius: '2px', margin: '0 auto 1.25rem' }} />
          <p style={{ color: '#9ca3af', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7, fontSize: '0.95rem' }}>
            Open to Embedded Hardware Engineer, Hardware Design Engineer, and Embedded R&D Engineer roles — entry level, on-site or hybrid.
          </p>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '1.25rem',
            padding: '0.45rem 1.2rem',
            backgroundColor: 'rgba(16,185,129,0.1)',
            border: '1px solid rgba(16,185,129,0.35)',
            borderRadius: '100px',
            fontSize: '0.82rem',
            color: '#10B981',
            fontWeight: 600,
          }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', display: 'inline-block', animation: 'pulse2 2s infinite' }} />
            Open to Work — B.Tech ECE Graduate, 2026
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1rem',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {contactItems.map(item => (
            <div
              key={item.label}
              className="card-hover"
              style={{
                backgroundColor: '#111111',
                border: '1px solid #2a2a2a',
                borderRadius: '12px',
                padding: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  backgroundColor: `${item.color}15`,
                  border: `1px solid ${item.color}30`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div style={{ overflow: 'hidden' }}>
                  <p style={{ color: '#6b7280', fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.2rem' }}>{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      style={{
                        color: item.color,
                        textDecoration: 'none',
                        fontSize: '0.85rem',
                        fontWeight: 500,
                        display: 'block',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span style={{ color: '#d1d5db', fontSize: '0.85rem', fontWeight: 500 }}>{item.value}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`@keyframes pulse2 { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.3)} }`}</style>
      </SectionWrapper>
    </div>
  )
}
