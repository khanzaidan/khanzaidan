import SectionWrapper, { SectionHeading } from './SectionWrapper'

const experiences = [
  {
    role: 'Embedded Hardware Engineer & PCB Designer',
    company: 'SB Components Ltd.',
    location: 'Ghaziabad, Uttar Pradesh',
    duration: 'Jul 2026 – Present',
    badge: 'Current',
    featured: true,
    description: 'Executing the full PCB design cycle — component research, datasheet analysis, schematic capture, and board bring-up through manufacturing handoff — on 4+ production-grade embedded products (ESP32-S3, RP2350) using Altium Designer, spanning USB-C hardware, RF-enabled boards, and GNSS/IoT devices.',
    bullets: [
      'Executed the full PCB design cycle — component research, datasheet analysis, schematic capture, footprint verification, placement, routing, DRC validation, board bring-up, and hardware debugging — for 4+ production-grade embedded products using Altium Designer, through manufacturing handoff',
      'Designed HACKYPI 2.0 (32.19 x 14.42mm, ESP32-S3RH2) with USB Type-C, 2.4GHz antenna, SPI flash, 3.3V LDO, and WS2812B-2020 LEDs; and HACKSTAR (28.22 x 15.16mm, RP2350-A) with USB Type-C, RT9193-33GB LDO, and W25Q16JVUXIQ SPI flash — both 2-layer compact PCBs taken through full DRC and manufacturing handoff',
      'Designed INJECTO (26.22 x 15.16mm, ESP32-S3FH4R2) and the Meshtastic OLED Key Ring (43.68 x 43.68mm, RAK4630, BME280, Quectel L76K GNSS, MCP73831 Li-ion charger) — handled the complete design cycle through manufacturing handoff',
      'Performed PCB bring-up and hardware debugging on every board: troubleshot power rails, LDO output levels, and SPI/I2C/USB peripheral interfaces using an oscilloscope and logic analyzer, resolving issues during initial validation',
      'Prepared complete manufacturing documentation — Gerber files, NC drill, BOM, schematic PDFs, assembly drawings — and supported post-fabrication hardware validation across all product releases',
    ],
    tags: ['Altium Designer', 'PCB Design', 'ESP32-S3', 'RP2350', 'USB Type-C', 'DRC/ERC', 'Board Bring-up', 'Manufacturing Handoff'],
  },
  {
    role: 'Embedded R&D Engineer (Intern)',
    company: 'Walnut Medical',
    location: 'Mohali, Punjab',
    duration: 'Jan 2026 – Jul 2026',
    badge: 'Completed',
    featured: false,
    description: 'Independently designed the complete hardware and firmware for a flagship RTOS-based closed-loop Smart Infusion Pump (STM32 ARM Cortex-M4), and designed the hardware for an Automotive Telematics Gateway (4G LTE + GNSS + IoT, ESP32-S3) — both on Altium Designer, aligned with IEC 62304 medical firmware lifecycle standards.',
    subProjects: [
      {
        label: 'Primary — Smart Infusion Pump',
        sub: 'STM32 ARM Cortex-M4, FreeRTOS, Altium Designer — hardware & software developed independently end-to-end',
        bullets: [
          'Designed the full 5-sheet Altium multi-sheet schematic (Power, MCU/Safety, Motor Drive/DRV8825 stepper, Sensors/UI/Battery, Peltier/ESP32); applied net classes, DRC/ERC, and schematic review across all sheets',
          'Identified and corrected critical hardware errors: BQ24650 VFB feedback divider miscalculation, MPRLS I2C/SPI symbol mismatch, ATmega328P crystal (16 → 8 MHz for 3.3V operation), I2C pull-up values, and net label mismatches',
          'Redesigned battery architecture from 2S to 3S2P (Samsung INR18650-30Q) with BQ24650 charger, BQ76920 AFE, XL6009E1 UPS boost converter, and decoupling network for power rail stability',
          'Prepared 2-layer PCB (~100×120mm): placement planning, thermal management zones, routing constraints, DRC validation, and Gerber generation for manufacturing; conducted India-specific vendor sourcing and BOM cross-referencing',
          'Architected FreeRTOS firmware across 6 concurrent tasks (sub-10ms response); implemented PID closed-loop flow control at ±2% infusion accuracy; produced IEC 62304-compliant design documentation across all sprint milestones',
        ],
      },
      {
        label: 'Secondary — Automotive Telematics Gateway',
        sub: '4G LTE + GNSS + IoT, ESP32-S3, Altium Designer',
        bullets: [
          'Designed automotive GPS gateway hardware integrating ESP32-S3 MCU, GW1NS LTE module, BK1616P GNSS receiver, and Wi-Fi/BT interfaces; completed multi-sheet Altium schematic with datasheet analysis, BOM preparation, and footprint verification',
          'Designed 12/24V automotive power system: OC2006 buck converter, BQ24074 Li-ion charger, battery backup, reverse-polarity and surge protection, EMC-aware decoupling strategy',
          'Integrated LTE/GNSS/Wi-Fi RF front-end: antenna matching networks, TCXO clocking, SAW filtering, LNA path, and ESD protection for automotive EMC/EMI compliance',
          'Completed full PCB design workflow: signal integrity planning, placement, routing constraints, DRC validation, and Gerber generation for manufacturing hand-off',
        ],
      },
    ],
    tags: ['Altium Designer', 'PCB Design', 'STM32', 'ESP32-S3', 'FreeRTOS', 'BMS', 'RF Integration', 'IEC 62304'],
  },
  {
    role: 'Technical Trainee',
    company: 'BHEL (Bharat Heavy Electricals Ltd.)',
    location: 'Bhopal',
    duration: 'Aug – Sep 2025 (2 Weeks)',
    badge: 'Completed',
    featured: false,
    description: 'Industrial training covering PCB design workflows and EV embedded systems communication.',
    bullets: [
      'Multilayer PCB design workflows — stack-up planning, DRC in Altium Designer',
      'Signal conditioning for EV sensor interfaces',
      'CAN bus ECU-to-actuator communication mapping',
    ],
    tags: ['PCB Design', 'Altium', 'CAN Bus', 'EV Systems'],
  },
]

