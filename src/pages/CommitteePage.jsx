"use client"

import { useContext, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"

const committeeData = [
  {
    name: "Technical Committee",
    code: "TECH_OPS",
    icon: "⚡",
    level: 99,
    description: "Core system architects and technical specialists",
    members: [
      "Dr. Arun Solanki, HoD-CSE, SoICT, GBU",
      "Dr. Neeta Singh, HoD-IT, SoICT, GBU",
      "Dr. Anurag Singh Baghel, SoICT, GBU",
      "Dr. Amit Kumar Awasthi, SoVSAS, GBU",
      "Dr. Aarti Gautam Dinker, SoICT, GBU",
      "Dr. Raju Pal, SoICT, GBU",
      "Dr. Shiraz Khurana, SoICT, GBU",
      "Dr. Akash Kumar, SoICT, GBU",
      "Dr. Maneet Singh, SoICT, GBU",
      "Dr. Nitesh Singh Bhati, SoICT, GBU",
      "Dr. Rakesh Kumar (RKY), SoICT, GBU",
      "Dr. Rakesh Kumar, SoICT, GBU",
      "Dr. Gaurav Kumar, SoICT, GBU",
      "Dr. Vivek Chaudhary, SoICT, GBU",
      "Dr. Mangal Das, SoICT, GBU",
      "Mr. Kartikeya Tiwari, SoICT, GBU",
    ],
  },
  {
    name: "IT Support Committee",
    code: "SYS_ADMIN",
    icon: "🖥️",
    level: 95,
    description: "Infrastructure guardians and network defenders",
    members: [
      "Dr. Sandeep Singh Rana, System Manager, GBU",
      "Mrs. Pallavi Upadhyay, Technical Superintendent, GBU",
      "Mr. Rajkumar, Technical Superintendent, GBU",
    ],
  },
  {
    name: "Cultural Committee",
    code: "CULT_OPS",
    icon: "🎭",
    level: 88,
    description: "Creative directors and experience designers",
    members: [
      "Dr. Anand Pratap Singh, SoHSS, GBU",
      "Dr. Kavita Singh, SoM, GBU",
      "Dr. Mamta Sharma, SoLJG, GBU",
      "Dr. Bipasha Some Gune, SoHSS, GBU",
      "Dr. Samar Raqshin, SoM, GBU",
      "Dr. Shiraz Khurana, SoICT, GBU",
    ],
  },
  {
    name: "Advisory Committee",
    code: "COUNCIL",
    icon: "👁️",
    level: 100,
    description: "Strategic advisors and wisdom keepers",
    members: [
      "Prof. Chander Kumar Singh, Director Works, GBU",
      "Dr. Sushil Kumar, SoVSAS, GBU",
      "Dr. M.A. Ansari, SoE, GBU",
      "Dr. Rakesh Kumar Srivastava, SoM, GBU",
    ],
  },
  {
    name: "Media And Publicity Committee",
    code: "BROADCAST",
    icon: "📡",
    level: 92,
    description: "Signal operators and narrative architects",
    members: [
      "Dr. Renu Yadav, SoHSS, GBU",
      "Dr. Rakesh Kumar, SoICT, GBU",
      "Dr. Riya Raj, SoHSS, GBU",
      "Dr. Vineet Kumar, SoHSS, GBU",
    ],
  },
  {
    name: "Logistics And Support Committee",
    code: "SUPPLY_NET",
    icon: "🔧",
    level: 90,
    description: "Resource coordinators and field operatives",
    members: [
      "Dr. Pradeep Tomar, SoICT, GBU",
      "Dr. Nidhi Singh, SoE, GBU",
      "Dr. Vivek Chaudhary, SoICT, GBU",
      "Dr. Raju Pal, SoICT, GBU",
    ],
  },
  {
    name: "Discipline Committee",
    code: "ENFORCERS",
    icon: "🛡️",
    level: 97,
    description: "Order keepers and protocol enforcers",
    members: [
      "Dr. Vikrant Nain, SoBT, GBU",
      "Dr. Vidushi Sharma, SoICT, GBU",
      "Dr. Vikram Karuna, SoLJG, GBU",
      "Dr. Rama Sharma, SoLJG, GBU",
      "Dr. Arun Solanki, HoD-CSE, SoICT, GBU",
      "Dr. Neeta Singh, HoD-IT, SoICT, GBU",
      "Dr. Anurag Singh Baghel, SoICT, GBU",
      "Dr. Amit Kumar Awasthi, SoVSAS, GBU",
      "Dr. Aarti Gautam Dinker, SoICT, GBU",
      "Dr. Raju Pal, SoICT, GBU",
      "Dr. Shiraz Khurana, SoICT, GBU",
      "Dr. Akash Kumar, SoICT, GBU",
      "Dr. Maneet Singh, SoICT, GBU",
      "Dr. Nitesh Singh Bhati, SoICT, GBU",
      "Dr. Rakesh Kumar (RKY), SoICT, GBU",
      "Dr. Rakesh Kumar, SoICT, GBU",
      "Dr. Gaurav Kumar, SoICT, GBU",
      "Dr. Vivek Chaudhary, SoICT, GBU",
      "Dr. Mangal Das, SoICT, GBU",
      "Mr. Kartikeya Tiwari, SoICT, GBU",
    ],
  },
]

// Terminal typing effect component
function TerminalText({ text, delay = 0 }) {
  const [displayText, setDisplayText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1))
          i++
        } else {
          clearInterval(interval)
          setTimeout(() => setShowCursor(false), 500)
        }
      }, 30)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timeout)
  }, [text, delay])

  return (
    <span>
      {displayText}
      {showCursor && <span className="animate-pulse">▊</span>}
    </span>
  )
}

