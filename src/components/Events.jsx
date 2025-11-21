"use client"

import { motion } from "framer-motion"
import { useContext } from "react"
import EventCard from "./EventCard"
import { ThemeContext } from "../context/ThemeContext"

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
      prize: "1,00,000",
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

  return (
    /* Added light mode support with theme context */
    <section
      id="events"
      className="py-20 px-4 transition-all duration-300 relative overflow-hidden"
      style={{
        background: isDark
          ? "linear-gradient(to-b, rgba(10, 14, 39, 0.9), rgba(26, 13, 62, 0.9))"
          : "linear-gradient(to-b, rgba(245, 247, 250, 0.95), rgba(232, 236, 241, 0.95))",
      }}
    >
      <motion.div
        className="absolute top-40 left-10 w-80 h-80 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        style={{
          background: isDark ? "rgba(0, 217, 255, 0.1)" : "rgba(138, 43, 226, 0.08)",
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
          <h2
            className="text-5xl md:text-6xl font-black mb-4"
            style={{
              color: isDark ? "#00d9ff" : "#4000ff",
              textShadow: isDark ? "0 0 30px rgba(0, 217, 255, 0.8)" : "0 0 20px rgba(64, 0, 128, 0.3)",
              fontFamily: "Orbitron, monospace",
              letterSpacing: "0.1em",
            }}
          >
            [ AVAILABLE QUESTS ]
          </h2>
          <p
            className="text-lg"
            style={{
              color: isDark ? "rgba(0, 217, 255, 0.7)" : "rgba(64, 0, 128, 0.6)",
            }}
          >
            SELECT YOUR BATTLE AND CLAIM VICTORY
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
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
            className="neon-btn px-10 py-4 rounded-none text-lg"
            whileHover={{
              boxShadow: isDark
                ? "0 0 30px rgba(0, 217, 255, 0.8), inset 0 0 20px rgba(0, 217, 255, 0.3)"
                : "0 0 30px rgba(64, 0, 128, 0.6), inset 0 0 20px rgba(64, 0, 128, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              borderColor: isDark ? "rgba(0, 217, 255, 0.7)" : "rgba(64, 0, 128, 0.7)",
              color: isDark ? "#00d9ff" : "#4000ff",
              background: isDark ? "rgba(0, 217, 255, 0.1)" : "rgba(64, 0, 128, 0.1)",
              boxShadow: isDark
                ? "inset 0 0 15px rgba(0, 217, 255, 0.25), 0 0 20px rgba(0, 217, 255, 0.6), 0 0 40px rgba(64, 0, 128, 0.3)"
                : "inset 0 0 15px rgba(64, 0, 128, 0.15), 0 0 20px rgba(64, 0, 128, 0.3)",
            }}
          >
            [ VIEW ALL QUESTS ]
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
