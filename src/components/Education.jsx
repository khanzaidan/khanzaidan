import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper, { SectionHeading } from './SectionWrapper'

function CGPABar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const pct = (7.79 / 10) * 100

  return (
    <div ref={ref} style={{ marginTop: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
        <span style={{ color: '#9ca3af', fontSize: '0.85rem' }}>CGPA Progress</span>
        <span style={{ color: '#10B981', fontWeight: 700 }}>7.79 / 10.0</span>
      </div>
      <div style={{ height: '8px', backgroundColor: '#1a1a1a', borderRadius: '4px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          style={{ height: '100%', background: 'linear-gradient(90deg, #10B981, #06b6d4)', borderRadius: '4px' }}
        />
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <div style={{ backgroundColor: '#0d0d0d' }}>
      <SectionWrapper id="education">
        <SectionHeading tag="// ACADEMIC BACKGROUND" title="Education" />

        <div style={{ maxWidth: '700px' }}>
          <div
            className="card-hover"
            style={{
              backgroundColor: '#111111',
              border: '1px solid #10B981',
              borderRadius: '14px',
              padding: '2rem',
              position: 'relative',
              boxShadow: '0 0 30px rgba(16,185,129,0.08)',
            }}
          >
            <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>
              <span style={{ fontSize: '2.5rem' }}>🎓</span>
            </div>

            <span style={{
              display: 'inline-block',
              padding: '0.25rem 0.75rem',
              backgroundColor: 'rgba(16,185,129,0.1)',
              border: '1px solid rgba(16,185,129,0.3)',
              borderRadius: '100px',
              fontSize: '0.72rem',
              color: '#10B981',
              fontWeight: 600,
              marginBottom: '1rem',
            }}>
              Graduated June 2026
            </span>

            <h3 style={{ color: '#f1f1f1', fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.4rem', lineHeight: 1.3 }}>
              B.Tech — Electronics & Communication Engineering
            </h3>
            <p style={{ color: '#10B981', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.3rem' }}>
              Technocrats Institute of Technology (Excellence)
            </p>
            <p style={{ color: '#6b7280', fontSize: '0.85rem', marginBottom: '1.5rem' }}>📍 Bhopal, Madhya Pradesh, India</p>

            <CGPABar />

            <div style={{
              marginTop: '1.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
            }}>
              {['Embedded Systems', 'Digital Electronics', 'Microprocessors', 'VLSI Design', 'Communication Systems', 'Signal Processing'].map(subj => (
                <span key={subj} style={{
                  padding: '0.25rem 0.7rem',
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #2a2a2a',
                  borderRadius: '100px',
                  fontSize: '0.72rem',
                  color: '#9ca3af',
                }}>
                  {subj}
                </span>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
