"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"

export default function Hero() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const containerRef = useRef(null)
  const [level, setLevel] = useState(1)
  const [xp, setXp] = useState(65)

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 100, scale: 0.5, rotationX: 90 },
      { opacity: 1, y: 0, scale: 1, rotationX: 0, duration: 1.8, ease: "elastic.out(1, 0.5)" },
    )

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50, letterSpacing: "0.3em" },
      { opacity: 1, y: 0, letterSpacing: "0.08em", duration: 1.2, delay: 0.4, ease: "power3.out" },
    )

    const glitchTl = gsap.timeline({ repeat: -1, repeatDelay: 4 })
    glitchTl
      .to(titleRef.current, {
        skewX: 3,
        duration: 0.08,
        ease: "power1.inOut",
      })
      .to(titleRef.current, {
        skewX: -3,
        duration: 0.08,
      })
      .to(titleRef.current, {
        skewX: 0,
        duration: 0.08,
      })
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, type: "spring", stiffness: 100 },
    },
  }

  return (
    <section
      // HEIGHT INCREASED: Changed min-h-[90vh] to min-h-[95vh] for a slight height increase
      className="min-h-[95vh] relative overflow-hidden flex items-center justify-center px-4 sm:px-6 md:px-8"
      style={{ backgroundColor: "#0a0e1a" }}
    >
      <div className="absolute inset-0 opacity-20 cyber-grid" />
      <div className="absolute inset-0 particle-effect opacity-50" />

      {/* Floating element positions remain unchanged or based on section edges */}
      <motion.div
        className="absolute top-10 sm:top-16 md:top-20 right-10 sm:right-16 md:right-20 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 rounded-full blur-3xl"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 80, -60, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          background: "linear-gradient(135deg, rgba(201, 169, 97, 0.4), rgba(192, 192, 192, 0.25))",
          filter: "drop-shadow(0 0 40px rgba(201, 169, 97, 0.5))",
        }}
      />

      <motion.div
        className="absolute bottom-10 sm:bottom-16 md:bottom-20 left-10 sm:left-16 md:left-20 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 rounded-full blur-3xl hidden sm:block"
        animate={{
          x: [0, -100, 50, 0],
          y: [0, -80, 60, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 0.5,
        }}
        style={{
          background: "linear-gradient(135deg, rgba(169, 145, 102, 0.35), rgba(201, 169, 97, 0.2))",
          filter: "drop-shadow(0 0 40px rgba(169, 145, 102, 0.4))",
        }}
      />

      <motion.div
        className="absolute top-1/3 left-1/4 w-40 sm:w-52 md:w-64 lg:w-80 h-40 sm:h-52 md:h-64 lg:h-80 rounded-full blur-3xl hidden md:block"
        animate={{
          x: [0, 50, -80, 0],
          y: [0, -60, 40, 0],
          scale: [0.8, 1, 0.9, 0.8],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 11,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          background: "linear-gradient(135deg, rgba(192, 192, 192, 0.25), rgba(169, 145, 102, 0.15))",
          filter: "drop-shadow(0 0 30px rgba(192, 192, 192, 0.3))",
        }}
      />

      {/* Adjusted top margin on content wrapper for better spacing */}
      <div className="relative z-10 w-full max-w-5xl **mt-20 sm:mt-24 md:mt-28**">
        
        {/* Adjusted mb- between HUD elements and XP Bar */}
        <div className="mb-6 md:mb-8 flex justify-between items-center px-4 sm:px-6 md:px-0 flex-wrap gap-2">
          <motion.div
            className="hud-frame px-2 sm:px-3 md:px-4 py-1 sm:py-2"
            animate={{
              boxShadow: [
                "0 0 15px rgba(201, 169, 97, 0.5)",
                "0 0 30px rgba(201, 169, 97, 0.9)",
                "0 0 15px rgba(201, 169, 97, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <p className="text-xs sm:text-sm font-bold" style={{ color: "#c9a961", fontFamily: "Orbitron, monospace" }}>
              LEVEL {level}
            </p>
          </motion.div>

          <motion.div
            className="hud-frame px-2 sm:px-3 md:px-4 py-1 sm:py-2"
            animate={{
              boxShadow: [
                "0 0 15px rgba(201, 169, 97, 0.5)",
                "0 0 30px rgba(201, 169, 97, 0.9)",
                "0 0 15px rgba(201, 169, 97, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
          >
            <p className="text-xs sm:text-sm font-bold" style={{ color: "#a89166", fontFamily: "Orbitron, monospace" }}>
              RANK S
            </p>
          </motion.div>

          <motion.div
            className="hud-frame px-2 sm:px-3 md:px-4 py-1 sm:py-2"
            animate={{
              boxShadow: [
                "0 0 15px rgba(201, 169, 97, 0.5)",
                "0 0 30px rgba(201, 169, 97, 0.9)",
                "0 0 15px rgba(201, 169, 97, 0.5)",
              ],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
          >
            <p className="text-xs sm:text-sm font-bold" style={{ color: "#c0c0c0", fontFamily: "Orbitron, monospace" }}>
              POWER 9K
            </p>
          </motion.div>
        </div>

        {/* Adjusted mb- on XP Bar */}
        <motion.div
          className="mb-8 md:mb-10 px-4 sm:px-6 md:px-0"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
        >
          <div className="flex justify-between items-center mb-1">
            <span
              className="text-xs sm:text-sm font-bold"
              style={{ color: "#c9a961", fontFamily: "Orbitron, monospace" }}
            >
              XP BAR
            </span>
            <span
              className="text-xs sm:text-sm font-bold"
              style={{ color: "#a89166", fontFamily: "Orbitron, monospace" }}
            >
              {xp}%
            </span>
          </div>
          <div className="h-2 sm:h-3 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
            <motion.div
              className="h-full bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600"
              animate={{ width: `${xp}%` }}
              transition={{ duration: 1.5 }}
              style={{
                boxShadow: "0 0 20px rgba(201, 169, 97, 0.8)",
              }}
            />
          </div>
        </motion.div>

        {/* Adjusted mb- on title section */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-4 md:mb-6"
        >
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-2 sm:mb-3" // Adjusted mb- on h1
            style={{
              background: "linear-gradient(90deg, #c9a961 0%, #a89166 25%, #c0c0c0 50%, #a89166 75%, #c9a961 100%)",
              backgroundSize: "300% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradient-shift 5s ease infinite",
              filter: "drop-shadow(0 0 25px rgba(201, 169, 97, 0.7)) drop-shadow(0 0 50px rgba(169, 145, 102, 0.5))",
              fontFamily: "Orbitron, monospace",
              letterSpacing: "0.12em",
              textShadow: "0 0 60px rgba(201, 169, 97, 0.4), 0 0 100px rgba(169, 145, 102, 0.25)",
              lineHeight: "1.1", // Slightly increased line height from 1.0
            }}
          >
            igNITion
          </h1>

          <motion.div
            className="h-1 w-32 sm:w-40 md:w-48 lg:w-56 mx-auto bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 rounded-full"
            animate={{
              boxShadow: [
                "0 0 15px rgba(201, 169, 97, 0.6)",
                "0 0 35px rgba(201, 169, 97, 0.95)",
                "0 0 15px rgba(201, 169, 97, 0.6)",
              ],
              scaleX: [0.9, 1.15, 0.9],
            }}
            transition={{ duration: 2.8, repeat: Number.POSITIVE_INFINITY }}
          />
        </motion.div>

        <motion.p
          ref={subtitleRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1.2 }}
          // Adjusted margins (mb- and mt-)
          className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-5 sm:mb-6 md:mb-8 mt-3 sm:mt-4 md:mt-6 px-2"
          style={{
            color: "#c9a961",
            textShadow: "0 0 25px rgba(201, 169, 97, 0.8), 0 0 50px rgba(169, 145, 102, 0.4)",
            fontFamily: "Orbitron, monospace",
            letterSpacing: "0.1em",
          }}
        >
          &gt; NEURAL PROTOCOL INITIATED &lt;
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.2 }}
          // Adjusted bottom margin
          className="text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl md:max-w-3xl mx-auto leading-relaxed px-2 mb-6 md:mb-10"
          style={{
            color: "rgba(201, 169, 97, 0.85)",
            textShadow: "0 0 15px rgba(201, 169, 97, 0.6)",
          }}
        >
          ENTER THE DIGITAL ARENA | Gautam Buddha University presents the ultimate gaming-tech experience | COMPETE •
          INNOVATE • DOMINATE
        </motion.p>

        <motion.div
          className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-6 justify-center flex-wrap px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2 }}
          variants={containerVariants}
        >
          <motion.button
            // Adjusted py on buttons
            className="neon-btn px-3 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 rounded-none text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-wider"
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              boxShadow:
                "0 0 45px rgba(201, 169, 97, 1), inset 0 0 25px rgba(201, 169, 97, 0.6), 0 0 70px rgba(169, 145, 102, 0.5)",
              y: -8,
            }}
            whileTap={{ scale: 0.88 }}
          >
            [ ENTER ARENA ]
          </motion.button>

          <motion.button
            // Adjusted py on buttons
            className="neon-btn px-3 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 lg:py-6 rounded-none text-xs sm:text-sm md:text-base lg:text-lg font-bold tracking-wider"
            variants={itemVariants}
            style={{
              color: "#a89166",
              borderColor: "rgba(168, 145, 102, 0.7)",
              boxShadow: "0 0 30px rgba(168, 145, 102, 0.5), inset 0 0 15px rgba(168, 145, 102, 0.2)",
            }}
            whileHover={{
              scale: 1.1,
              boxShadow:
                "0 0 45px rgba(168, 145, 102, 0.95), inset 0 0 25px rgba(168, 145, 102, 0.6), 0 0 70px rgba(201, 169, 97, 0.5)",
              y: -8,
            }}
            whileTap={{ scale: 0.88 }}
          >
            [ EXPLORE QUESTS ]
          </motion.button>
        </motion.div>

        {/* Adjusted top margin on final element */}
        <motion.div
          className="mt-8 sm:mt-10 md:mt-12 lg:mt-16 text-xs sm:text-sm md:text-base font-bold"
          animate={{
            y: [0, 18, 0],
            opacity: [0.5, 1, 0.5],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
          style={{
            color: "#c9a961",
            textShadow: "0 0 20px rgba(201, 169, 97, 0.9)",
            fontFamily: "Orbitron, monospace",
            letterSpacing: "0.08em",
          }}
        >
          ↓ INITIALIZE SEQUENCE ↓
        </motion.div>
      </div>
    </section>
  )
}