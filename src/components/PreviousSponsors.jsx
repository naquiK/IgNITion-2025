"use client"

import { motion } from "framer-motion"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { sponsors } from "../data/sponsors"

export default function PreviousSponsors() {
  const { isDark } = useContext(ThemeContext)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section
      id="sponsors"
      className="py-20 px-4 transition-all duration-300"
      style={{
        background: isDark
          ? "linear-gradient(180deg, rgba(10, 15, 46, 0.8), rgba(26, 15, 78, 0.8))"
          : "linear-gradient(180deg, rgba(245, 247, 250, 0.9), rgba(232, 236, 241, 0.9))",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{
              color: isDark ? "#00ffff" : "#8a2be2",
              textShadow: isDark ? "0 0 20px rgba(0, 255, 255, 0.6)" : "0 0 20px rgba(138, 43, 226, 0.4)",
              fontFamily: "Orbitron, monospace",
              letterSpacing: "0.1em",
            }}
          >
            [ PREVIOUS SPONSORS ]
          </h2>
          <p
            className="text-lg"
            style={{
              color: isDark ? "rgba(0, 255, 255, 0.7)" : "rgba(138, 43, 226, 0.7)",
            }}
          >
            INCREDIBLE PARTNERS SUPPORTING igNITion 2025
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {sponsors.map((sponsor, index) => (
            <motion.a
              key={index}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="group relative"
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="p-6 rounded-lg backdrop-blur-sm border-2 transition-all duration-300 cursor-pointer relative overflow-hidden h-full flex flex-col items-center justify-center"
                style={{
                  background: isDark ? "rgba(0, 255, 255, 0.08)" : "rgba(138, 43, 226, 0.08)",
                  borderColor: isDark ? "rgba(0, 255, 255, 0.3)" : "rgba(138, 43, 226, 0.3)",
                  boxShadow: isDark ? "0 0 20px rgba(0, 255, 255, 0.2)" : "0 0 20px rgba(138, 43, 226, 0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = isDark
                    ? "0 0 30px rgba(0, 255, 255, 0.6), inset 0 0 20px rgba(0, 255, 255, 0.1)"
                    : "0 0 30px rgba(138, 43, 226, 0.4), inset 0 0 20px rgba(138, 43, 226, 0.1)"
                  e.currentTarget.style.borderColor = isDark ? "#00ffff" : "#8a2be2"
                  e.currentTarget.style.background = isDark ? "rgba(0, 255, 255, 0.15)" : "rgba(138, 43, 226, 0.15)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = isDark
                    ? "0 0 20px rgba(0, 255, 255, 0.2)"
                    : "0 0 20px rgba(138, 43, 226, 0.1)"
                  e.currentTarget.style.borderColor = isDark ? "rgba(0, 255, 255, 0.3)" : "rgba(138, 43, 226, 0.3)"
                  e.currentTarget.style.background = isDark ? "rgba(0, 255, 255, 0.08)" : "rgba(138, 43, 226, 0.08)"
                }}
              >
                <img
                  src={sponsor.imageUrl || "/placeholder.svg"}
                  alt={sponsor.name}
                  className="h-16 mb-4 object-contain max-w-[80%]"
                  onError={(e) => {
                    e.target.style.display = "none"
                  }}
                />
                <h3
                  className="text-center font-bold mb-2 text-sm line-clamp-2"
                  style={{
                    color: isDark ? "#00ffff" : "#8a2be2",
                    fontFamily: "Orbitron, monospace",
                  }}
                >
                  {sponsor.name}
                </h3>
                <p
                  className="text-center text-xs line-clamp-1"
                  style={{
                    color: isDark ? "rgba(0, 255, 255, 0.5)" : "rgba(138, 43, 226, 0.5)",
                  }}
                >
                  {sponsor.category}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
