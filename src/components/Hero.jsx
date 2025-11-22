"use client"

import { useEffect, useRef, useState, useCallback } from "react"
import { motion } from "framer-motion"
import gsap from "gsap"

// --- Define Color Theme (Centralized & Clean) ---
const THEME = {
  PRIMARY: "#00E0FF", // Bright Cyan (Active Data)
  ACCENT: "#FF00FF", // Magenta (Secondary/Alerts)
  WARNING: "#FFD700", // Golden Amber
  BG_DARK: "#020718", // Deep Navy Blue
  BG_CARD: "rgba(10, 30, 60, 0.75)",
  TEXT_MAIN: "#FFFFFF", // Target color for igNITion title text
  TEXT_LIGHT: "#B3F0FF", // Light Cyan
  BOX_SHADOW_PRIMARY: "0 0 30px rgba(0, 255, 255, 0.5), inset 0 0 10px rgba(0, 255, 255, 0.3)",
  BOX_SHADOW_ACCENT: "0 0 30px rgba(255, 0, 255, 0.5), inset 0 0 10px rgba(255, 0, 255, 0.3)",
}

// --- Custom Component: Typewriter Text (Pure Framer Motion Stagger) ---
const TypewriterText = ({ text, color, delay = 0, className = "" }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.04,
      },
    },
  }

  const charVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.9, filter: 'blur(5px)' },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  return (
    <motion.span
      className={className}
      style={{ color: color }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {text.split('').map((char, i) => (
        <motion.span key={i} variants={charVariants} style={{ display: "inline-block" }}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

// --- Starfield Component (Dynamic Background) ---
const Starfield = ({ numStars = 100 }) => {
  const stars = useRef([]);

  useEffect(() => {
    stars.current = Array.from({ length: numStars }, () => ({
      x: Math.random() * 200 - 100, 
      y: Math.random() * 200 - 100, 
      z: Math.random() * 2000,     
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.7 + 0.3,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 5,
    }));
  }, [numStars]);

  return (
    <div className="absolute inset-0 overflow-hidden perspective-800">
      {stars.current.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}vw`,
            top: `${star.y}vh`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            transform: `translateZ(-${star.z}px)`,
            boxShadow: `0 0 ${star.size * 1.5}px ${THEME.PRIMARY}50`,
          }}
          animate={{
            x: [star.x, star.x + (Math.random() - 0.5) * 20],
            y: [star.y, star.y + (Math.random() - 0.5) * 20],
            z: [star.z, star.z - 2000], 
            opacity: [star.opacity, 0, star.opacity],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  );
};

// DataModule
const DataModule = ({ title, value, unit, delay }) => {
    return (
        <motion.div
            className="p-4 border-l-4 rounded-sm"
            style={{ borderColor: THEME.PRIMARY, backgroundColor: `${THEME.PRIMARY}0A` }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: delay }}
        >
            <p className="text-xs uppercase tracking-widest mb-1" style={{ color: THEME.TEXT_LIGHT }}>{title}</p>
            <h3 className="text-3xl font-extrabold" style={{ color: THEME.PRIMARY, fontFamily: 'Orbitron, monospace' }}>
                {value}
                <span className="text-sm font-normal ml-1" style={{ color: THEME.TEXT_LIGHT }}>{unit}</span>
            </h3>
        </motion.div>
    );
};

// InteractiveSkill
const InteractiveSkill = ({ icon, name, level, delay }) => {
  const [clicked, setClicked] = useState(false)
  const glowVariants = {
    initial: { boxShadow: "0 0 10px rgba(0, 255, 255, 0.4)" },
    hover: {
      scale: 1.05,
      boxShadow: THEME.BOX_SHADOW_PRIMARY,
      backgroundColor: `${THEME.PRIMARY}20`,
    },
  }

  return (
    <motion.div
      className="px-4 py-3 rounded-none border border-cyan-500/60 bg-slate-800/60 cursor-pointer relative overflow-hidden group w-32 text-center"
      style={{
        clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)',
      }}
      variants={glowVariants}
      initial="initial"
      whileHover="hover"
      onClick={() => setClicked(!clicked)}
      animate={clicked ? { rotate: [0, 3, -3, 0] } : {}}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent -left-full"
        animate={{ left: ["-100%", "100%"] }}
        transition={{ duration: 3, delay, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <div className="relative z-10">
        <div className="text-xl mb-1 text-white">{icon}</div>
        <div className="text-xs font-bold text-blue-300 tracking-wider uppercase">{name}</div>
        <div className="text-xs" style={{ color: THEME.PRIMARY, fontWeight: '900', marginTop: '4px' }}>LVL {level}</div>
      </div>
    </motion.div>
  )
}


// --- Main Hero Component ---

export default function Hero() {
  const [displayLevel, setDisplayLevel] = useState(0)
  const healthBarRef = useRef(null)
  const xpBarFillRef = useRef(null)
  const dateText = "10 - 12 APRIL 2026"; 
  const titleText = "igNITion";

  const FONT_STACK = 'Orbitron, "Segoe UI", system-ui, -apple-system, sans-serif';
  const MONO_STACK = '"Share Tech Mono", monospace';

  useEffect(() => {
    const levelCounter = { value: 0 }
    gsap.to(levelCounter, {
      value: 99,
      duration: 2,
      delay: 0.5,
      snap: { value: 1 },
      ease: "power2.out",
      onUpdate: () => setDisplayLevel(Math.floor(levelCounter.value)),
    })
    
    // GSAP for progress bars
    if (healthBarRef.current) {
        gsap.to(healthBarRef.current, { width: "100%", duration: 2, ease: "power2.out", delay: 0.5 })
    }
    if (xpBarFillRef.current) {
        gsap.to(xpBarFillRef.current, { width: "78%", duration: 2, ease: "power2.out", delay: 0.7 })
    }

  }, [])

  return (
    <section
      // FIX 1 & 2: Added pt-[100px] to clear Navbar, and adjusted min-h for flexible mobile sizing.
      className="relative flex flex-col items-center justify-center min-h-[85dvh] md:min-h-screen px-4 py-4 sm:px-6 md:px-8 md:py-12 overflow-hidden pt-[100px]" 
      style={{
        background: `linear-gradient(135deg, ${THEME.BG_DARK} 0%, #0A011A 50%, ${THEME.BG_DARK} 100%)`,
      }}
    >
      {/* --- Animated Background Elements --- */}
      <Starfield numStars={window.innerWidth < 768 ? 50 : 150} />

      <motion.div
        className="absolute inset-0 z-0 opacity-40"
        animate={{ backgroundPosition: ["0px 0px", "100px 100px"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, ${THEME.PRIMARY}08 0px, ${THEME.PRIMARY}08 1px, transparent 1px, transparent 25px),
            repeating-linear-gradient(90deg, ${THEME.ACCENT}08 0px, ${THEME.ACCENT}08 1px, transparent 1px, transparent 25px)
          `,
          backgroundSize: "25px 25px",
        }}
      />
      <motion.div
        className="absolute inset-0 z-[1] opacity-20"
        animate={{ x: ["-5%", "5%", "-5%"], y: ["-5%", "5%", "-5%"], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear", repeatType: "mirror" }}
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, ${THEME.PRIMARY}10, transparent 50%),
            radial-gradient(circle at 80% 90%, ${THEME.ACCENT}10, transparent 50%)
          `,
          backgroundSize: "200% 200%",
          filter: "blur(50px)"
        }}
      />
      {/* --- END Animated Background Elements --- */}


      {/* --- Main Content Panel --- */}
      <motion.div
        className="relative z-10 w-full max-w-7xl p-4 md:p-8 lg:p-12 border-4 rounded-lg bg-black/60 grid grid-cols-1 lg:grid-cols-3 gap-y-6 lg:gap-8"
        style={{
          borderColor: `${THEME.PRIMARY}80`,
          boxShadow: THEME.BOX_SHADOW_PRIMARY,
        }}
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }} 
      >
        
        {/* === HEADER SECTION (Span All Columns) === */}
        <div className="lg:col-span-3 text-center mb-6 pt-4">
            {/* Main Title: igNITion */}
            <h1
                // FIX 3: Decrease font size on mobile (text-5xl)
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase mb-1" 
                style={{
                    color: THEME.TEXT_MAIN, // Solid white text color
                    filter: `drop-shadow(0 0 20px ${THEME.PRIMARY}60) drop-shadow(0 0 40px ${THEME.ACCENT}30)`,
                    fontFamily: FONT_STACK,
                    letterSpacing: "0.1em",
                    lineHeight: "1",
                }}
            >
                <TypewriterText text={titleText} color={THEME.TEXT_MAIN} delay={0.2} />
            </h1>
            
            {/* Animated Date/Decorative Bar */}
            <motion.p 
                className="text-lg md:text-xl font-bold uppercase" 
                style={{ color: THEME.ACCENT, fontFamily: MONO_STACK }}
                animate={{ scale: [1, 1.01, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <motion.span 
                    className="mr-2 inline-block"
                    animate={{ rotateZ: [0, 5, -5, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                >
                    [
                </motion.span>
                <TypewriterText text={dateText} color={THEME.TEXT_LIGHT} delay={0.7} />
                <motion.span 
                    className="ml-2 inline-block"
                    animate={{ rotateZ: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                >
                    ]
                </motion.span>
            </motion.p>

             {/* Short Tagline */}
             <p className="text-sm sm:text-lg mt-3 max-w-3xl mx-auto" style={{ color: THEME.PRIMARY, fontFamily: FONT_STACK }}>
                <TypewriterText text="PROTOCOL INITIATED: ENTER THE FUTURE OF TECH AND GAMING." color={THEME.PRIMARY} delay={1.2} />
            </p>
        </div>


        {/* === COLUMN 1 (LEFT/TOP) === */}
        <div className="lg:col-span-1 space-y-6 flex flex-col">
            
            {/* 1. igNITion LOGO/CORE */}
            <div className="text-center">
                <motion.div 
                    className="w-28 h-28 mx-auto rounded-full border-4 flex items-center justify-center mb-4"
                    style={{ borderColor: THEME.ACCENT, boxShadow: THEME.BOX_SHADOW_ACCENT }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                    <span className="text-2xl font-black" style={{ color: THEME.PRIMARY, fontFamily: FONT_STACK }}>iG</span>
                </motion.div>
                <h2 className="text-xl font-bold uppercase" style={{ color: THEME.WARNING, fontFamily: FONT_STACK }}>
                    <TypewriterText text="SYSTEM CORE" color={THEME.WARNING} delay={0.8} />
                </h2>
            </div>

            {/* 2. Status Readout */}
            <div className="p-4 border border-white/10 space-y-2 rounded-sm" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
                <p className="text-xs uppercase" style={{ color: THEME.PRIMARY, fontFamily: MONO_STACK }}>
                    &gt; STATUS: <span className="float-right" style={{ color: THEME.WARNING }}>ONLINE</span>
                </p>
                <p className="text-xs uppercase" style={{ color: THEME.PRIMARY, fontFamily: MONO_STACK }}>
                    &gt; PROTOCOL: <span className="float-right" style={{ color: THEME.WARNING }}>V 3.0.2</span>
                </p>
                <motion.div 
                    className="p-1 border border-red-500/50 mt-4 rounded-sm" 
                    animate={{ scale: [1, 1.02, 1] }} 
                    transition={{ duration: 1, repeat: Infinity }}
                >
                    <span className="text-xs" style={{ color: 'red', fontFamily: MONO_STACK }}>[ WARNING ] TEMP HIGH</span>
                </motion.div>
            </div>

            {/* 3. Floating Data Readout */}
            <motion.div 
                className="p-3 border border-dashed text-sm rounded-sm" 
                style={{ borderColor: THEME.ACCENT, color: THEME.ACCENT, fontFamily: MONO_STACK, backgroundColor: 'rgba(0,0,0,0.3)' }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
                <p>0x40A9 | Q-LINK ESTABLISHED</p>
                <p>TARGET: GBU CAMPUS</p>
            </motion.div>
        </div>
        
        {/* === COLUMN 2 (CENTER) === */}
        <div className="lg:col-span-1 space-y-6 flex flex-col items-center">
            
            {/* Data Modules (Aggressively hidden on mobile to fix height) */}
            <div className="hidden sm:grid grid-cols-2 gap-4 w-full"> {/* HIDE ON MOBILE */}
                <DataModule title="CURRENT LVL" value={displayLevel} unit="" delay={1.8} />
                <DataModule title="DATA RATE" value={4.2} unit="GB/s" delay={2.0} />
                <DataModule title="TEMP AVG" value={35} unit="°C" delay={2.2} />
                <DataModule title="USERS ONLINE" value={1809} unit="" delay={2.4} />
            </div>

            {/* LVL & XP BAR */}
            <div className="w-full">
                {/* LVL Display */}
                <motion.div 
                    className="p-2 font-extrabold text-3xl rounded-sm mb-2"
                    style={{ 
                        color: THEME.WARNING,
                        backgroundColor: `${THEME.WARNING}15`,
                        border: `2px solid ${THEME.WARNING}`,
                        clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)',
                        boxShadow: `0 0 20px ${THEME.WARNING}a0`,
                        fontFamily: FONT_STACK,
                        textAlign: 'center'
                    }}
                >
                    <span className="text-sm align-top">LVL</span> {displayLevel}
                </motion.div>

                {/* XP Bar */}
                <div className="h-4 bg-slate-900 rounded-sm overflow-hidden border border-cyan-500/50 relative">
                    <motion.div
                        ref={xpBarFillRef}
                        className="h-full bg-gradient-to-r from-cyan-600 via-magenta-400 to-cyan-500 absolute"
                        style={{ boxShadow: `0 0 20px ${THEME.PRIMARY}a0, 0 0 30px ${THEME.ACCENT}50`, width: "0%" }}
                        animate={{ opacity: [1, 0.95, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white tracking-widest" style={{ textShadow: '0 0 3px black' }}>
                        XP PROGRESS: {Math.floor(displayLevel * (78 / 99))}%
                    </div>
                </div>
            </div>

            {/* Status Bars (Health/Mana) - Hiding on mobile to save space */}
            <div className="w-full space-y-3 hidden sm:block"> 
                {/* Health bar (HP) */}
                <div>
                    <span className="text-xs sm:text-sm font-bold text-red-400 tracking-wider">[ HEALTH | HP ]</span>
                    <div className="h-4 bg-slate-900 rounded-sm overflow-hidden border-2 border-red-500/50 relative">
                        <motion.div ref={healthBarRef} className="h-full bg-gradient-to-r from-red-700 to-red-500 absolute" style={{ width: "0%" }} />
                        {/* Glitch Scanline Overlay */}
                        <motion.div
                            className="absolute inset-0"
                            style={{ 
                                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 3px)`,
                                backgroundSize: '10px 10px'
                            }}
                            animate={{ x: [0, 10, 0] }}
                            transition={{ duration: 0.2, repeat: Infinity, ease: 'linear' }}
                        />
                    </div>
                </div>

                {/* Mana bar (MP) */}
                <div>
                    <span className="text-xs sm:text-sm font-bold" style={{ color: THEME.ACCENT }}>[ MANA | MP ]</span>
                    <div className="h-4 bg-slate-900 rounded-sm overflow-hidden border-2" style={{ borderColor: `${THEME.ACCENT}80` }}>
                        <motion.div className="h-full bg-gradient-to-r from-magenta-700 to-magenta-500" initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 2, delay: 0.2 }} />
                    </div>
                </div>
            </div>
        </div>

        {/* === COLUMN 3 (RIGHT) === */}
        <div className="lg:col-span-1 space-y-8 flex flex-col justify-between">
            
            {/* Mission Control & Log */}
            <div className="flex-grow space-y-4">
                <h2 className="text-lg font-bold uppercase border-b pb-2" style={{ color: THEME.ACCENT, borderColor: `${THEME.ACCENT}50` }}>MISSION CONTROL</h2>
                
                {/* Mission Summary (Added igNITion text) */}
                <div className="p-4 border border-white/10 space-y-2 rounded-sm" style={{ fontFamily: MONO_STACK, backgroundColor: 'rgba(0,0,0,0.3)' }}>
                    <p className="text-sm font-bold" style={{ color: THEME.WARNING }}>Active Mission: CORE INVASION</p>
                    <p className="text-xs text-white/70">Target: **igNITion** ARENA</p>
                    <p className="text-xs text-white/70">Status: Awaiting launch sequence...</p>
                </div>
                
                {/* Interactive Stat Slots */}
                <div className="flex justify-around flex-wrap gap-4 pt-4">
                    <InteractiveSkill icon="⚔️" name="ATTACK" level={15} delay={1.4} />
                    <InteractiveSkill icon="🛡️" name="DEFENSE" level={12} delay={1.5} />
                    <InteractiveSkill icon="✨" name="MAGIC" level={18} delay={1.6} />
                    <InteractiveSkill icon="🏃" name="SPEED" level={14} delay={1.7} />
                </div>
            </div>

            {/* CTA Buttons (Larger, more dramatic) */}
            <div className="space-y-4 pt-4">
             <a href="#events">
                 <motion.button
                    className="w-full py-4 rounded-none text-sm md:text-base font-bold tracking-wider border-2 border-cyan-500 relative overflow-hidden"
                    style={{
                        color: THEME.PRIMARY,
                        backgroundColor: `${THEME.PRIMARY}25`,
                        clipPath: 'polygon(5% 0, 100% 0, 95% 100%, 0 100%)',
                        fontSize: '1.2rem',
                        boxShadow: `0 0 20px ${THEME.PRIMARY}90`
                    }}
                    whileHover={{ scale: 1.05, backgroundColor: `${THEME.PRIMARY}40`, boxShadow: THEME.BOX_SHADOW_PRIMARY }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                        [ REGISTER NOW ]
                    </motion.span>
                </motion.button>
             </a>

                <motion.button
                    className="w-full py-4 rounded-none text-sm md:text-base font-bold tracking-wider border-2 border-magenta-500 relative overflow-hidden"
                    style={{
                        color: THEME.ACCENT,
                        backgroundColor: `${THEME.ACCENT}15`,
                        clipPath: 'polygon(0 0, 95% 0, 100% 100%, 5% 100%)',
                        fontSize: '1.2rem',
                    }}
                    whileHover={{ scale: 1.05, backgroundColor: `${THEME.ACCENT}30`, boxShadow: THEME.BOX_SHADOW_ACCENT }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, delay: 0.2 }}>
                        [ VIEW SCHEDULE ]
                    </motion.span>
                </motion.button>
            </div>
        </div>
      </motion.div>

      {/* Global CSS for Title Gradient Animation */}
      <style>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .perspective-800 {
          perspective: 800px;
        }
      `}</style>
    </section>
  )
}