"use client"

import { useEffect, useRef, useContext } from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import gsap from "gsap"
import { ThemeContext } from "../context/ThemeContext"

// --- Custom Component: Flickering Text Effect (Optimized) ---
const FlickeringText = ({ children, isDark, primaryColor, className = "" }) => {
  const flickerVariants = {
    start: {
      opacity: 1,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.05,
        delay: 0,
        repeatDelay: 1 + Math.random() * 2,
      },
    },
    flicker: {
      opacity: [1, 0.1, 1, 0.5, 1],
      transition: {
        duration: 0.2,
        times: [0, 0.1, 0.4, 0.6, 1],
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.span 
      className={`inline-block ${className}`}
      variants={flickerVariants}
      initial="start"
      animate="start"
      whileHover="flicker"
      style={{
        color: primaryColor,
        textShadow: isDark ? `0 0 15px ${primaryColor}a0` : "none",
      }}
    >
      {children}
    </motion.span>
  );
};

// --- Custom Component: 3D Parallax Gallery Item (Enhanced) ---
const GalleryItem3D = ({ item, scrollYProgress, index, isDark }) => {
  const primaryColor = isDark ? "#00FFC2" : "#3F51B5"; // Emerald/Indigo
  const secondaryColor = isDark ? "#FF00FF" : "#E91E63"; // Magenta/Pink

  // Aggressive offsets for deep 3D effect
  const offset = (index % 4) * 60 + 80; 
  const parallaxDepth = (index % 2 === 0 ? -1 : 1) * 300; 

  const y = useTransform(scrollYProgress, [0, 1], [`${offset}px`, `${parallaxDepth}px`]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, index % 2 === 0 ? 12 : -12]);
  const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      style={{ 
        y, 
        opacity,
        rotateX, 
        transformStyle: "preserve-3d", 
        perspective: 1000,
        zIndex: 10 - index, 
      }}
      className="group relative h-80 rounded-sm overflow-hidden border-2 p-1 transition-all duration-300 bg-black/70"
      initial={{ scale: 0.7, rotateX: 45, filter: 'blur(5px)' }}
      whileInView={{ scale: 1, rotateX: 0, filter: 'blur(0px)' }}
      viewport={{ amount: 0.3, margin: "-100px" }}
      transition={{ type: "spring", stiffness: 35, damping: 10 }}
    >
      {/* Dynamic Neon Box Shadow for Gamefied Look */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          // Multi-layered glow border
          boxShadow: isDark 
            ? `0 0 15px ${primaryColor}60, 0 0 30px ${secondaryColor}30, inset 0 0 10px ${primaryColor}40` 
            : `0 0 15px #3F51B540, inset 0 0 5px #3F51B540`,
          borderColor: isDark ? `${primaryColor}aa` : `${primaryColor}40`,
          borderWidth: 1,
        }}
      />

      {/* 3D Image Container */}
      <div className="relative w-full h-full transform translate-z-10">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-115 opacity-60 group-hover:opacity-100"
        />

        {/* Holographic Scanline Overlay (Animation achieved via keyframes in global CSS or a pseudo-element if possible) */}
        <div 
            className="absolute inset-0 pointer-events-none" 
            style={{ 
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 50%, rgba(255,255,255,0.05) 50%)',
                backgroundSize: '100% 4px',
                animation: 'scan-flicker 10s linear infinite',
            }}
        />

        {/* HUD Overlay - Title/Category Info */}
        <div
          className="absolute inset-0 p-5 flex flex-col justify-end transition-opacity duration-300"
          style={{
            background: `linear-gradient(to top, ${isDark ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.9)'} 40%, transparent 100%)`,
          }}
        >
          <div className="transform translate-z-20 border-t pt-3" style={{ borderColor: `${primaryColor}40` }}>
            <p
              className="text-xs font-bold mb-1 uppercase tracking-widest"
              style={{
                color: secondaryColor,
                fontFamily: "Share Tech Mono, monospace",
                textShadow: `0 0 3px ${secondaryColor}cc`,
              }}
            >
              [ SEGMENT &gt; {item.category.toUpperCase()} ]
            </p>
            <h3
              className="text-xl font-black uppercase"
              style={{
                fontFamily: "Orbitron, monospace",
              }}
            >
              <FlickeringText isDark={isDark} primaryColor={primaryColor}>
                {item.title}
              </FlickeringText>
            </h3>
          </div>
        </div>
      </div>
      
      {/* Detailed Corner Decorations (More complex structure) */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 transform -translate-x-1 -translate-y-1" style={{ borderColor: primaryColor }}/>
      <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 transform translate-x-1 -translate-y-1" style={{ borderColor: primaryColor }}/>
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 transform -translate-x-1 translate-y-1" style={{ borderColor: secondaryColor }}/>
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 transform translate-x-1 translate-y-1" style={{ borderColor: secondaryColor }}/>
    </motion.div>
  )
}


// --- Main Gallery Component ---

