import os

with open('components/Hero.jsx', 'r') as f:
    content = f.read()

bad_overlay = """        /* ── Overlays & Content ── */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.2); /* Very light tint to reveal image fully */
          z-index: 2;
          pointer-events: none;
        }
        
        .hero-content {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 48px;
          z-index: 10;
          padding: 40px !important;
          max-width: 640px;
          background: rgba(17, 24, 39, 0.5); /* Frosted dark charcoal */
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 20px;
          box-shadow: 0 24px 48px rgba(0,0,0,0.4);
        }"""

good_overlay = """        /* Dark gradient overlay — bottom heavy so text is legible */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to right,
            rgba(0,0,0,0.72) 0%,
            rgba(0,0,0,0.45) 55%,
            rgba(0,0,0,0.10) 100%
          );
          z-index: 2;
          pointer-events: none;
        }

        /* Content block — sits over the image */
        .hero-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 10;
          padding: 0 44px 72px;
        }"""

content = content.replace(bad_overlay, good_overlay)

bad_tablet = """          .hero-content {
            left: 32px !important;
            padding: 32px !important;
            max-width: 500px !important;
          }"""

good_tablet = """          .hero-content {
            padding: 0 28px 42px !important;
          }"""
content = content.replace(bad_tablet, good_tablet)

bad_mobile = """          .hero-content {
            position: relative !important;
            top: auto !important;
            left: auto !important;
            transform: none !important;
            max-width: 100% !important;
            background: #ffffff !important;
            backdrop-filter: none !important;
            -webkit-backdrop-filter: none !important;
            border: none !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            padding: 24px 20px 28px !important;
          }"""

good_mobile = """          .hero-content {
            position: relative !important;
            background: #ffffff !important;
            padding: 24px 20px 28px !important;
          }"""

content = content.replace(bad_mobile, good_mobile)

with open('components/Hero.jsx', 'w') as f:
    f.write(content)

print("Reverted!")
