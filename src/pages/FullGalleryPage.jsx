"use client"

import { useContext, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { ThemeContext } from "../context/ThemeContext"

import img1 from "../assests/g1.jpg"
import img2 from "../assests/g2.jpg"
import img3 from "../assests/g3.jpg"
import img4 from "../assests/g4.jpg"
import img5 from "../assests/g5.jpg"
import img6 from "../assests/g6.jpg"
import img7 from "../assests/g7.jpg"
import img8 from "../assests/g9.jpg"
import img9 from "../assests/g9.jpg"
import img10 from "../assests/g10.jpg"
import img11 from "../assests/g11.jpg"
import img12 from "../assests/g12.jpg"

const allImages = [
  { id: 1, image: img1, code: "MEM_001", status: "DECRYPTED", rarity: "LEGENDARY" },
  { id: 2, image: img2, code: "MEM_002", status: "DECRYPTED", rarity: "EPIC" },
  { id: 3, image: img3, code: "MEM_003", status: "DECRYPTED", rarity: "RARE" },
  { id: 4, image: img4, code: "MEM_004", status: "DECRYPTED", rarity: "EPIC" },
  { id: 5, image: img5, code: "MEM_005", status: "DECRYPTED", rarity: "LEGENDARY" },
  { id: 6, image: img6, code: "MEM_006", status: "DECRYPTED", rarity: "RARE" },
  { id: 7, image: img7, code: "MEM_007", status: "DECRYPTED", rarity: "COMMON" },
  { id: 8, image: img8, code: "MEM_008", status: "DECRYPTED", rarity: "EPIC" },
  { id: 9, image: img9, code: "MEM_009", status: "DECRYPTED", rarity: "RARE" },
  { id: 10, image: img10, code: "MEM_010", status: "DECRYPTED", rarity: "LEGENDARY" },
  { id: 11, image: img11, code: "MEM_011", status: "DECRYPTED", rarity: "COMMON" },
  { id: 12, image: img12, code: "MEM_012", status: "DECRYPTED", rarity: "EPIC" },
]

const rarityColors = {
  LEGENDARY: { color: "#ffd700", glow: "rgba(255, 215, 0, 0.6)" },
  EPIC: { color: "#b537f2", glow: "rgba(181, 55, 242, 0.6)" },
  RARE: { color: "#00d9ff", glow: "rgba(0, 217, 255, 0.6)" },
  COMMON: { color: "#00ff88", glow: "rgba(0, 255, 136, 0.6)" },
}

// Scanline overlay
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

// Glitch text effect
function GlitchText({ text, className, style }) {
  return (
    <span className={`relative inline-block ${className}`} style={style}>
      <span className="relative z-10">{text}</span>
      <span
        className="absolute top-0 left-0 opacity-80"
        style={{
          color: "#ff006e",
          clipPath: "inset(10% 0 60% 0)",
          transform: "translateX(-2px)",
          animation: "glitch-1 2s infinite linear alternate-reverse",
        }}
      >
        {text}
      </span>
      <span
        className="absolute top-0 left-0 opacity-80"
        style={{
          color: "#00d9ff",
          clipPath: "inset(40% 0 20% 0)",
          transform: "translateX(2px)",
          animation: "glitch-2 3s infinite linear alternate-reverse",
        }}
      >
        {text}
      </span>
    </span>
  )
}

export default function FullGalleryPage() {
  const { isDark } = useContext(ThemeContext)
  const [selectedImage, setSelectedImage] = useState(null)
  const [bootSequence, setBootSequence] = useState(true)
  const [decryptProgress, setDecryptProgress] = useState(0)
  const [unlockedImages, setUnlockedImages] = useState([])
  const [filter, setFilter] = useState("ALL")

  const primaryColor = isDark ? "#00ff88" : "#00d9ff"
  const secondaryColor = isDark ? "#ff00ff" : "#ff006e"

  // Boot sequence
  useEffect(() => {
    const interval = setInterval(() => {
      setDecryptProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setBootSequence(false), 300)
          return 100
        }
        return prev + Math.random() * 20
      })
    }, 80)
    return () => clearInterval(interval)
  }, [])

  // Unlock images sequentially
  useEffect(() => {
    if (!bootSequence) {
      allImages.forEach((img, i) => {
        setTimeout(() => {
          setUnlockedImages((prev) => [...prev, img.id])
        }, i * 100)
      })
    }
  }, [bootSequence])

  // ESC to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedImage(null)
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  const filteredImages = filter === "ALL" ? allImages : allImages.filter((img) => img.rarity === filter)

  if (bootSequence) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center p-4"
        style={{
          background: "radial-gradient(ellipse at center, #0a1628 0%, #000000 100%)",
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
  ██████╗  █████╗ ████████╗ █████╗     ██╗   ██╗ █████╗ ██╗   ██╗██╗  ████████╗
  ██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗    ██║   ██║██╔══██╗██║   ██║██║  ╚══██╔══╝
  ██║  ██║███████║   ██║   ███████║    ██║   ██║███████║██║   ██║██║     ██║   
  ██║  ██║██╔══██║   ██║   ██╔══██║    ╚██╗ ██╔╝██╔══██║██║   ██║██║     ██║   
  ██████╔╝██║  ██║   ██║   ██║  ██║     ╚████╔╝ ██║  ██║╚██████╔╝███████╗██║   
  ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝      ╚═══╝  ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝   
            `}
          </pre>
          <div className="space-y-2 text-left max-w-md mx-auto text-sm">
            <p className="flex items-center gap-2">
              <span className="animate-pulse">▶</span> ACCESSING MEMORY VAULT...
            </p>
            <p className="flex items-center gap-2">
              <span className="animate-pulse">▶</span> BYPASSING ENCRYPTION PROTOCOLS...
            </p>
            <p className="flex items-center gap-2">
              <span className="animate-pulse">▶</span> DECRYPTING DATA FRAGMENTS...
            </p>
          </div>
          <div className="mt-8 w-72 mx-auto">
            <div
              className="h-3 rounded-full overflow-hidden relative"
              style={{ background: "rgba(255,255,255,0.1)", border: `2px solid ${primaryColor}40` }}
            >
              <motion.div
                className="h-full rounded-full relative"
                style={{
                  background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor}, ${primaryColor})`,
                  backgroundSize: "200% 100%",
                  animation: "gradient-shift 1s linear infinite",
                  boxShadow: `0 0 20px ${primaryColor}`,
                }}
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(decryptProgress, 100)}%` }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs">
              <span>DECRYPTING...</span>
              <span>{Math.min(Math.floor(decryptProgress), 100)}%</span>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen py-20 px-4 md:px-6 relative"
      style={{
        background: "radial-gradient(ellipse at top, #0a1628 0%, #000000 50%, #0a0a1a 100%)",
      }}
    >
      <Scanlines />

      {/* Grid background */}
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
            <span className="text-sm tracking-widest">EXIT_VAULT</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          className="text-center mb-12"
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
            ◈ SECURITY CLEARANCE: MAXIMUM ◈
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-black mb-4"
            style={{
              fontFamily: "Orbitron, monospace",
              letterSpacing: "0.1em",
            }}
          >
            <GlitchText
              text="DATA VAULT"
              style={{
                background: `linear-gradient(135deg, ${primaryColor}, #fff, ${secondaryColor})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: `drop-shadow(0 0 30px ${primaryColor}60)`,
              }}
            />
          </h1>

          <p className="text-sm sm:text-base font-mono" style={{ color: `${primaryColor}90` }}>
            &gt; {allImages.length} MEMORY FRAGMENTS RECOVERED // ACCESS GRANTED //
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-6 mt-8 flex-wrap">
            {Object.entries(rarityColors).map(([rarity, { color }]) => {
              const count = allImages.filter((img) => img.rarity === rarity).length
              return (
                <motion.div
                  key={rarity}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center gap-2 px-3 py-1 rounded-full text-xs"
                  style={{
                    background: `${color}15`,
                    border: `1px solid ${color}50`,
                    color: color,
                    fontFamily: "monospace",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ background: color, boxShadow: `0 0 8px ${color}` }}
                  />
                  {rarity}: {count}
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex justify-center gap-2 mb-10 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {["ALL", ...Object.keys(rarityColors)].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="px-4 py-2 rounded-lg text-xs tracking-widest transition-all duration-300"
              style={{
                background: filter === f ? `${primaryColor}30` : "transparent",
                border: `2px solid ${filter === f ? primaryColor : `${primaryColor}30`}`,
                color: filter === f ? primaryColor : `${primaryColor}70`,
                fontFamily: "Orbitron, monospace",
                boxShadow: filter === f ? `0 0 20px ${primaryColor}30` : "none",
              }}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filteredImages.map((item, index) => {
            const isUnlocked = unlockedImages.includes(item.id)
            const rarityStyle = rarityColors[item.rarity]

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                animate={{
                  opacity: isUnlocked ? 1 : 0.3,
                  scale: isUnlocked ? 1 : 0.9,
                  rotateY: isUnlocked ? 0 : 180,
                }}
                transition={{ duration: 0.6, delay: index * 0.05, type: "spring" }}
                className="relative group cursor-pointer"
                onClick={() => isUnlocked && setSelectedImage(item)}
              >
                {/* Card container */}
                <div
                  className="relative rounded-xl overflow-hidden transition-all duration-500"
                  style={{
                    border: `3px solid ${rarityStyle.color}50`,
                    boxShadow: isUnlocked
                      ? `0 0 20px ${rarityStyle.glow}, inset 0 0 30px ${rarityStyle.color}10`
                      : "none",
                  }}
                >
                  {/* Rarity indicator bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 z-20"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${rarityStyle.color}, transparent)`,
                      boxShadow: `0 0 10px ${rarityStyle.glow}`,
                    }}
                  />

                  {/* Image */}
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={`Memory fragment ${item.code}`}
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                      style={{
                        filter: isUnlocked ? "none" : "blur(10px) grayscale(100%)",
                      }}
                    />

                    {/* Hover overlay */}
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{
                        background: `linear-gradient(180deg, transparent, ${rarityStyle.color}40, rgba(0,0,0,0.9))`,
                      }}
                    >
                      <div
                        className="px-4 py-2 rounded-lg text-xs font-bold tracking-widest"
                        style={{
                          background: "rgba(0,0,0,0.8)",
                          border: `2px solid ${rarityStyle.color}`,
                          color: rarityStyle.color,
                          fontFamily: "Orbitron, monospace",
                          boxShadow: `0 0 20px ${rarityStyle.glow}`,
                        }}
                      >
                        [ EXPAND ]
                      </div>
                    </div>

                    {/* Corner accents */}
                    <div
                      className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2"
                      style={{ borderColor: rarityStyle.color }}
                    />
                    <div
                      className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2"
                      style={{ borderColor: rarityStyle.color }}
                    />
                  </div>

                  {/* Info bar */}
                  <div
                    className="p-3"
                    style={{
                      background: `linear-gradient(135deg, rgba(0,0,0,0.9), ${rarityStyle.color}10)`,
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono" style={{ color: rarityStyle.color }}>
                        {item.code}
                      </span>
                      <span
                        className="text-[10px] px-2 py-0.5 rounded-full"
                        style={{
                          background: `${rarityStyle.color}20`,
                          color: rarityStyle.color,
                          border: `1px solid ${rarityStyle.color}40`,
                        }}
                      >
                        {item.rarity}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Locked overlay */}
                {!isUnlocked && (
                  <div
                    className="absolute inset-0 flex items-center justify-center rounded-xl"
                    style={{ background: "rgba(0,0,0,0.8)" }}
                  >
                    <span className="text-2xl">🔒</span>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-16 text-center font-mono text-xs"
          style={{ color: `${primaryColor}50` }}
        >
          <p>◈ END OF DECRYPTED ARCHIVE ◈</p>
          <p className="mt-2">VAULT_SESSION: IGN-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.95)" }}
            onClick={() => setSelectedImage(null)}
          >
            <Scanlines />

            <motion.div
              initial={{ scale: 0.5, rotateY: 90 }}
              animate={{ scale: 1, rotateY: 0 }}
              exit={{ scale: 0.5, rotateY: -90 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-5xl w-full rounded-xl overflow-hidden"
              style={{
                border: `4px solid ${rarityColors[selectedImage.rarity].color}`,
                boxShadow: `0 0 60px ${rarityColors[selectedImage.rarity].glow}, 0 0 120px ${rarityColors[selectedImage.rarity].glow}`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top bar */}
              <div
                className="p-4 flex items-center justify-between"
                style={{
                  background: `linear-gradient(90deg, rgba(0,0,0,0.95), ${rarityColors[selectedImage.rarity].color}20, rgba(0,0,0,0.95))`,
                  borderBottom: `2px solid ${rarityColors[selectedImage.rarity].color}50`,
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono" style={{ color: rarityColors[selectedImage.rarity].color }}>
                    {selectedImage.code}
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-xs"
                    style={{
                      background: `${rarityColors[selectedImage.rarity].color}20`,
                      color: rarityColors[selectedImage.rarity].color,
                      border: `1px solid ${rarityColors[selectedImage.rarity].color}`,
                    }}
                  >
                    {selectedImage.rarity}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    border: `2px solid ${rarityColors[selectedImage.rarity].color}`,
                    color: rarityColors[selectedImage.rarity].color,
                    fontFamily: "Orbitron, monospace",
                  }}
                >
                  ✕
                </button>
              </div>

              {/* Image */}
              <img
                src={selectedImage.image || "/placeholder.svg"}
                alt={`Memory fragment ${selectedImage.code}`}
                className="w-full max-h-[75vh] object-contain bg-black"
              />

              {/* Bottom bar */}
              <div
                className="p-4 text-center text-xs font-mono"
                style={{
                  background: `linear-gradient(90deg, rgba(0,0,0,0.95), ${rarityColors[selectedImage.rarity].color}10, rgba(0,0,0,0.95))`,
                  color: `${rarityColors[selectedImage.rarity].color}80`,
                  borderTop: `2px solid ${rarityColors[selectedImage.rarity].color}50`,
                }}
              >
                &gt; MEMORY FRAGMENT SUCCESSFULLY DECRYPTED // PRESS ESC TO CLOSE //
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes glitch-1 {
          0% { clip-path: inset(10% 0 60% 0); transform: translateX(-2px); }
          20% { clip-path: inset(20% 0 40% 0); transform: translateX(2px); }
          40% { clip-path: inset(50% 0 10% 0); transform: translateX(-2px); }
          60% { clip-path: inset(30% 0 30% 0); transform: translateX(2px); }
          80% { clip-path: inset(70% 0 5% 0); transform: translateX(-2px); }
          100% { clip-path: inset(10% 0 60% 0); transform: translateX(2px); }
        }
        @keyframes glitch-2 {
          0% { clip-path: inset(40% 0 20% 0); transform: translateX(2px); }
          25% { clip-path: inset(10% 0 70% 0); transform: translateX(-2px); }
          50% { clip-path: inset(60% 0 10% 0); transform: translateX(2px); }
          75% { clip-path: inset(20% 0 50% 0); transform: translateX(-2px); }
          100% { clip-path: inset(40% 0 20% 0); transform: translateX(2px); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  )
}
