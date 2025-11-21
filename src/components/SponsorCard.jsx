"use client"

import { motion } from "framer-motion"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function SponsorCard({ sponsor, index }) {
  const { isDark } = useContext(ThemeContext)

  const sponsorBgImages = {
    TechCorp: "/sponsor-tech.jpg",
    InnovateLabs: "/sponsor-labs.jpg",
    CodeMasters: "/sponsor-code.jpg",
    DesignHub: "/sponsor-design.jpg",
    CloudSync: "/sponsor-cloud.jpg",
    DataFlow: "/sponsor-data.jpg",
    WebDynamics: "/sponsor-web.jpg",
    SecureNet: "/sponsor-security.jpg",
    "AIML Insights": "/sponsor-ai.jpg",
  }

  const bgImage = sponsorBgImages[sponsor.name] || "/placeholder.svg?key=hibi9"

  return (
    <motion.div
      className="group cursor-pointer transition-all duration-300"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
      }}
      style={{
        background: isDark
          ? "linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(64, 0, 255, 0.05))"
          : "linear-gradient(135deg, rgba(79, 70, 229, 0.08), rgba(139, 92, 246, 0.05))",
        border: isDark ? "2px solid rgba(0, 217, 255, 0.3)" : "2px solid rgba(79, 70, 229, 0.3)",
        borderRadius: "0px",
        padding: "24px",
        textAlign: "center",
        boxShadow: isDark ? "0 0 20px rgba(0, 217, 255, 0.2)" : "0 0 20px rgba(79, 70, 229, 0.15)",
      }}
    >
      <div
        className="h-20 flex items-center justify-center mb-4 relative overflow-hidden"
        style={{
          background: isDark
            ? `linear-gradient(135deg, rgba(0, 217, 255, 0.5), rgba(64, 0, 255, 0.3)), url('${bgImage}')`
            : `linear-gradient(135deg, rgba(79, 70, 229, 0.4), rgba(139, 92, 246, 0.2)), url('${bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          border: isDark ? "1px solid rgba(0, 217, 255, 0.2)" : "1px solid rgba(79, 70, 229, 0.2)",
          boxShadow: isDark ? "0 0 20px rgba(0, 217, 255, 0.3) inset" : "0 0 20px rgba(79, 70, 229, 0.2) inset",
        }}
      >
        <motion.span
          className="text-3xl relative z-10 drop-shadow-lg"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
        >
          {sponsor.icon}
        </motion.span>
      </div>

      <h3
        className="text-lg font-bold mb-2 group-hover:scale-105 transition-transform"
        style={{
          color: isDark ? "#00d9ff" : "#4f46e5",
          textShadow: isDark ? "0 0 10px rgba(0, 217, 255, 0.6)" : "none",
          fontFamily: "Orbitron, monospace",
        }}
      >
        {sponsor.name}
      </h3>

      <p className={`text-sm mb-3 ${isDark ? "text-slate-400" : "text-gray-600"}`}>{sponsor.description}</p>

      <div className="mb-4">
        <span
          className="text-xs font-bold px-3 py-1 inline-block transition-all duration-300"
          style={{
            background: isDark ? "rgba(0, 217, 255, 0.1)" : "rgba(79, 70, 229, 0.1)",
            color: isDark ? "#00d9ff" : "#4f46e5",
            border: isDark ? "1px solid rgba(0, 217, 255, 0.3)" : "1px solid rgba(79, 70, 229, 0.3)",
            fontFamily: "Orbitron, monospace",
            letterSpacing: "0.05em",
          }}
        >
          [{sponsor.level.toUpperCase()}]
        </span>
      </div>

      <motion.a
        href="#"
        className="inline-block text-sm font-semibold transition-colors"
        style={{
          color: isDark ? "#00a8cc" : "#4f46e5",
          fontFamily: "Orbitron, monospace",
        }}
        whileHover={{
          textShadow: isDark ? "0 0 10px rgba(0, 168, 204, 0.8)" : "0 0 10px rgba(79, 70, 229, 0.6)",
        }}
      >
        [ DETAILS ]
      </motion.a>
    </motion.div>
  )
}
