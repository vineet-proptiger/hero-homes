import os
import re

def add_class(filepath, class_name):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # We want to find the <h2> tag and add the class name to its className attribute.
    # Some have className="", some don't.
    
    # Simple regex to find the first <h2 ...>
    match = re.search(r'<h2([^>]*)>', content)
    if not match:
        return
        
    attrs = match.group(1)
    
    if 'className="' in attrs:
        new_attrs = attrs.replace('className="', f'className="{class_name} ')
    else:
        new_attrs = attrs + f' className="{class_name}"'
        
    new_h2 = f'<h2{new_attrs}>'
    new_content = content.replace(f'<h2{attrs}>', new_h2, 1)
    
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
        add_class(f, 'heading-center-line')

if os.path.exists('components/Overview.jsx'):
    add_class('components/Overview.jsx', 'heading-left-line')

print("Classes added!")
