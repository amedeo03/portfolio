// ─── Lucide icon map ─────────────────────────────────────────────────────────
// Add new mappings here if you add icons in data.js.
import {
  Mail, Linkedin,
  ArrowRight, ExternalLink, Sun, Moon,
} from 'lucide-react'

import { siDiscord, siGithub } from 'simple-icons'

const ICON_MAP = { Mail, Linkedin, Github: siGithub, ArrowRight, ExternalLink, Sun, Moon, Discord: siDiscord }

/**
 * Resolve an icon by string name from data.js.
 * Supports both Lucide (components) and Simple Icons (objects).
 */
export default function Icon({ name, size = 20, ...props }) {
  const icon = ICON_MAP[name]
  if (!icon) return null

  // If it's a Simple Icon object (e.g. from simple-icons)
  if (icon.path) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d={icon.path} />
      </svg>
    )
  }

  // Otherwise, treat it as a Lucide component (function or object/forwardRef)
  const Component = icon
  return <Component size={size} {...props} />
}
