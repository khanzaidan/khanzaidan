import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper, { SectionHeading } from './SectionWrapper'

const projects = [
  {
    title: 'Adaptive Traffic Light Controller',
    badge: 'Embedded Systems',
    badgeColor: '#10B981',
    icon: '🚦',
    tags: ['ARM Cortex-M4', 'Embedded C', 'IR Sensors', 'PWM', 'Proteus'],
    description: 'ISR-driven density-based adaptive traffic signal controller that dynamically adjusts green light duration based on real-time vehicle density measured by IR sensors.',
    bullets: [
      'Reduced simulated average vehicle wait time by ~22% compared to fixed-cycle baseline',
      'ISR-driven real-time sensor processing for immediate density response',
      'PWM actuation with flash-stored configurable timing thresholds',
      'Simulated and validated in Proteus before hardware deployment',
    ],
  },
  {
    title: 'Smart Home Automation System',
    badge: 'IoT',
    badgeColor: '#06b6d4',
    icon: '🏠',
    tags: ['ESP32', 'C++', 'MQTT', 'IoT', 'Blynk', 'DHT11', 'BMP280'],
    description: 'Wi-Fi IoT system using ESP32 and MQTT protocol for real-time environmental monitoring and remote home control.',
    bullets: [
      'Real-time temperature, humidity, and pressure monitoring using DHT11 and BMP280 sensors',
      'Remote control and monitoring via Blynk mobile app',
      'MQTT protocol for lightweight, reliable IoT communication',
      'End-to-end system latency under 500ms',
    ],
  },
]

function ProjectCard({ project, delay }) {
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
        borderRadius: '14px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <span style={{ fontSize: '2.5rem' }}>{project.icon}</span>
        <span style={{
          padding: '0.3rem 0.8rem',
          backgroundColor: `${project.badgeColor}15`,
          border: `1px solid ${project.badgeColor}40`,
          borderRadius: '100px',
          fontSize: '0.72rem',
          color: project.badgeColor,
          fontWeight: 600,
        }}>
          {project.badge}
        </span>
      </div>

      <h3 style={{ color: '#f1f1f1', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.75rem', lineHeight: 1.3 }}>{project.title}</h3>
      <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{project.description}</p>

      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem', flex: 1 }}>
        {project.bullets.map((b, i) => (
          <li key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
            <span style={{ color: project.badgeColor, flexShrink: 0, fontSize: '0.9rem', marginTop: '1px' }}>→</span>
            <span style={{ color: '#d1d5db', fontSize: '0.82rem', lineHeight: 1.6 }}>{b}</span>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {project.tags.map(tag => (
          <span key={tag} style={{
            padding: '0.25rem 0.65rem',
            backgroundColor: '#1a1a1a',
            border: '1px solid #2a2a2a',
            borderRadius: '100px',
            fontSize: '0.72rem',
            color: '#9ca3af',
            fontWeight: 500,
          }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading tag="// WHAT I'VE BUILT" title="Projects" />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
        gap: '1.5rem',
      }}>
        {projects.map((p, i) => <ProjectCard key={p.title} project={p} delay={i * 0.12} />)}
      </div>
    </SectionWrapper>
  )
}