export default function Gallery() {
  const titleRef = useRef(null)
  const containerRef = useRef(null)
  const { isDark } = useContext(ThemeContext)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // GSAP animation for the main title on mount
  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50, scale: 0.9, filter: "blur(20px)" },
        { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1.8, ease: "power4.out" }
      )
    }
  }, [])

  const gallerySample = [
    { id: 1, title: "CODING CHALLENGE 2024", category: "Competition", image: "/coding-competition-tech-fest.jpg" },
    { id: 2, title: "HACKATHON WINNERS", category: "Winners", image: "/hackathon-winners-celebration.jpg" },
    { id: 3, title: "TECH EXHIBITION", category: "Exhibition", image: "/technology-exhibition-showcase.jpg" },
    { id: 4, title: "KEYNOTE SESSION", category: "Speakers", image: "/tech-conference-keynote-speaker.jpg" },
    { id: 5, title: "NETWORKING EVENT", category: "Community", image: "/tech-networking-event-crowd.jpg" },
    { id: 6, title: "WORKSHOP SESSION", category: "Learning", image: "/tech-workshop-learning-session.jpg" },
    { id: 7, title: "ROBOTICS SHOWCASE", category: "Display", image: "/robotics-showcase.jpg" },
    { id: 8, title: "VR GAMING BOOTH", category: "Entertainment", image: "/vr-gaming-booth.jpg" },
    { id: 9, title: "CLOSING CEREMONY", category: "Celebration", image: "/closing-ceremony.jpg" },
    { id: 10, title: "DRONE RACING LEAGUE", category: "Sports", image: "/drone-racing.jpg" },
    { id: 11, title: "AI DESIGN WORKSHOP", category: "Creative", image: "/ai-design-workshop.jpg" },
    { id: 12, title: "CYBER SECURITY TALK", category: "Security", image: "/cyber-security-talk.jpg" },
  ]

  const primaryColor = isDark ? "#00FFC2" : "#3F51B5";
  const secondaryColor = isDark ? "#FF00FF" : "#E91E63";
  
  const minHeightClass = "min-h-[400vh]"; // Increased height for longer scroll effect

  // Define the grid background style for a deeper gamefield look
  const backgroundStyle = isDark
    ? "radial-gradient(circle at 50% 50%, #1a1f2e 0%, #0c0f13 100%)"
    : "radial-gradient(circle at 50% 50%, #eef2f7 0%, #f8f9fa 100%)";

  return (
    <section
      id="gallery"
      className={`relative overflow-hidden pt-20 pb-40 ${minHeightClass}`}
      style={{ background: backgroundStyle }}
    >
      {/* Background Grid & Blur Layer */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: isDark 
            ? `repeating-linear-gradient(0deg, #00FFC205 0px, #00FFC205 1px, transparent 1px, transparent 50px), repeating-linear-gradient(90deg, #FF00FF05 0px, #FF00FF05 1px, transparent 1px, transparent 50px)` 
            : "none"
        }}
      />
      
      {/* Deep Blur elements (Original with stronger color) */}
      <div
        className={`absolute top-0 left-0 w-96 h-96 rounded-full blur-[70px] ${isDark ? "bg-emerald-500/10" : "bg-indigo-300/10"}`}
      />
      <div
        className={`absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[70px] ${isDark ? "bg-fuchsia-500/10" : "bg-pink-300/10"}`}
      />
      
      <div className="max-w-7xl mx-auto relative z-20">
        
        {/* Title Panel - Fixed at the top like a HUD interface */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0 }}
          className="text-center mb-10 sticky top-10 md:top-16 z-30 bg-black/50 backdrop-blur-md border-b-4 border-t-4 p-4 rounded-sm"
          style={{ 
            borderColor: isDark ? `${primaryColor}40` : `${primaryColor}40`,
            boxShadow: isDark ? `0 0 20px ${primaryColor}40, 0 0 20px ${secondaryColor}40` : 'none'
          }}
        >
          <h2
            className="text-5xl md:text-6xl font-black uppercase"
            style={{
              color: primaryColor,
              fontFamily: "Orbitron, monospace",
              letterSpacing: "0.2em",
            }}
          >
            SYSTEM OVERRIDE &gt;&gt; LOG ARCHIVE
          </h2>
          <div
            className={`h-1 w-48 mx-auto mt-4 mb-2 ${isDark ? "bg-gradient-to-r from-emerald-400 to-fuchsia-400" : "bg-gradient-to-r from-indigo-500 to-pink-500"}`}
          />
          <p
            className="text-sm font-mono uppercase"
            style={{
              color: secondaryColor,
              letterSpacing: "0.15em",
            }}
          >
            [ FRACTAL DATA GRID INITIALIZED: SCROLL TO INJECT COMMANDS ]
          </p>
        </motion.div>

        {/* Gallery Grid - The 3D Scroll Container */}
        <div 
          ref={containerRef} 
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20"
          style={{ 
            perspective: '1800px', // Deeper perspective for intense 3D
            marginTop: '10vh'
          }}
        >
          {gallerySample.map((item, index) => (
            <GalleryItem3D 
              key={item.id} 
              item={item} 
              index={index}
              scrollYProgress={scrollYProgress}
              isDark={isDark}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-32 relative z-30"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="px-10 py-5 uppercase font-extrabold text-xl border-4 rounded-sm transition-all duration-300 font-mono"
            style={{
              color: primaryColor,
              borderColor: primaryColor,
              background: isDark ? `${primaryColor}1a` : `${primaryColor}1a`,
              boxShadow: isDark 
                ? `0 0 50px ${primaryColor}60, inset 0 0 10px ${primaryColor}40` 
                : `0 0 30px ${primaryColor}40`,
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: isDark ? `${primaryColor}2a` : `${primaryColor}2a`,
              boxShadow: isDark 
                ? `0 0 100px ${primaryColor}80, inset 0 0 30px ${secondaryColor}60`
                : `0 0 60px ${primaryColor}60`,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FlickeringText isDark={isDark} primaryColor={primaryColor} className="tracking-widest">
                ACTIVATE FULL DATA DOWNLOAD
            </FlickeringText>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}