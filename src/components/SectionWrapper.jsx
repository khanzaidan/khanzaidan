import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionWrapper({ children, id, style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id={id}
      ref={ref}
      style={{
        padding: '6rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        ...style,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}

export function SectionHeading({ tag, title }) {
  return (
    <div style={{ marginBottom: '3rem' }}>
      <p style={{ color: '#10B981', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{tag}</p>
      <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, color: '#f1f1f1', letterSpacing: '-0.5px' }}>{title}</h2>
      <div style={{ width: '48px', height: '3px', backgroundColor: '#10B981', borderRadius: '2px', marginTop: '0.75rem' }} />
    </div>
  )
}
