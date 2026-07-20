import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionWrapper, { SectionHeading } from './SectionWrapper'

const categories = [
  {
    icon: '🛠️',
    title: 'Hardware Design',
    color: '#ef4444',
    skills: ['Schematic Capture', 'Multi-sheet PCB Design', 'Signal Integrity', 'Impedance Matching', 'Net Classes', 'DRC/ERC', 'Layout Review', 'Gerber Generation', 'DFM'],
  },
  {
    icon: '💻',
    title: 'EDA & Simulation',
    color: '#10B981',
    skills: ['Altium Designer', 'KiCad', 'EasyEDA', 'Proteus', 'LTspice'],
  },
  {
    icon: '⚡',
    title: 'Power & Analog',
    color: '#f59e0b',
    skills: ['Buck/Boost Converters', 'Li-ion BMS', 'Battery Charger ICs', 'UPS Circuitry', 'Automotive 12/24V Systems', 'Thermal Management', 'ESD & Overcurrent Protection'],
  },
  {
    icon: '📡',
    title: 'RF & Wireless',
    color: '#06b6d4',
    skills: ['Antenna Matching Networks', 'SAW/BAW Filtering', 'TCXO Clocking', 'LNA', 'EMC/EMI Layout', 'LTE/4G/GNSS/Wi-Fi/BT'],
  },
  {
    icon: '🔍',
    title: 'Component Engineering',
    color: '#8b5cf6',
    skills: ['BOM Preparation', 'Datasheet Analysis', 'Component Selection', 'Footprint Verification', 'Vendor Sourcing', 'Alternate Part Cross-referencing'],
  },
  {
    icon: '🔬',
    title: 'MCU & Firmware',
    color: '#8b5cf6',
    skills: ['STM32 ARM Cortex-M4', 'ESP32/ESP32-S3', 'AVR', 'Embedded C/C++', 'FreeRTOS', 'UART/SPI/I2C/CAN', 'MQTT', 'LVDS'],
  },
  {
    icon: '🛡️',
    title: 'Debug & Version Control',
    color: '#06b6d4',
    skills: ['GDB', 'OpenOCD', 'Git', 'JTAG/SWD', 'Oscilloscope', 'Logic Analyzer', 'Keil uVision', 'STM32CubeIDE'],
  },
]

function SkillCard({ category, delay }) {
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
        padding: '1.5rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
        <span style={{ fontSize: '1.5rem' }}>{category.icon}</span>
        <h3 style={{ color: '#f1f1f1', fontWeight: 700, fontSize: '0.95rem' }}>{category.title}</h3>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {category.skills.map(skill => (
          <span
            key={skill}
            style={{
              padding: '0.3rem 0.75rem',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: 500,
              backgroundColor: `${category.color}15`,
              color: category.color,
              border: `1px solid ${category.color}30`,
              transition: 'all 0.2s ease',
              cursor: 'default',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = `${category.color}25`
              e.currentTarget.style.borderColor = `${category.color}60`
              e.currentTarget.style.boxShadow = `0 0 10px ${category.color}20`
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = `${category.color}15`
              e.currentTarget.style.borderColor = `${category.color}30`
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading tag="// WHAT I KNOW" title="Technical Arsenal" />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '1.25rem',
      }}>
        {categories.map((cat, i) => (
          <SkillCard key={cat.title} category={cat} delay={i * 0.08} />
        ))}
      </div>
    </SectionWrapper>
  )
}
