import os
import re

def add_class(filepath, class_name):
    with open(filepath, 'r') as f:
        content = f.read()
    
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
    'components/QuickChat.jsx',
    'components/VirtualTour.jsx',
    'components/JapaneseExcellence.jsx',
    'components/Sustainability.jsx',
    'components/ExclusiveAmenities.jsx'
]

for f in files_to_center:
    if os.path.exists(f):
        add_class(f, 'heading-center-line')

print("Classes added to remaining files!")
