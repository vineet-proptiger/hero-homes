#!/bin/bash
find components app -type f -name "*.jsx" -o -name "*.js" -o -name "*.css" | xargs sed -i '' \
  -e 's/#9C846C/#e31837/gi' \
  -e 's/#C9A96E/#e31837/gi' \
  -e 's/#3A2A0E/#111827/gi' \
  -e 's/#684C1B/#4b5563/gi' \
  -e 's/#D5C2A8/#e5e7eb/gi' \
  -e 's/#FAF5F5/#f8fafc/gi' \
  -e 's/#FDF8F6/#f8fafc/gi' \
  -e 's/#F4EFE6/#f8fafc/gi' \
  -e 's/#EAE5DC/#f8fafc/gi'
