import re

with open('components/Pricing.jsx', 'r') as f:
    content = f.read()

# We want to replace the whole <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ..."> ... </div> block.
# Finding the start is easy, but finding the exact end of the grid div requires matching braces.
# Since the grid is the last major element in the section, we can just replace everything from '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' to the end of the section '</div>\n    </section>'

start_str = '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">'
end_str = '</div>\n    </section>'

start_idx = content.find(start_str)
end_idx = content.find(end_str)

if start_idx == -1 or end_idx == -1:
    print("Could not find the bounds.")
else:
    new_grid = """<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {units.map((unit, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className={`group relative bg-white rounded-2xl transition-all duration-500 z-10 hover:z-20 hover:-translate-y-2 flex flex-col h-full`}
              style={{
                boxShadow: unit.isPopular ? '0 25px 60px -15px rgba(227,24,55,0.15)' : '0 15px 40px -15px rgba(0,0,0,0.08)',
                border: unit.isPopular ? '1px solid #fee2e2' : '1px solid #f3f4f6',
                overflow: 'hidden'
              }}
            >
              {/* Top Gradient Accent Bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#e31837] to-[#fca5a5]" />

              {unit.isPopular && (
                <div
                  className="absolute top-6 right-6 px-4 py-1.5 rounded-full text-white text-[10px] font-bold tracking-widest uppercase shadow-md shadow-red-500/20"
                  style={{ background: '#e31837' }}
                >
                  Most Preferred
                </div>
              )}

              <div className="p-8 pb-6 border-b border-gray-100 flex-grow">
                <h3
                  className="text-2xl sm:text-3xl font-bold mb-3 uppercase"
                  style={{ fontFamily: F_JOST, color: '#111827', letterSpacing: "0.02em" }}
                >
                  {unit.type}
                </h3>
                
                {unit.subtitle ? (
                  <p className="text-[14px] leading-relaxed" style={{ fontFamily: F_SANS, color: '#6b7280' }}>
                    {unit.subtitle}
                  </p>
                ) : (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-50 border border-gray-100">
                    <span className="text-[11px] uppercase tracking-wider font-bold" style={{ fontFamily: F_JOST, color: '#e31837' }}>Area:</span>
                    <p className="text-[14px] font-semibold" style={{ fontFamily: F_SANS, color: '#374151' }}>
                      {unit.size}
                    </p>
                  </div>
                )}

                <div className="mt-8 mb-4">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-bold block mb-2" style={{ fontFamily: F_JOST, color: '#9ca3af' }}>Starting At</span>
                  <div className="flex items-end gap-3 flex-wrap">
                    {unit.oldPrice && (
                      <span className="text-lg line-through font-medium opacity-60 pb-1" style={{ fontFamily: F_SANS, color: '#e31837' }}>
                        {unit.oldPrice}
                      </span>
                    )}
                    <p className="text-4xl sm:text-5xl font-black tracking-tight" style={{ fontFamily: F_JOST, color: '#111827' }}>
                      {unit.price.replace('₹', '')}<span className="text-3xl text-gray-400 font-medium ml-1">₹</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 pt-6 flex flex-col justify-between" style={{ minHeight: '280px' }}>
                <div className="space-y-4 mb-8">
                  {['Premium Luxury Residence', 'Smart Home Features', 'Zero Wastage Layouts'].map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
                        <Check size={12} strokeWidth={3} color="#e31837" />
                      </div>
                      <p className="text-[14px] font-medium leading-relaxed" style={{ fontFamily: F_SANS, color: '#4b5563' }}>
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setIsOpen(true)}
                  className="w-full py-4 px-6 rounded-xl font-bold uppercase tracking-widest text-[13px] transition-all duration-300"
                  style={{
                    fontFamily: F_JOST,
                    background: unit.isPopular ? '#e31837' : '#f8fafc',
                    color: unit.isPopular ? '#ffffff' : '#111827',
                    border: unit.isPopular ? '1px solid #e31837' : '1px solid #e2e8f0',
                  }}
                  onMouseEnter={(e) => {
                    if (!unit.isPopular) {
                      e.currentTarget.style.background = '#e31837';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.borderColor = '#e31837';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!unit.isPopular) {
                      e.currentTarget.style.background = '#f8fafc';
                      e.currentTarget.style.color = '#111827';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                    }
                  }}
                >
                  {unit.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>"""

    new_content = content[:start_idx] + new_grid + content[end_idx + len(end_str):]
    with open('components/Pricing.jsx', 'w') as f:
        f.write(new_content)
    print("Replaced successfully!")
