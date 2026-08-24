import os

center_accent = """
            <div className="flex items-center justify-center gap-2 mt-5">
              <span className="w-12 h-[2px] bg-[#e31837]"></span>
              <span className="w-2 h-2 rounded-full bg-[#e31837]"></span>
              <span className="w-12 h-[2px] bg-[#e31837]"></span>
            </div>"""

left_accent = """
            <div className="flex items-center justify-start gap-2 mt-5 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#e31837]"></span>
              <span className="w-16 h-[2px] bg-[#e31837]"></span>
            </div>"""

def process_file(filepath, accent):
    with open(filepath, 'r') as f:
        content = f.read()
    
    new_content = content.replace(accent, "")
    
    with open(filepath, 'w') as f:
        f.write(new_content)

files_to_center = [
    'components/Highlights.jsx',
    'components/Amenities.jsx',
    'components/MasterPlan.jsx',
    'components/Pricing.jsx',
    'components/Location.jsx',
    'components/Gallery.jsx',
    'components/AboutDeveloper.jsx',
    'components/PaymentPlan.jsx',
    'components/CarouselSection.jsx',
    'components/Footer.jsx',
    'components/QuickChat.jsx',
    'components/VirtualTour.jsx',
    'components/JapaneseExcellence.jsx',
    'components/Sustainability.jsx',
    'components/ExclusiveAmenities.jsx'
]

for f in files_to_center:
    if os.path.exists(f):
        process_file(f, center_accent)

if os.path.exists('components/Overview.jsx'):
    process_file('components/Overview.jsx', left_accent)
    process_file('components/Overview.jsx', center_accent)

print("Accent lines removed!")
