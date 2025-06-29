import type React from "react"

interface TechBadgeProps {
  name: string
  primary?: boolean
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, primary = false }) => {
  return (
    <div
      className={`
        px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 hover:scale-105 cursor-default
        ${
          primary
            ? "bg-[#00ff88]/20 text-[#00ff88] border border-[#00ff88]/40 shadow-lg shadow-[#00ff88]/10"
            : "bg-gray-700/50 text-gray-200 border border-gray-600/30 hover:border-[#00ff88]/30 hover:bg-gray-700/70"
        }
      `}
    >
      {name}
    </div>
  )
}
