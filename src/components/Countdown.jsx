"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-02-15").getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const TimeUnit = ({ value, label, index }) => (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="hud-frame p-2 sm:p-3 md:p-4 lg:p-6 min-w-16 sm:min-w-20 md:min-w-24"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.2 }}
        style={{
          background: "linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 153, 255, 0.05))",
          border: "2px solid rgba(0, 255, 136, 0.3)",
          boxShadow: "0 0 15px rgba(0, 255, 136, 0.3), inset 0 0 15px rgba(0, 255, 136, 0.1)",
        }}
      >
        <span
          className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black"
          style={{
            color: "#00ff88",
            textShadow: "0 0 10px rgba(0, 255, 136, 0.8)",
          }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </motion.div>
      <span
        className="text-xs md:text-sm mt-1 md:mt-2 font-semibold uppercase tracking-widest"
        style={{
          color: "rgba(0, 255, 136, 0.6)",
          fontFamily: "Orbitron, monospace",
        }}
      >
        {label}
      </span>
    </motion.div>
  )

  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 relative overflow-hidden border-y border-cyan-500/30">
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="countdown-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00ff88" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#countdown-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black mb-2"
            style={{
              color: "#00ff88",
              textShadow: "0 0 30px rgba(0, 255, 136, 0.8)",
              fontFamily: "Orbitron, monospace",
              letterSpacing: "0.1em",
            }}
          >
            [ MISSION TIMER ]
          </h2>
          <p
            className="text-xs sm:text-sm md:text-base"
            style={{
              color: "rgba(0, 255, 136, 0.6)",
              fontFamily: "Orbitron, monospace",
            }}
          >
            LAUNCH SEQUENCE INITIATED
          </p>
        </motion.div>

        <div className="flex justify-center gap-1 sm:gap-2 md:gap-4 lg:gap-6 flex-wrap items-center px-2">
          <TimeUnit value={timeLeft.days} label="DAYS" index={0} />
          <motion.span
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black self-center"
            style={{
              color: "#00ff88",
              textShadow: "0 0 10px rgba(0, 255, 136, 0.8)",
            }}
          >
            :
          </motion.span>
          <TimeUnit value={timeLeft.hours} label="HOURS" index={1} />
          <motion.span
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black self-center"
            style={{
              color: "#00ff88",
              textShadow: "0 0 10px rgba(0, 255, 136, 0.8)",
            }}
          >
            :
          </motion.span>
          <TimeUnit value={timeLeft.minutes} label="MINUTES" index={2} />
          <motion.span
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black self-center"
            style={{
              color: "#00ff88",
              textShadow: "0 0 10px rgba(0, 255, 136, 0.8)",
            }}
          >
            :
          </motion.span>
          <TimeUnit value={timeLeft.seconds} label="SECONDS" index={3} />
        </div>

        <motion.div
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="neon-btn px-6 sm:px-8 py-2 sm:py-3 md:py-3 rounded-none text-xs sm:text-sm md:text-base"
            whileHover={{
              boxShadow: "0 0 30px rgba(0, 255, 136, 0.8), inset 0 0 20px rgba(0, 255, 136, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            [ SET REMINDER ]
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
