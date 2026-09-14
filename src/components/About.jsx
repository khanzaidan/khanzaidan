import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper, { SectionHeading } from './SectionWrapper'

const traits = [
  { icon: '🛡️', label: 'Safety-First', desc: 'Every system needs fault handling before it needs features' },
  { icon: '🔌', label: 'Full-Stack Hardware', desc: 'Schematic capture through PCB layout to Gerber hand-off' },
  { icon: '🔗', label: 'HW-SW Co-Design', desc: 'I design the schematic and write the firmware that runs on it' },
  { icon: '⚡', label: 'Power & Signal Integrity', desc: 'BMS, power rails, impedance matching, EMC/EMI-aware layout' },
  { icon: '📡', label: 'Protocol Fluency', desc: 'UART, SPI, I2C, CAN Bus, Modbus, MQTT' },
]

const skills = [
  { label: 'PCB Design / Altium Designer', pct: 90 },
  { label: 'Schematic Capture & Signal Integrity', pct: 88 },
  { label: 'Power Electronics / BMS', pct: 85 },
  { label: 'RF & Analog Integration', pct: 78 },
  { label: 'STM32 ARM Cortex-M / Firmware', pct: 82 },
  { label: 'Embedded C / C++', pct: 85 },
]

function SkillBar({ label, pct }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div ref={ref} style={{ marginBottom: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
        <span style={{ color: '#d1d5db', fontSize: '0.875rem', fontWeight: 500 }}>{label}</span>
        <span style={{ color: '#10B981', fontSize: '0.875rem', fontWeight: 600 }}>{pct}%</span>
      </div>
      <div style={{ height: '6px', backgroundColor: '#1a1a1a', borderRadius: '3px', overflow: 'hidden' }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          style={{ height: '100%', background: 'linear-gradient(90deg, #10B981, #06b6d4)', borderRadius: '3px' }}
        />
      </div>
    </div>
  )
}

export default function About() {
  return (
    <div style={{ backgroundColor: '#0d0d0d' }}>
      <SectionWrapper id="about">
        <SectionHeading tag="// WHO I AM" title="About Me" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
          {/* Left */}
          <div>
            <p style={{ color: '#9ca3af', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
              B.Tech ECE graduate from TIT Bhopal, currently working as an Embedded Hardware Engineer & PCB Designer at{' '}
              <span style={{ color: '#10B981', fontWeight: 600 }}>SB Components Ltd.</span>, with 8+ months of hands-on embedded hardware design experience — including my internship at{' '}
              <span style={{ color: '#10B981', fontWeight: 600 }}>Walnut Medical</span> as an Embedded R&D Engineer, where I designed the complete hardware, from multi-sheet Altium schematics to PCB layout and Gerber hand-off, and wrote the STM32 firmware for a safety-critical closed-loop smart infusion pump, aligned with{' '}
              <span style={{ color: '#10B981', fontWeight: 600 }}>IEC 62304</span> medical device standards.
            </p>
            <p style={{ color: '#9ca3af', lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.95rem' }}>
              I don't just write firmware — I design the board it runs on. My work spans schematic capture, signal integrity, power electronics, BMS design, and EMC/EMI-aware layout, paired with real-time firmware architecture that holds up under real-world hardware constraints.
            </p>

            <h3 style={{ color: '#f1f1f1', fontWeight: 700, marginBottom: '1rem', fontSize: '1rem' }}>Engineering Approach:</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {traits.map(t => (
                <div key={t.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.25rem', flexShrink: 0, marginTop: '1px' }}>{t.icon}</span>
                  <div>
                    <span style={{ color: '#10B981', fontWeight: 600, fontSize: '0.875rem' }}>{t.label} — </span>
                    <span style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{t.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <h3 style={{ color: '#f1f1f1', fontWeight: 700, marginBottom: '1.5rem', fontSize: '1rem' }}>Proficiency Levels</h3>
            {skills.map(s => <SkillBar key={s.label} {...s} />)}

            <div style={{
              marginTop: '2rem',
              padding: '1.25rem',
              backgroundColor: '#111111',
              border: '1px solid #2a2a2a',
              borderRadius: '10px',
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  ['📍', 'Location', 'Bhopal, MP, India'],
                  ['🎓', 'Degree', 'B.Tech ECE — Graduated 2026'],
                  ['🏢', 'Current Role', 'SB Components Ltd.'],
                  ['📧', 'Email', 'khanzaidaan786@gmail.com'],
                ].map(([icon, key, val]) => (
                  <div key={key}>
                    <p style={{ color: '#6b7280', fontSize: '0.75rem', marginBottom: '0.2rem' }}>{icon} {key}</p>
                    <p style={{ color: '#f1f1f1', fontSize: '0.85rem', fontWeight: 500, wordBreak: 'break-all' }}>{val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
