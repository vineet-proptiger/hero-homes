'use client'
import React from 'react'
import {
  Dumbbell, Sparkles, Flower2, Waves,
  Footprints, Smile, Leaf, Activity
} from 'lucide-react'

const F_JOST = 'var(--font-jost), Montserrat, sans-serif'
const F_SANS = 'var(--font-sans), Open Sans, sans-serif'

const CurvedCorners = ({ bg = '#fff', color = '#e5e7eb' }) => {
  const corners = [
    { top: '-1px', left: '-1px', borderRight: `1px solid ${color}`, borderBottom: `1px solid ${color}`, borderBottomRightRadius: '18px' },
    { top: '-1px', right: '-1px', borderLeft: `1px solid ${color}`, borderBottom: `1px solid ${color}`, borderBottomLeftRadius: '18px' },
    { bottom: '-1px', left: '-1px', borderRight: `1px solid ${color}`, borderTop: `1px solid ${color}`, borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: `1px solid ${color}`, borderTop: `1px solid ${color}`, borderTopLeftRadius: '18px' },
  ]
  return corners.map((c, i) => (
    <span key={i} style={{ position: 'absolute', ...c, width: '22px', height: '22px', background: bg, display: 'block' }} />
  ))
}

const newAmenities = [
  { icon: Dumbbell, title: 'Gymnasium',          desc: 'Exclusive resident clubhouse.', color: '#F59E0B' },
  { icon: Sparkles,    title: 'GRAND CLUBHOUSE',    desc: 'Grand clubhouse with modern facilities.', color: '#3B82F6' },
  { icon: Flower2,     title: 'YOGA PAVILION',      desc: 'Dedicated space for yoga and meditation.', color: '#8B5CF6' },
  { icon: Waves,       title: 'SWIMMING POOL',      desc: 'Refreshing swimming pool.', color: '#EF4444' },
  { icon: Footprints,  title: 'JOGGING TRACK',      desc: 'Scenic jogging track.', color: '#10B981' },
  { icon: Smile,       title: 'KIDS\' PLAY AREA',   desc: 'Safe and fun play area for kids.', color: '#F97316' },
  { icon: Leaf,        title: 'LANDSCAPED GARDENS', desc: 'Beautifully landscaped lush gardens.', color: '#EC4899' },
  { icon: Activity,    title: 'TENNIS COURT',       desc: 'Outdoor tennis court.', color: '#06b6d4' },
]

const Amenities = () => {
  return (
    <section id="amenities" style={{
      padding: '72px 0',
      background: '#111827',
    }}>
      <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">

        {/* Section Header */}
        <div style={{ marginBottom: '40px', textAlign: 'center' }} data-aos="fade-up">
          <h2 style={{
            fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase', margin: 0,
            display: 'inline-block', alignItems: 'center', justifyContent: 'center',
          }} className="heading-center-line">
            <span style={{ color: '#fff' }}>WORLD-CLASS</span>&nbsp;<span style={{ color: '#e31837' }}>AMENITIES</span>
          </h2>
          {/* <p style={{ fontFamily: F_SANS, color: '#9ca3af', marginTop: '10px' }}>EXPERIENCE MORE EVERY DAY</p> */}
        </div>

        {/* Grid Container */}
        <div data-aos="fade-up" data-aos-delay="100" style={{
          position: 'relative',
          border: '1px solid #e31837',
          margin: '0 auto',
        }}>
          <CurvedCorners color="#e31837" bg="#111827" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]" style={{ background: '#e31837' }}>
            {newAmenities.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center group" style={{
                background: '#111827',
                padding: '48px 24px',
                textAlign: 'center',
              }}>
                {/* Icon */}
                <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center mb-6 text-white group-hover:scale-105 transition-transform duration-300" style={{ background: item.color, boxShadow: `0 0 20px ${item.color}40` }}>
                  <item.icon size={36} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: F_JOST, fontSize: '15px', fontWeight: '600',
                  color: '#ffffff', letterSpacing: '0.12em', margin: '0 0 12px'
                }}>
                  {item.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontFamily: F_SANS, fontSize: '13px', color: '#9ca3af',
                  lineHeight: 1.6, margin: 0,
                  textAlign: 'justify'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  )
}

export default Amenities