export default function Experience() {
  return (
    <div style={{ backgroundColor: '#0d0d0d' }}>
      <SectionWrapper id="experience">
        <SectionHeading tag="// WHERE I'VE WORKED" title="Work Experience" />

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, #10B981, #059669 60%, #2a2a2a)',
            borderRadius: '1px',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingLeft: '56px' }}>
            {experiences.map((exp, i) => (
              <div key={i} style={{ position: 'relative' }}>
                {/* Dot */}
                <div style={{
                  position: 'absolute',
                  left: '-44px',
                  top: '24px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: exp.featured ? '#10B981' : '#2a2a2a',
                  border: `2px solid ${exp.featured ? '#10B981' : '#3a3a3a'}`,
                  boxShadow: exp.featured ? '0 0 12px rgba(16,185,129,0.5)' : 'none',
                }} />

                <div
                  className="card-hover"
                  style={{
                    backgroundColor: '#111111',
                    border: `1px solid ${exp.featured ? '#10B981' : '#2a2a2a'}`,
                    borderRadius: '12px',
                    padding: '1.75rem',
                    boxShadow: exp.featured ? '0 0 30px rgba(16,185,129,0.1)' : 'none',
                  }}
                >
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div>
                      <h3 style={{ color: '#f1f1f1', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.2rem' }}>{exp.role}</h3>
                      <p style={{ color: '#10B981', fontWeight: 600, fontSize: '0.9rem' }}>{exp.company}</p>
                      <p style={{ color: '#6b7280', fontSize: '0.8rem', marginTop: '0.2rem' }}>📍 {exp.location}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                      <span style={{ color: '#9ca3af', fontSize: '0.8rem', fontWeight: 500 }}>{exp.duration}</span>
                      {exp.badge && (
                        <span style={{
                          padding: '0.2rem 0.7rem',
                          backgroundColor: 'rgba(16,185,129,0.15)',
                          border: '1px solid rgba(16,185,129,0.4)',
                          borderRadius: '100px',
                          fontSize: '0.7rem',
                          color: '#10B981',
                          fontWeight: 600,
                        }}>
                          ● {exp.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1rem' }}>{exp.description}</p>

                  {exp.subProjects ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.25rem' }}>
                      {exp.subProjects.map((sp, k) => (
                        <div key={k}>
                          <h4 style={{ color: '#10B981', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.15rem' }}>{sp.label}</h4>
                          <p style={{ color: '#6b7280', fontSize: '0.78rem', fontStyle: 'italic', marginBottom: '0.6rem' }}>{sp.sub}</p>
                          <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            {sp.bullets.map((b, j) => (
                              <li key={j} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                <span style={{ color: '#10B981', flexShrink: 0, marginTop: '1px', fontSize: '0.9rem' }}>→</span>
                                <span style={{ color: '#d1d5db', fontSize: '0.875rem', lineHeight: 1.6 }}>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.25rem' }}>
                      {exp.bullets.map((b, j) => (
                        <li key={j} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                          <span style={{ color: '#10B981', flexShrink: 0, marginTop: '1px', fontSize: '0.9rem' }}>→</span>
                          <span style={{ color: '#d1d5db', fontSize: '0.875rem', lineHeight: 1.6 }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {exp.tags.map(tag => (
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
import SectionWrapper, { SectionHeading } from './SectionWrapper'

const experiences = [
  {
    role: 'Embedded R&D Engineer (Intern)',
    company: 'Walnut Medical',
    location: 'Mohali, Punjab',
    duration: 'Jan 2026 – Jul 2026',
    badge: 'Completed',
    featured: true,
    description: 'Independently designed the complete hardware and firmware for a flagship RTOS-based closed-loop Smart Infusion Pump (STM32 ARM Cortex-M4), and designed the hardware for an Automotive Telematics Gateway (4G LTE + GNSS + IoT, ESP32-S3) — both on Altium Designer, aligned with IEC 62304 medical firmware lifecycle standards.',
    subProjects: [
      {
        label: 'Primary — Smart Infusion Pump',
        sub: 'STM32 ARM Cortex-M4, FreeRTOS, Altium Designer — hardware & software developed independently end-to-end',
        bullets: [
          'Designed the full 5-sheet Altium multi-sheet schematic (Power, MCU/Safety, Motor Drive/DRV8825 stepper, Sensors/UI/Battery, Peltier/ESP32); applied net classes, DRC/ERC, and schematic review across all sheets',
          'Identified and corrected critical hardware errors: BQ24650 VFB feedback divider miscalculation, MPRLS I2C/SPI symbol mismatch, ATmega328P crystal (16 → 8 MHz for 3.3V operation), I2C pull-up values, and net label mismatches',
          'Redesigned battery architecture from 2S to 3S2P (Samsung INR18650-30Q) with BQ24650 charger, BQ76920 AFE, XL6009E1 UPS boost converter, and decoupling network for power rail stability',
          'Prepared 2-layer PCB (~100×120mm): placement planning, thermal management zones, routing constraints, DRC validation, and Gerber generation for manufacturing; conducted India-specific vendor sourcing and BOM cross-referencing',
          'Architected FreeRTOS firmware across 6 concurrent tasks (sub-10ms response); implemented PID closed-loop flow control at ±2% infusion accuracy; produced IEC 62304-compliant design documentation across all sprint milestones',
        ],
      },
      {
        label: 'Secondary — Automotive Telematics Gateway',
        sub: '4G LTE + GNSS + IoT, ESP32-S3, Altium Designer',
        bullets: [
          'Designed automotive GPS gateway hardware integrating ESP32-S3 MCU, GW1NS LTE module, BK1616P GNSS receiver, and Wi-Fi/BT interfaces; completed multi-sheet Altium schematic with datasheet analysis, BOM preparation, and footprint verification',
          'Designed 12/24V automotive power system: OC2006 buck converter, BQ24074 Li-ion charger, battery backup, reverse-polarity and surge protection, EMC-aware decoupling strategy',
          'Integrated LTE/GNSS/Wi-Fi RF front-end: antenna matching networks, TCXO clocking, SAW filtering, LNA path, and ESD protection for automotive EMC/EMI compliance',
          'Completed full PCB design workflow: signal integrity planning, placement, routing constraints, DRC validation, and Gerber generation for manufacturing hand-off',
        ],
      },
    ],
    tags: ['Altium Designer', 'PCB Design', 'STM32', 'ESP32-S3', 'FreeRTOS', 'BMS', 'RF Integration', 'IEC 62304'],
  },
  {
    role: 'Technical Trainee',
    company: 'BHEL (Bharat Heavy Electricals Ltd.)',
    location: 'Bhopal',
    duration: 'Aug – Sep 2025 (2 Weeks)',
    badge: 'Completed',
    featured: false,
    description: 'Industrial training covering PCB design workflows and EV embedded systems communication.',
    bullets: [
      'Multilayer PCB design workflows — stack-up planning, DRC in Altium Designer',
      'Signal conditioning for EV sensor interfaces',
      'CAN bus ECU-to-actuator communication mapping',
    ],
    tags: ['PCB Design', 'Altium', 'CAN Bus', 'EV Systems'],
  },
]

export default function Experience() {
  return (
    <div style={{ backgroundColor: '#0d0d0d' }}>
      <SectionWrapper id="experience">
        <SectionHeading tag="// WHERE I'VE WORKED" title="Work Experience" />

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '20px',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, #10B981, #059669 60%, #2a2a2a)',
            borderRadius: '1px',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingLeft: '56px' }}>
            {experiences.map((exp, i) => (
              <div key={i} style={{ position: 'relative' }}>
                {/* Dot */}
                <div style={{
                  position: 'absolute',
                  left: '-44px',
                  top: '24px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: exp.featured ? '#10B981' : '#2a2a2a',
                  border: `2px solid ${exp.featured ? '#10B981' : '#3a3a3a'}`,
                  boxShadow: exp.featured ? '0 0 12px rgba(16,185,129,0.5)' : 'none',
                }} />

                <div
                  className="card-hover"
                  style={{
                    backgroundColor: '#111111',
                    border: `1px solid ${exp.featured ? '#10B981' : '#2a2a2a'}`,
                    borderRadius: '12px',
                    padding: '1.75rem',
                    boxShadow: exp.featured ? '0 0 30px rgba(16,185,129,0.1)' : 'none',
                  }}
                >
                  {/* Header */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '0.75rem' }}>
                    <div>
                      <h3 style={{ color: '#f1f1f1', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.2rem' }}>{exp.role}</h3>
                      <p style={{ color: '#10B981', fontWeight: 600, fontSize: '0.9rem' }}>{exp.company}</p>
                      <p style={{ color: '#6b7280', fontSize: '0.8rem', marginTop: '0.2rem' }}>📍 {exp.location}</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.4rem' }}>
                      <span style={{ color: '#9ca3af', fontSize: '0.8rem', fontWeight: 500 }}>{exp.duration}</span>
                      {exp.badge && (
                        <span style={{
                          padding: '0.2rem 0.7rem',
                          backgroundColor: 'rgba(16,185,129,0.15)',
                          border: '1px solid rgba(16,185,129,0.4)',
                          borderRadius: '100px',
                          fontSize: '0.7rem',
                          color: '#10B981',
                          fontWeight: 600,
                        }}>
                          ● {exp.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <p style={{ color: '#9ca3af', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1rem' }}>{exp.description}</p>

                  {exp.subProjects ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '1.25rem' }}>
                      {exp.subProjects.map((sp, k) => (
                        <div key={k}>
                          <h4 style={{ color: '#10B981', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.15rem' }}>{sp.label}</h4>
                          <p style={{ color: '#6b7280', fontSize: '0.78rem', fontStyle: 'italic', marginBottom: '0.6rem' }}>{sp.sub}</p>
                          <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                            {sp.bullets.map((b, j) => (
                              <li key={j} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                                <span style={{ color: '#10B981', flexShrink: 0, marginTop: '1px', fontSize: '0.9rem' }}>→</span>
                                <span style={{ color: '#d1d5db', fontSize: '0.875rem', lineHeight: 1.6 }}>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <ul style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.25rem' }}>
                      {exp.bullets.map((b, j) => (
                        <li key={j} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                          <span style={{ color: '#10B981', flexShrink: 0, marginTop: '1px', fontSize: '0.9rem' }}>→</span>
                          <span style={{ color: '#d1d5db', fontSize: '0.875rem', lineHeight: 1.6 }}>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {exp.tags.map(tag => (
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
