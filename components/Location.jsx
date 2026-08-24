'use client'
import React from 'react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const locationItems = [
  { name: 'Noida-Greater Noida Expressway', dist: '5-10 min' },
  { name: 'Pari Chowk', dist: '6 min' },
  { name: 'Knowledge Park 2 Metro Station', dist: '5 min' },
  { name: 'Yamuna Expressway', dist: '15 min' },
  { name: 'Jewar Airport (Upcoming)', dist: '44 Km' },
  { name: 'IGI Airport', dist: '49 Km' },
  { name: 'Gautam Buddha University', dist: '10 min' },
  { name: 'DPS Sector MU', dist: '5 min' },
  { name: 'Yatharth Super Speciality Hospital', dist: '8 min' },
  { name: 'The Grand Venice Mall', dist: '10-12 min' },
]

const CurvedCorners = ({ bg = '#ffffff' }) => {
  const BORDER_COLOR = '#9C846C';
  const corners = [
    { top: '-1px', left: '-1px', borderRight: `1px solid ${BORDER_COLOR}`, borderBottom: `1px solid ${BORDER_COLOR}`, borderBottomRightRadius: '18px' },
    { top: '-1px', right: '-1px', borderLeft: `1px solid ${BORDER_COLOR}`, borderBottom: `1px solid ${BORDER_COLOR}`, borderBottomLeftRadius: '18px' },
    { bottom: '-1px', left: '-1px', borderRight: `1px solid ${BORDER_COLOR}`, borderTop: `1px solid ${BORDER_COLOR}`, borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: `1px solid ${BORDER_COLOR}`, borderTop: `1px solid ${BORDER_COLOR}`, borderTopLeftRadius: '18px' },
  ]
  return corners.map((c, i) => (
    <span key={i} style={{ position: 'absolute', ...c, width: '22px', height: '22px', background: bg, display: 'block', zIndex: 10 }} />
  ))
}

const Location = () => {

  return (
    <section id="location" style={{
      padding: '72px 0',
      background: '#ffffff', // Clean white background for the section
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* Section Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }} data-aos="fade-up">
           <h2 className="location-title" style={{
             fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
             color: '#3A2A0E', letterSpacing: '0.1em',
             textTransform: 'uppercase', margin: 0,
             display: 'flex', alignItems: 'center', justifyContent: 'center',
           }}>
             PRIME CONNECTIVITY AT SECTOR MU, GREATER NOIDA
           </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* LEFT — Premium List */}
          <div className="w-full lg:w-[45%]" data-aos="fade-right">
            <div style={{
              position: 'relative',
              border: '1px solid #9C846C',
              background: '#ffffff',
              height: '100%',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <CurvedCorners bg="#ffffff" />
              
              <div style={{ padding: '40px 32px' }}>
                <div className="space-y-4">
                  {locationItems.map((item, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'center',
                      fontFamily: F_SANS,
                    }}>
                      <span style={{ color: '#3A2A0E', fontWeight: '600', fontSize: '14.5px' }}>{item.name}</span>
                      <div style={{ flex: 1, borderBottom: '1.5px dotted #D5C2A8', margin: '0 16px', opacity: 0.8, position: 'relative', top: '2px' }} />
                      <span style={{ color: '#9C846C', fontWeight: '700', fontSize: '13px', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>{item.dist}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="w-full lg:flex-1" data-aos="fade-left" style={{ minHeight: '420px' }}>
            <div style={{
              border: '1px solid #9C846C',
              height: '100%', minHeight: '420px',
              position: 'relative',
              background: '#ffffff'
            }}>
              <CurvedCorners bg="#ffffff" />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7014.282600927591!2d77.56229!3d28.475291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c9500640c3e67%3A0xa44af5245cedfad8!2sHero%20Homes%20Sector%20MU%20Greater%20Noida!5e0!3m2!1sen!2sin!4v1787551010986!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px', display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px', zIndex: 10,
                background: 'var(--color-gold)', opacity: 0.9, backdropFilter: 'blur(6px)',
                borderRadius: '8px', padding: '6px 14px',
                display: 'flex', alignItems: 'center', gap: '6px',
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span style={{
                  color: '#fff', fontSize: '11px', fontFamily: F_JOST,
                  fontWeight: '700', letterSpacing: '0.04em'
                }}>
                  Sector MU, Greater Noida
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Location
