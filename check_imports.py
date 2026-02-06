import os
import re

def check_imports(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find all imported symbols from lucide-react
    lucide_imports = set()
    lucide_match = re.search(r"import\s+{(.+?)}\s+from\s+'lucide-react'", content)
    if lucide_match:
        lucide_imports = {s.strip() for s in lucide_match.group(1).split(',')}

    # Find all imported symbols from react-router-dom
    router_imports = set()
    router_match = re.search(r"import\s+{(.+?)}\s+from\s+'react-router-dom'", content)
    if router_match:
        router_imports = {s.strip() for s in router_match.group(1).split(',')}

    # Find all JSX tags that look like Lucide icons (Title Case)
    # This is a guestimate: any tag that starts with Capital letter and is NOT a standard component like NavLink
    found_tags = re.findall(r'<([A-Z][a-zA-Z0-9]+)', content)
    
    missing = []
    for tag in found_tags:
        if tag in ['NavLink', 'Link', 'AnimatePresence', 'motion']:
            if tag not in router_imports and tag in ['NavLink', 'Link']:
                missing.append(f"Missing {tag} from react-router-dom")
        elif tag == 'AnimatePresence' or tag == 'motion':
             # Assume framer-motion is fine since we check mostly icons
             pass 
        elif tag not in lucide_imports:
            # Check if it might be an icon
            missing.append(f"Missing {tag} from lucide-react (or other import)")

    return missing

pages_dir = r"c:\Users\yunam\mysoft\長安生技英文\src\pages"
for filename in os.listdir(pages_dir):
    if filename.endswith(".jsx"):
        path = os.path.join(pages_dir, filename)
        problems = check_imports(path)
        if problems:
            print(f"File: {filename}")
            for p in problems:
                print(f"  - {p}")
