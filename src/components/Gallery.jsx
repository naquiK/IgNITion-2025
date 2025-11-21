"use client"

import { useEffect, useRef, useContext } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ThemeContext } from "../context/ThemeContext"

export default function Gallery() {
  const titleRef = useRef(null)
  const { isDark } = useContext(ThemeContext)

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" })
    }
  }, [])

  const gallerySample = [
    {
      id: 1,
      title: "Coding Challenge 2024",
      category: "Competition",
      image: "/coding-competition-tech-fest.jpg",
    },
    {
      id: 2,
      title: "Hackathon Winners",
      category: "Winners",
      image: "/hackathon-winners-celebration.jpg",
    },
    {
      id: 3,
      title: "Tech Exhibition",
      category: "Exhibition",
      image: "/technology-exhibition-showcase.jpg",
    },
    {
      id: 4,
      title: "Keynote Session",
      category: "Speakers",
      image: "/tech-conference-keynote-speaker.jpg",
    },
    {
      id: 5,
      title: "Networking Event",
      category: "Community",
      image: "/tech-networking-event-crowd.jpg",
    },
    {
      id: 6,
      title: "Workshop Session",
      category: "Learning",
      image: "/tech-workshop-learning-session.jpg",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="gallery"
      className={`py-20 px-4 md:px-8 relative overflow-hidden transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-b from-[#0f1419] via-[#1a1f2e] to-[#0f1419]"
          : "bg-gradient-to-b from-[#f8f9fa] via-[#eef2f7] to-[#f8f9fa]"
      }`}
    >
      {/* Cyberpunk background elements */}
      <div
        className={`absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl ${isDark ? "bg-cyan-500/5" : "bg-indigo-300/10"}`}
      />
      <div
        className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl ${isDark ? "bg-purple-500/5" : "bg-purple-300/10"}`}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title Section */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-black mb-4"
            style={{
              color: isDark ? "#00d9ff" : "#1a365d",
              textShadow: isDark ? "0 0 30px rgba(0, 217, 255, 0.6)" : "none",
              fontFamily: "Orbitron, monospace",
              letterSpacing: "0.1em",
            }}
          >
            [ MEMORY ARCHIVE ]
          </h2>
          <div
            className={`h-1 w-32 mx-auto mb-6 ${isDark ? "bg-gradient-to-r from-cyan-500 to-green-500" : "bg-gradient-to-r from-indigo-500 to-purple-500"}`}
          />
          <p
            style={{
              color: isDark ? "rgba(0, 217, 255, 0.7)" : "rgba(26, 54, 93, 0.7)",
              fontFamily: "Orbitron, monospace",
              fontSize: "0.9rem",
              letterSpacing: "0.05em",
            }}
          >
            PREVIOUS TECH FEST GLIMS | RELIVE THE MOMENTS
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {gallerySample.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`group relative overflow-hidden hud-frame transition-all duration-300 ${
                isDark ? "border border-cyan-500/30" : "border border-indigo-300/30"
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {/* Image Container */}
              <div className="relative w-full h-80 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark
                      ? "bg-gradient-to-tr from-cyan-500/20 to-transparent"
                      : "bg-gradient-to-tr from-indigo-500/15 to-transparent"
                  }`}
                />

                {/* Scanline effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: isDark
                        ? "repeating-linear-gradient(0deg, rgba(0, 217, 255, 0.03) 0px, rgba(0, 217, 255, 0.03) 1px, transparent 1px, transparent 2px)"
                        : "repeating-linear-gradient(0deg, rgba(79, 70, 229, 0.02) 0px, rgba(79, 70, 229, 0.02) 1px, transparent 1px, transparent 2px)",
                      animation: "scan-line 8s linear infinite",
                    }}
                  />
                </div>
              </div>

              <motion.div
                className={`absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  isDark
                    ? "bg-gradient-to-t from-[#0f1419] via-transparent to-transparent"
                    : "bg-gradient-to-t from-white via-transparent to-transparent"
                }`}
              >
                <div className={`border-t-2 pt-4 ${isDark ? "border-cyan-500" : "border-indigo-500"}`}>
                  <p
                    className="text-xs font-bold mb-2"
                    style={{
                      color: isDark ? "#00a8cc" : "#4f46e5",
                      fontFamily: "Orbitron, monospace",
                      letterSpacing: "0.05em",
                    }}
                  >
                    [ {item.category.toUpperCase()} ]
                  </p>
                  <h3
                    className="text-lg font-bold"
                    style={{
                      color: isDark ? "#00d9ff" : "#1a365d",
                      textShadow: isDark ? "0 0 10px rgba(0, 217, 255, 0.6)" : "none",
                      fontFamily: "Orbitron, monospace",
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </motion.div>

              {/* Corner decorations */}
              <div
                className={`absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 ${isDark ? "border-cyan-500" : "border-indigo-500"}`}
              />
              <div
                className={`absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 ${isDark ? "border-cyan-500" : "border-indigo-500"}`}
              />
              <div
                className={`absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 ${isDark ? "border-green-500" : "border-purple-500"}`}
              />
              <div
                className={`absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 ${isDark ? "border-green-500" : "border-purple-500"}`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className={`neon-btn px-8 py-4 rounded-none text-lg transition-all duration-300 ${
              isDark
                ? "text-cyan-300 border border-cyan-300/50 hover:shadow-lg hover:shadow-cyan-500/50"
                : "text-indigo-700 border border-indigo-300 hover:shadow-lg hover:shadow-indigo-400/50"
            }`}
            whileHover={{
              boxShadow: isDark
                ? "0 0 30px rgba(0, 217, 255, 0.6), inset 0 0 20px rgba(0, 217, 255, 0.2)"
                : "0 0 30px rgba(79, 70, 229, 0.4), inset 0 0 20px rgba(79, 70, 229, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            [ LOAD MORE MEMORIES ]
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