// Scanline overlay component
function Scanlines() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-50"
      style={{
        background: `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 2px,
          rgba(0, 0, 0, 0.03) 2px,
          rgba(0, 0, 0, 0.03) 4px
        )`,
      }}
    />
  )
}

export default function CommitteePage() {
  const { isDark } = useContext(ThemeContext)
  const [activeCommittee, setActiveCommittee] = useState(null)
  const [bootSequence, setBootSequence] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)

  const primaryColor = isDark ? "#00ff88" : "#00d9ff"
  const secondaryColor = isDark ? "#ff00ff" : "#ff006e"
  const tertiaryColor = isDark ? "#00ffff" : "#b537f2"

  // Boot sequence animation
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setBootSequence(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)
    return () => clearInterval(interval)
  }, [])

  if (bootSequence) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center p-4"
        style={{
          background: isDark
            ? "radial-gradient(ellipse at center, #0a1628 0%, #000000 100%)"
            : "radial-gradient(ellipse at center, #0d1b2a 0%, #000000 100%)",
        }}
      >
        <Scanlines />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center font-mono"
          style={{ color: primaryColor }}
        >
          <pre className="text-xs sm:text-sm mb-8 opacity-70">
            {`
   ██████╗ ██████╗ ███╗   ███╗███╗   ███╗██╗████████╗████████╗███████╗███████╗
  ██╔════╝██╔═══██╗████╗ ████║████╗ ████║██║╚══██╔══╝╚══██╔══╝██╔════╝██╔════╝
  ██║     ██║   ██║██╔████╔██║██╔████╔██║██║   ██║      ██║   █████╗  █████╗  
  ██║     ██║   ██║██║╚██╔╝██║██║╚██╔╝██║██║   ██║      ██║   ██╔══╝  ██╔══╝  
  ╚██████╗╚██████╔╝██║ ╚═╝ ██║██║ ╚═╝ ██║██║   ██║      ██║   ███████╗███████╗
   ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚═╝   ╚═╝      ╚═╝   ╚══════╝╚══════╝
            `}
          </pre>
          <div className="space-y-2 text-left max-w-md mx-auto text-sm">
            <p>&gt; INITIALIZING COMMITTEE DATABASE...</p>
            <p>&gt; DECRYPTING PERSONNEL FILES...</p>
            <p>&gt; LOADING GUILD REGISTRY...</p>
          </div>
          <div className="mt-8 w-64 mx-auto">
            <div
              className="h-2 rounded-full overflow-hidden"
              style={{ background: "rgba(255,255,255,0.1)", border: `1px solid ${primaryColor}40` }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
                  boxShadow: `0 0 20px ${primaryColor}`,
                }}
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(loadingProgress, 100)}%` }}
              />
            </div>
            <p className="mt-2 text-xs">[{Math.min(Math.floor(loadingProgress), 100)}%] LOADING...</p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen py-20 px-4 md:px-6 relative"
      style={{
        background: isDark
          ? "radial-gradient(ellipse at top, #0a1628 0%, #000000 50%, #0a0a1a 100%)"
          : "radial-gradient(ellipse at top, #0d1b2a 0%, #000000 50%, #0a0a1a 100%)",
      }}
    >
      <Scanlines />

      {/* Animated grid background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(${primaryColor}20 1px, transparent 1px),
            linear-gradient(90deg, ${primaryColor}20 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-lg transition-all duration-300 group"
            style={{
              background: `linear-gradient(135deg, ${primaryColor}15, ${secondaryColor}10)`,
              border: `2px solid ${primaryColor}50`,
              fontFamily: "Orbitron, monospace",
              color: primaryColor,
            }}
          >
            <span className="transform group-hover:-translate-x-1 transition-transform">&lt;</span>
            <span className="text-sm tracking-widest">RETURN_TO_MAINFRAME</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div
            className="inline-block px-6 py-2 mb-6 rounded-full text-xs tracking-widest"
            style={{
              background: `${secondaryColor}20`,
              border: `1px solid ${secondaryColor}50`,
              color: secondaryColor,
              fontFamily: "Orbitron, monospace",
            }}
          >
            ◈ CLASSIFIED PERSONNEL DATABASE ◈
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-black mb-4"
            style={{
              fontFamily: "Orbitron, monospace",
              letterSpacing: "0.1em",
              background: `linear-gradient(135deg, ${primaryColor}, ${tertiaryColor}, ${secondaryColor})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: `drop-shadow(0 0 30px ${primaryColor}60)`,
            }}
          >
            GUILD REGISTRY
          </h1>

          <p className="text-sm sm:text-base md:text-lg font-mono" style={{ color: `${primaryColor}90` }}>
            <TerminalText text="&gt; ACCESS LEVEL: MAXIMUM // OPERATIVES: ACTIVE //" delay={500} />
          </p>

          {/* Stats bar */}
          <div className="flex justify-center gap-8 mt-8 flex-wrap">
            {[
              { label: "GUILDS", value: committeeData.length },
              { label: "OPERATIVES", value: committeeData.reduce((acc, c) => acc + c.members.length, 0) },
              { label: "STATUS", value: "ONLINE" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="text-center px-4"
              >
                <div
                  className="text-2xl md:text-3xl font-black"
                  style={{ color: primaryColor, fontFamily: "Orbitron, monospace" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs tracking-widest opacity-60" style={{ color: primaryColor }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Committees Grid */}
        <div className="grid gap-6 md:gap-8">
          {committeeData.map((committee, index) => (
            <motion.div
              key={committee.code}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Committee Card */}
              <div
                className="relative rounded-xl overflow-hidden cursor-pointer transition-all duration-500"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor}08, ${secondaryColor}05, transparent)`,
                  border: `2px solid ${activeCommittee === index ? primaryColor : `${primaryColor}30`}`,
                  boxShadow:
                    activeCommittee === index ? `0 0 40px ${primaryColor}30, inset 0 0 60px ${primaryColor}05` : "none",
                }}
                onClick={() => setActiveCommittee(activeCommittee === index ? null : index)}
              >
                {/* Glitch overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${primaryColor}10, transparent)`,
                    animation: "glitch-slide 0.5s ease-in-out",
                  }}
                />

                {/* Header */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <div
                        className="w-16 h-16 rounded-lg flex items-center justify-center text-3xl"
                        style={{
                          background: `linear-gradient(135deg, ${primaryColor}20, ${secondaryColor}10)`,
                          border: `2px solid ${primaryColor}50`,
                          boxShadow: `0 0 20px ${primaryColor}30`,
                        }}
                      >
                        {committee.icon}
                      </div>

                      <div>
                        <div
                          className="text-xs tracking-widest mb-1 opacity-60"
                          style={{ color: secondaryColor, fontFamily: "monospace" }}
                        >
                          [{committee.code}]
                        </div>
                        <h2
                          className="text-xl sm:text-2xl md:text-3xl font-black"
                          style={{
                            color: primaryColor,
                            fontFamily: "Orbitron, monospace",
                            textShadow: `0 0 20px ${primaryColor}50`,
                          }}
                        >
                          {committee.name.toUpperCase()}
                        </h2>
                        <p className="text-sm opacity-70 mt-1" style={{ color: `${primaryColor}90` }}>
                          {committee.description}
                        </p>
                      </div>
                    </div>

                    {/* Level Badge */}
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-xs opacity-60" style={{ color: tertiaryColor }}>
                          GUILD LEVEL
                        </div>
                        <div
                          className="text-3xl font-black"
                          style={{
                            color: tertiaryColor,
                            fontFamily: "Orbitron, monospace",
                            textShadow: `0 0 15px ${tertiaryColor}60`,
                          }}
                        >
                          {committee.level}
                        </div>
                      </div>

                      {/* Expand indicator */}
                      <motion.div
                        animate={{ rotate: activeCommittee === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-10 h-10 rounded-full flex items-center justify-center"
                        style={{
                          background: `${primaryColor}20`,
                          border: `2px solid ${primaryColor}50`,
                          color: primaryColor,
                        }}
                      >
                        ▼
                      </motion.div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-4">
                    <div className="flex justify-between text-xs mb-1" style={{ color: `${primaryColor}70` }}>
                      <span>OPERATIVES ASSIGNED</span>
                      <span>{committee.members.length}</span>
                    </div>
                    <div className="h-1 rounded-full overflow-hidden" style={{ background: `${primaryColor}20` }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
                          boxShadow: `0 0 10px ${primaryColor}`,
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${(committee.members.length / 20) * 100}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Members Panel */}
                <AnimatePresence>
                  {activeCommittee === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 pt-0" style={{ borderTop: `1px solid ${primaryColor}20` }}>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4">
                          {committee.members.map((member, memberIndex) => (
                            <motion.div
                              key={memberIndex}
                              initial={{ opacity: 0, scale: 0.8, y: 20 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: memberIndex * 0.03 }}
                              className="group relative p-4 rounded-lg transition-all duration-300 hover:scale-[1.02]"
                              style={{
                                background: `linear-gradient(135deg, ${primaryColor}10, transparent)`,
                                border: `1px solid ${primaryColor}25`,
                              }}
                            >
                              {/* Member rank indicator */}
                              <div
                                className="absolute top-2 right-2 w-2 h-2 rounded-full animate-pulse"
                                style={{
                                  background: primaryColor,
                                  boxShadow: `0 0 10px ${primaryColor}`,
                                }}
                              />

                              <div
                                className="text-xs tracking-wider mb-1 opacity-50"
                                style={{ color: secondaryColor, fontFamily: "monospace" }}
                              >
                                ID:{String(memberIndex + 1).padStart(3, "0")}
                              </div>
                              <p
                                className="text-sm leading-relaxed"
                                style={{ color: isDark ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.9)" }}
                              >
                                {member}
                              </p>

                              {/* Hover glow */}
                              <div
                                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                                style={{
                                  boxShadow: `inset 0 0 20px ${primaryColor}20, 0 0 15px ${primaryColor}10`,
                                }}
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer terminal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 text-center font-mono text-xs"
          style={{ color: `${primaryColor}50` }}
        >
          <p>◈ END OF PERSONNEL DATABASE ◈</p>
          <p className="mt-2">SESSION_ID: IGN2025-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
        </motion.div>
      </div>

      <style>{`
        @keyframes glitch-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  )
}
