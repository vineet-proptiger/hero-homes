'use client'
import Image from 'next/image'
import { overviewImage } from '../lib/images'

const F_SANS = 'var(--font-sans), Open Sans, sans-serif'
const F_JOST = 'var(--font-jost), Montserrat, sans-serif'

/* Curved concave notch at each corner of the info box */
const CurvedCorners = ({ bg = '#fff' }) => {
  const corners = [
    { top: '-1px', left: '-1px', borderRight: '1px solid #fee2e2', borderBottom: '1px solid #fee2e2', borderBottomRightRadius: '18px' },
    { top: '-1px', right: '-1px', borderLeft: '1px solid #fee2e2', borderBottom: '1px solid #fee2e2', borderBottomLeftRadius: '18px' },
    { bottom: '-1px', left: '-1px', borderRight: '1px solid #fee2e2', borderTop: '1px solid #fee2e2', borderTopRightRadius: '18px' },
    { bottom: '-1px', right: '-1px', borderLeft: '1px solid #fee2e2', borderTop: '1px solid #fee2e2', borderTopLeftRadius: '18px' },
  ]

  return corners.map((c, i) => (
    <span key={i} style={{
      position: 'absolute', ...c,
      width: '22px', height: '22px',
      background: bg,
      display: 'block',
    }} />
  ))
}

const infoItems = [
  { label: 'STATUS',         value: 'NEW LAUNCH' },
  { label: 'TOTAL AREA',     value: '4.70 ACRES' },
  { label: 'TOWERS', value: '3 ICONIC TOWERS' },
]

const Overview = ({ setIsOpen }) => (
  <section
    id="overview"
    style={{ background: '#fff', padding: '72px 0 80px', borderBottom: '1px solid #f0ede6' }}
  >
    <div className="container mx-auto px-4 sm:px-8 max-w-[1200px]">
      
      <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
        
        {/* ── Left Side: Text Content ── */}
        <div className="w-full lg:w-1/2">
          
          {/* ── Section Heading ── */}
          <div style={{ marginBottom: '40px', textAlign: 'left' }}>
            <h2 data-aos="flip-right" data-aos-delay="500" style={{
              fontFamily: F_JOST, fontWeight: '700', fontSize: '17px',
              color: '#111827', letterSpacing: '0.1em',
              textTransform: 'uppercase', margin: '0 0 10px 0',
              display: 'inline-block', alignItems: 'center', justifyContent: 'flex-start', gap: '10px'
            }} className="heading-center-line">
              <span className="overview-subheading"><span style={{ color: '#111' }}>WELCOME TO</span> <span style={{ color: '#e31837' }}>HERO HOMES</span></span>
            </h2>
            <h3 style={{
              fontFamily: F_JOST, fontWeight: '600', fontSize: '16px',
              color: '#ef4444', letterSpacing: '0.05em',
              textTransform: 'capitalize', margin: 0,
            }}>
              Sector MU, Greater Noida, Uttar Pradesh
            </h3>
          </div>

          {/* Paragraphs */}
          <div data-aos="flip-down" data-aos-delay="500" className="relative pl-6 sm:pl-8 before:absolute before:left-0 before:top-2 before:bottom-2 before:w-[3px] before:bg-gradient-to-b before:from-[#e31837] before:to-transparent">
            <p className="overview-desc first-letter:float-left first-letter:text-5xl first-letter:pr-3 first-letter:font-bold first-letter:text-[#e31837] first-letter:leading-[0.8]" style={{
              fontFamily: F_SANS, fontSize: '14.5px', color: '#4b5563',
              lineHeight: 1.9,
              marginTop: 0, marginBottom: '14px',
              textAlign: 'justify',
            }}>
              <strong style={{ color: '#111827', fontWeight: '700' }}>Hero Homes Sector MU Greater Noida</strong> is a premium residential development designed around the concept of Resort Urban Living, offering an elevated lifestyle in one of the city's most sought-after locations. Spread across a well-planned <strong style={{ color: '#111827', fontWeight: '700' }}>4.70-acre land parcel</strong>, the project features 525 thoughtfully crafted apartments across 3 iconic towers, ensuring a perfect balance of luxury, privacy, and modern convenience.
            </p>
            <p className="overview-desc" style={{
              fontFamily: F_SANS, fontSize: '14.5px', color: '#4b5563',
              lineHeight: 1.9,
              marginTop: 0, marginBottom: '24px',
              textAlign: 'justify',
            }}>
              The development offers spacious <strong style={{ color: '#111827', fontWeight: '700' }}>3BHK residences</strong> ranging from 1650 sq.ft. (3BHK + 2T) to 1850 sq.ft. (3BHK + 3T), along with expansive 2200 sq.ft. 3BHK residences with servant rooms for enhanced comfort. This exclusive community is designed for discerning homebuyers seeking a premium address that combines elegance, functionality, and long-term value in Greater Noida's thriving real estate landscape.
            </p>
          </div>

          {/* Info Box */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
            data-aos-offset="0"
            style={{
              position: 'relative',
              border: '1px solid #fee2e2',
            }}
          >
            <CurvedCorners />

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-[1px]" style={{ background: '#fee2e2' }}>
            {infoItems.map((item, i) => {
              const bgColors = ['#f8fafc', '#FFFDF2', '#F4FAF4', '#F2FAFD'];
              return (
                <div key={i} className="flex flex-col justify-center group cursor-default transition-all duration-300" style={{
                  background: bgColors[i % 4],
                  padding: '20px 16px',
                  textAlign: 'left',
                }}>
                  <div data-aos="fade" data-aos-delay={600 + i * 150} data-aos-duration="800" data-aos-once="true" className="flex flex-row justify-between items-center sm:block">
                    <p className="mb-0 sm:mb-2" style={{
                      fontFamily: F_JOST, fontSize: '11px', fontWeight: '800',
                      color: '#e31837', letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                    }}>
                      {item.label}:
                    </p>
                    <p className="whitespace-normal break-words text-right sm:text-left transition-colors duration-300 group-hover:text-[#e31837]" style={{
                      fontFamily: F_JOST, fontSize: '14px', fontWeight: '700',
                      color: '#111827', letterSpacing: '0.05em',
                      textTransform: 'uppercase', margin: 0,
                      wordBreak: 'break-word', overflowWrap: 'break-word'
                    }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
            </div>
          </div>

        </div>

        {/* ── Right Side: Image ── */}
        <div className="hidden lg:block lg:w-1/2" data-aos="fade-left">
          <div className="relative w-full flex justify-center items-center">
            <Image 
              src={overviewImage} 
              alt="Hero Homes Overview"
              width={1000}
              height={1200}
              className="rounded-lg shadow-lg"
              style={{ width: '80%', height: 'auto', objectFit: 'contain', margin: '0 auto' }}
            />
          </div>
        </div>

      </div>
    </div>
  </section>
)

export default Overview
