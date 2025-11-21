"use client"

import { motion } from "framer-motion"

export default function EventCard({ event, index }) {
  const eventBgImages = {
    "CODE CLASH": "/code-clash-bg.jpg",
    "UI/UX WARFARE": "/ui-ux-bg.jpg",
    "HACKATHON RAID": "/hackathon-bg.jpg",
    "WEB WARRIOR": "/web-warrior-bg.jpg",
    "AI NEXUS": "/ai-nexus-bg.jpg",
    "CYBER SHIELD": "/cyber-shield-bg.jpg",
  }

  const bgImage = eventBgImages[event.name] || "/placeholder.svg?key=ge49n"

  return (
    <motion.div
      className="group relative overflow-hidden cursor-pointer h-full flex flex-col"
      initial={{ opacity: 0, y: 50, rotateY: 50 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ delay: index * 0.15, duration: 0.8, type: "spring" }}
      viewport={{ once: true }}
      whileHover={{
        y: -15,
        rotateY: -10,
        transition: { type: "spring", stiffness: 300 },
      }}
      style={{
        background: "linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 153, 255, 0.05))",
        border: "2px solid rgba(0, 255, 136, 0.3)",
        boxShadow: "0 0 20px rgba(0, 255, 136, 0.2), 0 0 40px rgba(0, 153, 255, 0.1)",
      }}
    >
      <div
        className="h-32 sm:h-40 md:h-48 relative overflow-hidden border-b-2 border-cyan-500/50"
        style={{
          background: `linear-gradient(135deg, rgba(0, 255, 136, 0.4), rgba(0, 153, 255, 0.2)), url('${bgImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-40"
          animate={{ rotate: 360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          style={{
            background:
              "conic-gradient(from 0deg, rgba(0, 255, 136, 0.6), rgba(0, 153, 255, 0.6), rgba(255, 0, 153, 0.4))",
          }}
        />

        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(0, 255, 136, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(0, 153, 255, 0.2) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(0, 255, 136, 0.2) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />

        <div className="absolute inset-0 flex items-center justify-center relative z-10">
          <motion.span
            className="text-4xl sm:text-5xl md:text-6xl"
            animate={{
              scale: [1, 1.15, 1],
              rotateZ: [0, 10, 0],
            }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
          >
            {event.icon}
          </motion.span>
        </div>
      </div>

      <div className="p-4 sm:p-5 md:p-6 flex-1 flex flex-col">
        <h3
          className="text-lg sm:text-xl md:text-2xl font-bold mb-2 group-hover:scale-110 transition-transform"
          style={{
            color: "#00ff88",
            textShadow: "0 0 15px rgba(0, 255, 136, 0.8)",
            fontFamily: "Orbitron, monospace",
          }}
        >
          &gt; {event.name}
        </h3>
        <p className="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed flex-1">{event.description}</p>

        <div className="space-y-1 sm:space-y-2 mb-4 text-xs sm:text-sm border-l-4 border-cyan-500/70 pl-4 py-2">
          <p className="text-slate-300">
            <span
              className="font-bold"
              style={{
                color: "#00ff88",
                fontFamily: "Orbitron, monospace",
                textShadow: "0 0 10px rgba(0, 255, 136, 0.6)",
              }}
            >
              [TYPE]
            </span>{" "}
            <span style={{ color: "rgba(0, 255, 136, 0.8)" }}>{event.category}</span>
          </p>
          <p className="text-slate-300">
            <span
              className="font-bold"
              style={{
                color: "#00ff88",
                fontFamily: "Orbitron, monospace",
                textShadow: "0 0 10px rgba(0, 255, 136, 0.6)",
              }}
            >
              [REWARD]
            </span>{" "}
            <span style={{ color: "#0099ff" }}>₹{event.prize}</span>
          </p>
        </div>

        <motion.button
          className="w-full py-2 sm:py-3 border-2 rounded-none text-xs sm:text-sm font-bold uppercase tracking-widest relative overflow-hidden group/btn"
          style={{
            color: "#00ff88",
            borderColor: "rgba(0, 255, 136, 0.6)",
            fontFamily: "Orbitron, monospace",
            background: "rgba(0, 255, 136, 0.05)",
            boxShadow: "0 0 15px rgba(0, 255, 136, 0.4), inset 0 0 10px rgba(0, 255, 136, 0.1)",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(0, 255, 136, 0.9), inset 0 0 15px rgba(0, 255, 136, 0.3)",
            background: "rgba(0, 255, 136, 0.15)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            initial={{ x: -100 }}
            whileHover={{ x: 100 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"
          />
          [ JOIN QUEST ]
        </motion.button>
      </div>

      <motion.div
        className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500"
        animate={{
          boxShadow: [
            "0 0 10px rgba(0, 255, 136, 0.5)",
            "0 0 20px rgba(0, 255, 136, 0.8)",
            "0 0 10px rgba(0, 255, 136, 0.5)",
          ],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />
      <motion.div
        className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500"
        animate={{
          boxShadow: [
            "0 0 10px rgba(0, 153, 255, 0.5)",
            "0 0 20px rgba(0, 153, 255, 0.8)",
            "0 0 10px rgba(0, 153, 255, 0.5)",
          ],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.3 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-green-500"
        animate={{
          boxShadow: [
            "0 0 10px rgba(0, 255, 136, 0.5)",
            "0 0 20px rgba(0, 255, 136, 0.8)",
            "0 0 10px rgba(0, 255, 136, 0.5)",
          ],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.6 }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-green-500"
        animate={{
          boxShadow: [
            "0 0 10px rgba(255, 0, 153, 0.5)",
            "0 0 20px rgba(255, 0, 153, 0.8)",
            "0 0 10px rgba(255, 0, 153, 0.5)",
          ],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 0.9 }}
      />
    </motion.div>
  )
}
