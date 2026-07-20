import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper, { SectionHeading } from './SectionWrapper'

const certs = [
  {
    icon: '🖥️',
    title: 'PCB Design and EV Embedded Systems',
    issuer: 'BHEL Bhopal',
    date: 'Sep 2025',
    ref: null,
    color: '#10B981',
  },
  {
    icon: '🛠️',
    title: 'Altium Designer',
    issuer: 'Altium Academy',
    date: null,
    ref: 'PCB design rules, signal integrity, DFM guidelines',
    color: '#ef4444',
  },
  {
    icon: '⚙️',
    title: 'FreeRTOS Real-Time Kernel',
    issuer: 'FreeRTOS.org',
    date: null,
    ref: 'Mastering the FreeRTOS Real Time Kernel — Richard Barry',
    color: '#06b6d4',
  },
  {
    icon: '🔬',
    title: 'ARM Cortex-M Architecture and Programming',
    issuer: 'ARM Official Documentation',
    date: null,
    ref: 'Cortex-M4 Technical Reference Manual',
    color: '#8b5cf6',
  },
]

function CertCard({ cert, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="card-hover"
      style={{
        backgroundColor: '#111111',
        border: '1px solid #2a2a2a',
        borderRadius: '12px',
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}
    >
      <div style={{
        width: '52px',
        height: '52px',
        borderRadius: '12px',
        backgroundColor: `${cert.color}15`,
        border: `1px solid ${cert.color}30`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.5rem',
      }}>
        {cert.icon}
      </div>

      <h3 style={{ color: '#f1f1f1', fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.4 }}>{cert.title}</h3>
      <p style={{ color: cert.color, fontWeight: 600, fontSize: '0.85rem' }}>{cert.issuer}</p>
      {cert.date && <p style={{ color: '#6b7280', fontSize: '0.8rem' }}>📅 {cert.date}</p>}
      {cert.ref && <p style={{ color: '#6b7280', fontSize: '0.78rem', fontStyle: 'italic', lineHeight: 1.5 }}>{cert.ref}</p>}
    </motion.div>
  )
}

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionHeading tag="// CREDENTIALS" title="Certifications & Training" />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '1.25rem',
      }}>
        {certs.map((c, i) => <CertCard key={c.title} cert={c} delay={i * 0.1} />)}
      </div>
    </SectionWrapper>
  )
}
