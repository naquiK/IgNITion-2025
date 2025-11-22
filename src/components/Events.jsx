"use client"

import { motion } from "framer-motion"
import { useContext } from "react"
import EventCard from "./EventCard"
import { ThemeContext } from "../context/ThemeContext"

// --- Centralized Theme Constants (igNITion Palette) ---
const THEME = {
  PRIMARY: "#00E0FF",
  ACCENT: "#FF00FF",
  WARNING: "#FFD700",
  BG_DARK: "#09142A", // Slightly lighter base for the section
  TEXT_MAIN: "#FFFFFF",
}

export default function Events() {
  const { isDark } = useContext(ThemeContext)

  const events = [
    {
      name: "CODE CLASH",
      description: "Competitive programming tournament with live challenges",
      category: "CODING BATTLE",
      prize: "50,000",
      icon: "⚔️",
    },
    {
      name: "UI/UX WARFARE",
      description: "Design innovative user interfaces and experiences",
      category: "DESIGN QUEST",
      prize: "30,000",
      icon: "🎨",
    },
    {
      name: "HACKATHON RAID",
      description: "Build amazing projects in 24 hours with your team",
      category: "DEVELOPMENT",
      prize: "100,000",
      icon: "🚀",
    },
    {
      name: "WEB WARRIOR",
      description: "Full-stack web development competition",
      category: "WEB DEV",
      prize: "40,000",
      icon: "🌐",
    },
    {
      name: "AI NEXUS",
      description: "Solve problems using machine learning and AI",
      category: "AI/ML",
      prize: "60,000",
      icon: "🤖",
    },
    {
      name: "CYBER SHIELD",
      description: "Test your cybersecurity skills in this thrilling quest",
      category: "SECURITY",
      prize: "35,000",
      icon: "🔐",
    },
  ]

  const bgColor = isDark
    ? `linear-gradient(180deg, ${THEME.BG_DARK}, #1a012a)`
    : "linear-gradient(to bottom, #f0f4f8, #eef1f5)"

  const titleColor = isDark ? THEME.PRIMARY : THEME.ACCENT
  const shadow = isDark ? `0 0 30px ${THEME.PRIMARY}a0` : `0 0 20px ${THEME.ACCENT}60`

  return (
    <section
      id="events"
      className="py-20 px-4 transition-all duration-300 relative overflow-hidden"
      style={{ background: bgColor }}
    >
      {/* Background Data Stream Effect */}
      <motion.div
        className="absolute inset-0 opacity-20 pointer-events-none"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, ${THEME.PRIMARY}08 0px, ${THEME.PRIMARY}08 1px, transparent 1px, transparent 40px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Refined HUD Title */}
          <h2
            className="text-5xl md:text-6xl font-black mb-4 uppercase"
            style={{
              color: titleColor,
              textShadow: shadow,
              fontFamily: "Orbitron, monospace",
              letterSpacing: "0.15em",
            }}
          >
            [ MISSION BRIEFING ]
          </h2>
          <div className={`h-1 w-24 mx-auto mb-3 ${isDark ? 'bg-gradient-to-r from-cyan-400 to-pink-400' : 'bg-indigo-500'}`} />
          <p
            className="text-lg uppercase"
            style={{
              color: isDark ? `${THEME.TEXT_MAIN}a0` : `#333`,
              fontFamily: "Share Tech Mono, monospace",
            }}
          >
            SCROLL TO LOAD OBJECTIVES &gt;&gt; TARGET ACQUISITION
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} event={event} index={index} isDark={isDark} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-10 py-4 rounded-sm text-lg uppercase font-bold border-2"
            whileHover={{
              boxShadow: isDark
                ? `0 0 30px ${THEME.PRIMARY}80, inset 0 0 20px ${THEME.PRIMARY}30`
                : `0 0 30px ${THEME.ACCENT}60, inset 0 0 20px ${THEME.ACCENT}20`,
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              borderColor: titleColor,
              color: titleColor,
              background: isDark ? `${THEME.PRIMARY}15` : `${THEME.ACCENT}15`,
              fontFamily: "Orbitron, monospace",
            }}
          >
            [ VIEW ALL QUESTS ]
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}