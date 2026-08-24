import os
import re

center_accent = """</h2>
            <div className="flex items-center justify-center gap-2 mt-5">
              <span className="w-12 h-[2px] bg-[#e31837]"></span>
              <span className="w-2 h-2 rounded-full bg-[#e31837]"></span>
              <span className="w-12 h-[2px] bg-[#e31837]"></span>
            </div>"""

left_accent = """</h2>
            <div className="flex items-center justify-start gap-2 mt-5 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#e31837]"></span>
              <span className="w-16 h-[2px] bg-[#e31837]"></span>
            </div>"""

def process_file(filepath, accent):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Replace the FIRST occurrence of </h2>
    # For Gallery.jsx which is on one line: ...</h2>
    new_content = re.sub(r'</h2>', accent, content, count=1)
    
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
    'components/CarouselSection.jsx'
]

for f in files_to_center:
    if os.path.exists(f):
        process_file(f, center_accent)

# Overview gets left accent
if os.path.exists('components/Overview.jsx'):
    process_file('components/Overview.jsx', left_accent)

print("Accent lines added!")
