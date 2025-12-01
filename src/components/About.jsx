"use client"

import { useEffect, useRef, useContext } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Link } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const headingRef = useRef(null)
  const { isDark } = useContext(ThemeContext)

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      },
    )
  }, [])

  const stats = [
    { number: "2000+", label: "PLAYERS" },
    { number: "20+", label: "QUESTS" },
    { number: "10+", label: "GUILDS" },
    { number: "3", label: "DAYS" },
  ]

  const primaryColor = isDark ? "#00ff88" : "#8a2be2"
  const secondaryColor = isDark ? "rgba(0, 255, 136, 0.7)" : "rgba(138, 43, 226, 0.7)"
  const borderColor = isDark ? "rgba(0, 255, 136, 0.3)" : "rgba(138, 43, 226, 0.3)"
  const bgGradient = isDark
    ? "linear-gradient(180deg, rgba(10, 15, 46, 0.8), rgba(26, 15, 78, 0.8))"
    : "linear-gradient(180deg, rgba(245, 247, 250, 0.9), rgba(232, 236, 241, 0.9))"

  return (
    <section
      id="about"
      className="py-16 md:py-20 px-4 md:px-6 transition-all duration-300 relative overflow-hidden"
      style={{ background: bgGradient }}
    >
      <motion.div
        className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        style={{
          background: isDark ? "rgba(0, 255, 255, 0.1)" : "rgba(138, 43, 226, 0.1)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={headingRef}
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4"
            style={{
              color: primaryColor,
              textShadow: isDark ? "0 0 30px rgba(0, 255, 136, 0.8)" : "0 0 30px rgba(138, 43, 226, 0.4)",
              fontFamily: "Orbitron, monospace",
              letterSpacing: "0.1em",
            }}
          >
            [ ABOUT THE ARENA ]
          </h2>
          <p
            className="text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2"
            style={{
              color: secondaryColor,
            }}
          >
            DIVE INTO THE DIGITAL UNIVERSE
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hud-frame p-5 sm:p-6 md:p-8 transition-all duration-300"
            style={{
              background: isDark
                ? "linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 153, 255, 0.05))"
                : "linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(138, 43, 226, 0.05))",
              border: `2px solid ${borderColor}`,
            }}
          >
            <h3
              className="leading-relaxed text-lg sm:text-xl md:text-2xl font-bold mb-4"
              style={{
                color: primaryColor,
                fontFamily: "Orbitron, monospace",
              }}
            >
              &gt; WHAT IS IgNITion?
            </h3>
            <p
              className="leading-relaxed mb-4 text-sm md:text-base"
              style={{ color: isDark ? "text-slate-300" : "#666" }}
            >
              IgNITion-2025 is more than just a Techfest—it's a celebration of creativity and the boundless
              possibilities of technology. Designed to ignite the spark of curiosity and passion in students, tech
              enthusiasts, and professionals alike.
            </p>
            <p className="text-sm md:text-base" style={{ color: isDark ? "rgba(255,255,255,0.6)" : "#888" }}>
              With 20+ epic quests spanning code battles, design warfare, hackathon raids, and knowledge seminars,
              IgNITion offers the ultimate immersive tech gaming experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hud-frame p-5 sm:p-6 md:p-8 transition-all duration-300"
            style={{
              background: isDark
                ? "linear-gradient(135deg, rgba(0, 153, 255, 0.1), rgba(0, 255, 136, 0.05))"
                : "linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(138, 43, 226, 0.05))",
              border: `2px solid ${borderColor}`,
            }}
          >
            <h3
              className="text-lg sm:text-xl md:text-2xl font-bold mb-4"
              style={{
                color: isDark ? "#0099ff" : "#8a2be2",
                fontFamily: "Orbitron, monospace",
              }}
            >
              &gt; GAUTAM BUDDHA UNIVERSITY
            </h3>
            <p
              className="leading-relaxed mb-4 text-sm md:text-base"
              style={{ color: isDark ? "text-slate-300" : "#666" }}
            >
              Situated in the tech-bowl of India, Greater Noida, Gautam Buddha University is a leading institution that
              offers graduate and post-graduate degrees in diverse fields of education.
            </p>
            <p className="text-sm md:text-base" style={{ color: isDark ? "rgba(255,255,255,0.6)" : "#888" }}>
              igNITion embodies GBU's mission to empower tomorrow's tech leaders through experiential battle arenas and
              industry collaboration.
            </p>
          </motion.div>
        </div>

        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 md:mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="hud-frame p-3 sm:p-4 md:p-6 text-center transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{
                background: isDark
                  ? "linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 153, 255, 0.05))"
                  : "linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(138, 43, 226, 0.05))",
                border: `2px solid ${borderColor}`,
                boxShadow: isDark
                  ? "0 0 20px rgba(0, 255, 136, 0.2), inset 0 0 20px rgba(0, 255, 136, 0.05)"
                  : "0 0 20px rgba(138, 43, 226, 0.1), inset 0 0 20px rgba(138, 43, 226, 0.05)",
              }}
            >
              <h3
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-2"
                style={{
                  color: primaryColor,
                  textShadow: isDark ? "0 0 10px rgba(0, 255, 136, 0.8)" : "0 0 10px rgba(138, 43, 226, 0.4)",
                }}
              >
                {stat.number}
              </h3>
              <p
                className="text-xs md:text-sm"
                style={{
                  color: secondaryColor,
                  fontFamily: "Orbitron, monospace",
                  fontSize: "0.75rem",
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="neon-btn px-6 sm:px-8 py-3 sm:py-4 rounded-none text-sm md:text-lg transition-all duration-300"
            style={{
              background: isDark ? "rgba(0, 255, 136, 0.1)" : "rgba(138, 43, 226, 0.1)",
              color: primaryColor,
              border: `2px solid ${primaryColor}`,
              fontFamily: "Orbitron, monospace",
            }}
            whileHover={{
              boxShadow: isDark
                ? "0 0 30px rgba(0, 255, 136, 0.8), inset 0 0 20px rgba(0, 255, 136, 0.3)"
                : "0 0 30px rgba(138, 43, 226, 0.6), inset 0 0 20px rgba(138, 43, 226, 0.2)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            [ LEARN LORE ]
          </motion.button>

          <Link to="/committees">
            <motion.button
              className="neon-btn px-6 sm:px-8 py-3 sm:py-4 rounded-none text-sm md:text-lg transition-all duration-300"
              style={{
                background: isDark ? "rgba(0, 153, 255, 0.1)" : "rgba(138, 43, 226, 0.1)",
                color: isDark ? "#0099ff" : "#8a2be2",
                border: `2px solid ${isDark ? "#0099ff" : "#8a2be2"}`,
                fontFamily: "Orbitron, monospace",
              }}
              whileHover={{
                boxShadow: isDark
                  ? "0 0 30px rgba(0, 153, 255, 0.8), inset 0 0 20px rgba(0, 153, 255, 0.3)"
                  : "0 0 30px rgba(138, 43, 226, 0.6), inset 0 0 20px rgba(138, 43, 226, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              [ VIEW COMMITTEES ]
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
