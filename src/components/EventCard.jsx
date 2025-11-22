"use client"

import { motion } from "framer-motion"

// Re-defining THEME here for EventCard stability
const THEME = {
  PRIMARY: "#00E0FF", 
  ACCENT: "#FF00FF", 
  WARNING: "#FFD700", 
  TEXT_MAIN: "#FFFFFF",
}


export default function EventCard({ event, index, isDark }) {
  const eventBgImages = {
    "CODE CLASH": "/code-clash-bg.jpg",
    "UI/UX WARFARE": "/ui-ux-bg.jpg",
    "HACKATHON RAID": "/hackathon-bg.jpg",
    "WEB WARRIOR": "/web-warrior-bg.jpg",
    "AI NEXUS": "/ai-nexus-bg.jpg",
    "CYBER SHIELD": "/cyber-shield-bg.jpg",
  }

  const bgImage = eventBgImages[event.name] || "/placeholder.svg"
  const primaryColor = THEME.PRIMARY;
  const accentColor = THEME.ACCENT;
  const rewardColor = THEME.WARNING;

  // Determine card base style based on theme
  const cardStyle = isDark ? {
    background: 'rgba(0,0,0,0.4)',
    border: `2px solid ${primaryColor}40`,
  } : {
    background: '#ffffff',
    border: `2px solid #ddd`,
  };

  const titleColor = isDark ? primaryColor : '#1f2937';


  return (
    <motion.div
      className="group relative overflow-hidden cursor-pointer h-full flex flex-col rounded-sm"
      initial={{ opacity: 0, y: 50, rotateY: -10 }}
      // Animation on Scroll/View
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ delay: index * 0.1, duration: 0.8, type: "spring", stiffness: 150 }}
      viewport={{ once: true }}
      // Hover Effect
      whileHover={{
        y: isDark ? -8 : -4,
        scale: 1.02,
        boxShadow: isDark ? `0 0 30px ${primaryColor}60, inset 0 0 10px ${primaryColor}40` : `0 5px 15px rgba(0,0,0,0.2)`,
      }}
      style={cardStyle}
    >
      {/* --- Image/Holographic Header --- */}
      <div
        className="h-36 sm:h-44 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${primaryColor}40, ${accentColor}20), url('${bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          borderBottom: `1px solid ${primaryColor}60`,
        }}
      >
        {/* Dynamic Scanline/Noise Effect */}
        <motion.div
          className="absolute inset-0 opacity-20 pointer-events-none"
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, ${primaryColor}00, ${primaryColor}00 1px, ${primaryColor}50 2px, ${primaryColor}00 3px)`,
            backgroundSize: "50px 50px",
            filter: 'saturate(1.5)',
          }}
        />

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.span
            className="text-5xl md:text-6xl"
            animate={{
              scale: [1, 1.1, 1],
              rotateZ: [0, -5, 0],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            {event.icon}
          </motion.span>
        </div>
        
        {/* Title Border Separator */}
        <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: primaryColor }} />
      </div>

      {/* --- Body Content --- */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col" style={{ color: isDark ? THEME.TEXT_MAIN : '#333' }}>
        <h3
          className="text-2xl font-bold mb-3 uppercase"
          style={{
            color: titleColor,
            textShadow: isDark ? `0 0 8px ${primaryColor}a0` : 'none',
            fontFamily: "Orbitron, monospace",
            borderLeft: `3px solid ${accentColor}`,
            paddingLeft: '10px'
          }}
        >
          {event.name}
        </h3>
        <p className="text-white/70 text-sm mb-4 leading-relaxed flex-1" style={{ color: isDark ? '#ddd' : '#666' }}>{event.description}</p>

        {/* Info Block (Category & Prize) */}
        <div className="space-y-2 mb-4 text-sm border-t-2 pt-2" style={{ borderColor: isDark ? `${accentColor}40` : '#ccc' }}>
          <p className="flex justify-between items-center">
            <span
              className="font-bold mr-2 text-xs uppercase"
              style={{ color: isDark ? primaryColor : '#666', fontFamily: "Share Tech Mono, monospace" }}
            >
              [CATEGORY]
            </span>
            <span style={{ color: isDark ? THEME.TEXT_MAIN : '#333', fontWeight: 'bold' }}>{event.category}</span>
          </p>
          <p className="flex justify-between items-center">
            <span
              className="font-bold mr-2 text-xs uppercase"
              style={{ color: isDark ? primaryColor : '#666', fontFamily: "Share Tech Mono, monospace" }}
            >
              [REWARD]
            </span>
            {/* Prize Status Pill */}
            <motion.span 
                className="px-2 py-0.5 rounded-full text-xs font-extrabold"
                style={{ 
                    background: `${rewardColor}20`, 
                    color: rewardColor,
                    boxShadow: `0 0 10px ${rewardColor}60`
                }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.2 }}
            >
                ₹{event.prize}
            </motion.span>
          </p>
        </div>

        {/* Action Button */}
        <motion.button
          className="w-full py-3 border-2 rounded-sm text-sm font-bold uppercase tracking-widest relative overflow-hidden"
          style={{
            color: titleColor,
            borderColor: titleColor,
            fontFamily: "Orbitron, monospace",
            background: isDark ? `${primaryColor}15` : `${accentColor}15`,
            boxShadow: isDark ? `0 0 15px ${primaryColor}40` : `0 0 10px ${accentColor}30`,
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: isDark ? `0 0 30px ${primaryColor}90` : `0 0 20px ${accentColor}60`,
          }}
          whileTap={{ scale: 0.95 }}
        >
          [ JOIN QUEST ]
          {/* Animated Hover Line */}
          <motion.span
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 h-0.5"
            style={{ background: rewardColor }}
          />
        </motion.button>
      </div>

      {/* Corner Decorations (Pulsing Lights) */}
      <PulsingCorner style={{ top: 0, left: 0 }} color={primaryColor} delay={0} />
      <PulsingCorner style={{ top: 0, right: 0 }} color={primaryColor} delay={0.3} />
      <PulsingCorner style={{ bottom: 0, left: 0 }} color={accentColor} delay={0.6} />
      <PulsingCorner style={{ bottom: 0, right: 0 }} color={accentColor} delay={0.9} />
    </motion.div>
  )
}

// Dedicated Pulsing Corner Component (Simplified and cleaner)
const PulsingCorner = ({ style, color, delay }) => (
  <motion.div
    className="absolute w-2 h-2"
    style={{
      ...style,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: color,
      zIndex: 20,
    }}
    animate={{
      boxShadow: [
        `0 0 5px ${color}30`,
        `0 0 15px ${color}80`,
        `0 0 5px ${color}30`,
      ],
    }}
    transition={{ duration: 2, repeat: Infinity, delay: delay, ease: "easeInOut" }}
  />
);