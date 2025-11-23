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

  const PRIMARY_COLOR = "#00E0FF"

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2026-04-10").getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const TimeUnit = ({ value, label, index }) => (
    <motion.div
      className="flex flex-col items-center gap-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="px-4 py-3 rounded border-2"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
        style={{
          borderColor: PRIMARY_COLOR,
          background: `${PRIMARY_COLOR}10`,
          boxShadow: `0 0 10px ${PRIMARY_COLOR}40`,
        }}
      >
        <span
          className="text-2xl md:text-3xl font-bold block"
          style={{
            color: PRIMARY_COLOR,
            textShadow: `0 0 10px ${PRIMARY_COLOR}`,
            fontFamily: "monospace",
          }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </motion.div>
      <span
        className="text-xs md:text-sm font-bold uppercase tracking-wider"
        style={{
          color: `${PRIMARY_COLOR}80`,
          fontFamily: "monospace",
        }}
      >
        {label}
      </span>
    </motion.div>
  )

  return (
    <section
      className="py-16 px-4 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${PRIMARY_COLOR}05, transparent)`,
        borderTop: `1px solid ${PRIMARY_COLOR}30`,
        borderBottom: `1px solid ${PRIMARY_COLOR}30`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-4xl md:text-5xl font-black mb-3"
            style={{
              color: PRIMARY_COLOR,
              textShadow: `0 0 20px ${PRIMARY_COLOR}80`,
              fontFamily: "monospace",
              letterSpacing: "2px",
            }}
          >
            &lt;&lt; MISSION TIMER &gt;&gt;
          </h2>
          <p
            className="text-sm md:text-base"
            style={{
              color: `${PRIMARY_COLOR}80`,
              fontFamily: "monospace",
            }}
          >
            IGNITION 2025 LAUNCH COUNTDOWN
          </p>
        </motion.div>

        <div className="flex justify-center items-center gap-3 md:gap-6 flex-wrap mb-10">
          <TimeUnit value={timeLeft.days} label="DAYS" index={0} />
          <motion.div
            className="text-3xl md:text-4xl font-black"
            style={{ color: PRIMARY_COLOR }}
          >
            :
          </motion.div>
          <TimeUnit value={timeLeft.hours} label="HOURS" index={1} />
          <motion.div
            className="text-3xl md:text-4xl font-black"
            style={{ color: PRIMARY_COLOR }}
          >
            :
          </motion.div>
          <TimeUnit value={timeLeft.minutes} label="MINUTES" index={2} />
          <motion.div
            className="text-3xl md:text-4xl font-black"
            style={{ color: PRIMARY_COLOR }}
          >
            :
          </motion.div>
          <TimeUnit value={timeLeft.seconds} label="SECONDS" index={3} />
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-8 py-3 font-bold uppercase text-sm md:text-base border-2 rounded"
            whileHover={{
              boxShadow: `0 0 20px ${PRIMARY_COLOR}`,
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              borderColor: PRIMARY_COLOR,
              color: PRIMARY_COLOR,
              background: `${PRIMARY_COLOR}15`,
              fontFamily: "monospace",
              letterSpacing: "1px",
            }}
          >
            &lt;&lt; SET REMINDER &gt;&gt;
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
