"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { motion } from "framer-motion"

export default function Loader({ onLoadComplete }) {
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const progressRef = useRef(null)
  const scanlineRef = useRef(null)
  const coresRef = useRef([])

  useEffect(() => {
    const container = containerRef.current
    const text = textRef.current
    const progress = progressRef.current
    const scanline = scanlineRef.current

    const tl = gsap.timeline()

    tl.to(container, {
      duration: 0.3,
      opacity: 1,
    })
      .to(
        text,
        {
          duration: 0.8,
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          ease: "back.out",
        },
        0.05,
      )
      .to(
        progress,
        {
          duration: 1.8,
          width: "100%",
          ease: "power2.inOut",
        },
        0,
      )
      .to(
        scanline,
        {
          duration: 2.2,
          height: "100%",
          ease: "power1.inOut",
        },
        0,
      )
      .to(container, {
        duration: 0.6,
        opacity: 0,
        delay: 0.2,
        onComplete: () => {
          onLoadComplete()
        },
      })

    const glitchTl = gsap.timeline({ repeat: -1, repeatDelay: 1.2 })
    glitchTl
      .to(text, {
        skewX: 4,
        scaleY: 0.98,
        duration: 0.05,
        ease: "power1.inOut",
      })
      .to(text, {
        skewX: -4,
        scaleY: 1.02,
        duration: 0.05,
      })
      .to(text, {
        skewX: 0,
        scaleY: 1,
        duration: 0.04,
      })

    coresRef.current.forEach((core, index) => {
      const delay = index * 0.15
      gsap.to(core, {
        duration: 2.5 + index * 0.5,
        y: gsap.utils.random(-20, 20),
        x: gsap.utils.random(-20, 20),
        rotation: 360,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay,
      })
    })
  }, [onLoadComplete])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-gradient-to-br from-[#0f0620] via-[#1a0d3e] to-[#0d0a2e] flex items-center justify-center z-50 opacity-0 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-40 cyber-grid" />

      <motion.div
        ref={(el) => (coresRef.current[0] = el)}
        className="absolute top-1/4 right-1/3 w-32 sm:w-48 md:w-64 lg:w-80 h-32 sm:h-48 md:h-64 lg:h-80 rounded-full blur-3xl pointer-events-none"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{
          scale: [0.6, 1.2, 0.6],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        style={{
          background: "linear-gradient(135deg, rgba(0, 217, 255, 0.5), rgba(64, 0, 128, 0.2))",
          filter: "drop-shadow(0 0 30px rgba(0, 217, 255, 0.6))",
        }}
      />

      <motion.div
        ref={(el) => (coresRef.current[1] = el)}
        className="absolute bottom-1/4 left-1/3 w-24 sm:w-40 md:w-56 lg:w-64 h-24 sm:h-40 md:h-56 lg:h-64 rounded-full blur-3xl pointer-events-none"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{
          scale: [1.2, 0.6, 1.2],
          opacity: [0.8, 0.2, 0.8],
        }}
        transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
        style={{
          background: "linear-gradient(135deg, rgba(0, 179, 255, 0.5), rgba(0, 217, 255, 0.3))",
          filter: "drop-shadow(0 0 40px rgba(0, 217, 255, 0.6))",
        }}
      />

      <div className="text-center relative z-10 px-4">
        <div ref={textRef} className="mb-8 sm:mb-12 opacity-0 translate-y-12">
          <motion.div
            className="mb-8 sm:mb-12 space-y-2"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.p
              className="text-xs sm:text-sm md:text-base uppercase tracking-[0.3em]"
              style={{ color: "rgba(0, 217, 255, 0.8)" }}
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 0.4, repeat: Number.POSITIVE_INFINITY }}
            >
              ▶ INITIALIZING
            </motion.p>
          </motion.div>

          <motion.div
            animate={{
              textShadow: [
                "0 0 15px rgba(0, 217, 255, 0.4), 0 0 30px rgba(0, 217, 255, 0.3)",
                "0 0 30px rgba(0, 217, 255, 0.8), 0 0 60px rgba(0, 217, 255, 0.6)",
                "0 0 15px rgba(0, 217, 255, 0.4), 0 0 30px rgba(0, 217, 255, 0.3)",
              ],
              scale: [1, 1.01, 1],
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-6 tracking-widest"
              style={{
                color: "#00d9ff",
                fontFamily: "Orbitron, monospace",
                letterSpacing: "0.2em",
              }}
            >
              igNITion
            </h1>
          </motion.div>
        </div>

        <div className="w-48 sm:w-64 md:w-80 mb-6 sm:mb-8">
          <div
            className="h-2 sm:h-3 rounded-sm overflow-hidden border-2 relative"
            style={{
              borderColor: "rgba(0, 217, 255, 0.8)",
              backgroundColor: "rgba(0, 217, 255, 0.1)",
              boxShadow: "inset 0 0 20px rgba(0, 217, 255, 0.3), 0 0 20px rgba(0, 217, 255, 0.3)",
            }}
          >
            <div
              ref={progressRef}
              className="h-full w-0 rounded-sm relative"
              style={{
                background: "linear-gradient(90deg, #00d9ff, #4000ff, #00b3ff, #4000ff, #00d9ff)",
                backgroundSize: "200% 100%",
                boxShadow: "0 0 30px rgba(0, 217, 255, 0.8), inset 0 0 15px rgba(0, 217, 255, 0.6)",
                animation: "gradient-shift 2s ease infinite",
              }}
            />
          </div>

          <motion.div
            className="mt-2 sm:mt-3 flex justify-between text-xs uppercase tracking-wider font-bold"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          >
            <span style={{ color: "rgba(0, 217, 255, 0.8)", textShadow: "0 0 8px rgba(0, 217, 255, 0.5)" }}>
              LOADING
            </span>
            <span style={{ color: "rgba(0, 217, 255, 0.8)", textShadow: "0 0 8px rgba(0, 217, 255, 0.5)" }}>100%</span>
          </motion.div>
        </div>

        <motion.p
          className="text-xs sm:text-sm md:text-base font-bold"
          animate={{
            opacity: [0.3, 1, 0.3],
            letterSpacing: ["0.1em", "0.2em", "0.1em"],
          }}
          transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
          style={{
            color: "#00d9ff",
            textShadow: "0 0 20px rgba(0, 217, 255, 0.8)",
            fontFamily: "Orbitron, monospace",
          }}
        >
          INITIALIZING SYSTEM...
        </motion.p>
      </div>

      <div
        ref={scanlineRef}
        className="absolute top-0 left-0 right-0 h-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent pointer-events-none"
        style={{
          animation: "scanline-move 8s linear infinite",
        }}
      />
    </div>
  )
}
