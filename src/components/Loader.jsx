"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { motion } from "framer-motion"

// --- Custom Component: Glitch/Reveal Text (Highly Animated) ---
const TechTextReveal = ({ text, color, delay = 0, className = "" }) => {
  const containerRef = useRef(null)

  useEffect(() => {
    const chars = containerRef.current.innerText.split("");
    containerRef.current.innerText = "";

    chars.forEach((char, i) => {
      const span = document.createElement("span");
      span.innerText = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      span.style.opacity = "0";
      containerRef.current.appendChild(span);

      gsap.fromTo(
        span,
        {
          opacity: 0,
          y: Math.random() * 20 - 10,
          x: Math.random() * 5 - 2.5,
          filter: "blur(8px) brightness(0.5)",
          scale: 0.8,
          rotationZ: Math.random() * 30 - 15,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          filter: "blur(0px) brightness(1)",
          scale: 1,
          rotationZ: 0,
          duration: 0.3 + Math.random() * 0.4,
          ease: "power3.out",
          delay: delay + i * 0.04,
        }
      );
    });
  }, [text, delay]);

  return (
    <span ref={containerRef} className={className} style={{ color: color }}>
      {text}
    </span>
  );
};

// --- Main Loader Component ---

export default function Loader({ onLoadComplete }) {
  const containerRef = useRef(null)
  const coreRef = useRef(null)
  const titleRef = useRef(null)
  const subTitleRef = useRef(null)
  const progressBarRef = useRef(null)
  const progressTextRef = useRef(null)
  const scanlineRef = useRef(null)
  const gridOverlayRef = useRef(null)
  const bracketTLRef = useRef(null)
  const bracketBRRef = useRef(null)
  const dataLinesRef = useRef(null)
  const completionMessageRef = useRef(null) // Ref for GSAP animation

  // Define colors - Matching igNITion's theme
  const PRIMARY_COLOR = "#00FFC2" // Neon Green/Cyan
  const ACCENT_COLOR = "#FF00FF" // Deep Magenta
  const WARNING_COLOR = "#FFD700" // Golden Amber (for completion)
  const DARK_BG = "#0A011A"

  useEffect(() => {
    const container = containerRef.current
    const core = coreRef.current
    const progressBar = progressBarRef.current
    const progressText = progressTextRef.current
    const scanline = scanlineRef.current
    const gridOverlay = gridOverlayRef.current
    const bracketTL = bracketTLRef.current
    const bracketBR = bracketBRRef.current
    const dataLines = dataLinesRef.current
    const completionMessage = completionMessageRef.current

    const tl = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: () => {
        gsap.to(container, { opacity: 0, duration: 0.7, onComplete: onLoadComplete })
      }
    })

    // --- Initial Setup and Background ---
    tl.to(container, { duration: 0.3, opacity: 1 })
      .fromTo(gridOverlay,
        { scale: 0.8, opacity: 0.2, filter: 'blur(10px)' },
        { scale: 1, opacity: 0.7, filter: 'blur(0px)', duration: 0.8 }, 0
      )
      .fromTo(core,
        { scale: 0.5, opacity: 0, filter: 'blur(10px)' },
        { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 0.7, ease: "back.out(1.7)" }, 0.2
      )

    // --- Core Activation ---
    gsap.to(core, {
        keyframes: {
            "0%": { boxShadow: `0 0 20px ${PRIMARY_COLOR}a0` },
            "50%": { boxShadow: `0 0 40px ${ACCENT_COLOR}e0` },
            "100%": { boxShadow: `0 0 20px ${PRIMARY_COLOR}a0` }
        },
        duration: 2.0,
        repeat: -1,
        ease: "power2.inOut"
    });

    // --- Brackets & Data Lines Reveal ---
    tl.fromTo([bracketTL, bracketBR],
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 }, 0.8
    )
    .fromTo(dataLines.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1 }, 1.0
    )

    // --- Progress Bar & Scanline ---
    .to(progressBar, { width: "100%", duration: 2.5, ease: "power2.inOut" }, 1.5)
    .to(progressText, { innerHTML: "100%", duration: 2.5, ease: "power2.inOut", snap: "innerHTML" }, 1.5)
    
    // Scanline animation that moves with progress bar roughly
    .fromTo(scanline,
        { x: "-100%", opacity: 0 }, // Changed y to x for horizontal scan on bar
        { x: "100%", opacity: 1, duration: 2.5, ease: "power1.inOut" }, 1.5
    )

    // --- Final Completion Pulse (Use GSAP for the complex animation) ---
    .fromTo(completionMessage, 
        { opacity: 0, scale: 0.8, filter: 'blur(10px)' }, 
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 0.8, ease: "back.out(1.7)" }, 4.0
    )
    .to(container, {
        keyframes: {
            "0%": { filter: "brightness(1)" },
            "50%": { filter: "brightness(2) saturate(1.5)" },
            "100%": { filter: "brightness(1)" }
        },
        duration: 0.4,
        ease: "power1.inOut",
        delay: 0.3 // After all other animations roughly complete
    });

  }, [onLoadComplete])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 flex items-center justify-center z-50 opacity-0 overflow-hidden"
      style={{ background: DARK_BG }}
    >
      {/* Dynamic Grid Background */}
      <motion.div
        ref={gridOverlayRef}
        className="absolute inset-0 z-0 pointer-events-none"
        animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            scale: [1, 1.05, 1],
        }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundImage: `
            repeating-linear-gradient(45deg, ${ACCENT_COLOR}05 0px, ${ACCENT_COLOR}05 2px, transparent 2px, transparent 25px),
            repeating-linear-gradient(-45deg, ${PRIMARY_COLOR}05 0px, ${PRIMARY_COLOR}05 2px, transparent 2px, transparent 25px)
          `,
          backgroundSize: "40px 40px",
          opacity: 0.7,
        }}
      />

      {/* Main Content Area */}
      <div className="relative z-10 w-full max-w-2xl p-8 flex flex-col items-center justify-center">

        {/* Top-Left Bracket */}
        <div
            ref={bracketTLRef}
            className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 opacity-0"
            style={{ borderColor: PRIMARY_COLOR, boxShadow: `0 0 15px ${PRIMARY_COLOR}a0` }}
        />
        {/* Bottom-Right Bracket */}
        <div
            ref={bracketBRRef}
            className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 opacity-0"
            style={{ borderColor: ACCENT_COLOR, boxShadow: `0 0 15px ${ACCENT_COLOR}a0` }}
        />

        {/* Central Energy Core */}
        <div
          ref={coreRef}
          className="relative w-40 h-40 rounded-full flex items-center justify-center mb-8 opacity-0"
          style={{
            background: `radial-gradient(circle at center, ${PRIMARY_COLOR}30 0%, transparent 70%)`,
            border: `4px solid ${PRIMARY_COLOR}`,
            boxShadow: `0 0 20px ${PRIMARY_COLOR}a0`,
          }}
        >
          {/* Inner pulsating core */}
          <motion.div
            className="w-20 h-20 rounded-full"
            style={{
              background: ACCENT_COLOR,
              boxShadow: `0 0 25px ${ACCENT_COLOR}e0`,
            }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Rotating Data Rings */}
          <motion.div
            className="absolute w-full h-full border-2 rounded-full"
            style={{ borderColor: `${ACCENT_COLOR}40`, borderTopColor: 'transparent', borderTop: 'none', borderBottomColor: 'transparent', borderBottom: 'none' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
          />
           <motion.div
            className="absolute w-full h-full border-2 rounded-full"
            style={{ borderColor: `${PRIMARY_COLOR}40`, borderLeftColor: 'transparent', borderLeft: 'none', borderRightColor: 'transparent', borderRight: 'none' }}
            animate={{ rotate: -360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Title and Subtitle */}
        <div className="text-center mb-10">
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl font-black mb-3 tracking-wider uppercase"
            style={{ color: PRIMARY_COLOR, fontFamily: "Orbitron, monospace" }}
          >
            <TechTextReveal text="igNITion" color={PRIMARY_COLOR} delay={0.8} />
          </h1>
          <p
            ref={subTitleRef}
            className="text-lg md:text-xl font-bold tracking-widest uppercase"
            style={{ color: ACCENT_COLOR, fontFamily: "Share Tech Mono, monospace" }}
          >
            <TechTextReveal text="PROTOCOL OVERRIDE" color={ACCENT_COLOR} delay={1.2} />
          </p>
        </div>

        {/* Data Readout Lines */}
        <div ref={dataLinesRef} className="w-full text-left font-mono text-sm mb-8 space-y-1">
            <p className="text-primary opacity-0" style={{ color: PRIMARY_COLOR }}>&gt; Initializing sub-routines... [OK]</p>
            <p className="text-accent opacity-0" style={{ color: ACCENT_COLOR }}>&gt; Quantum-link established... [OK]</p>
            <p className="text-primary opacity-0" style={{ color: PRIMARY_COLOR }}>&gt; Neural-net matrix online... [OK]</p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full relative h-8 rounded-sm overflow-hidden border-2 mb-6" style={{ borderColor: PRIMARY_COLOR, background: `${PRIMARY_COLOR}15`, boxShadow: `0 0 15px ${PRIMARY_COLOR}a0` }}>
            <div
                ref={progressBarRef}
                className="h-full w-0 rounded-sm"
                style={{
                    background: `linear-gradient(90deg, ${PRIMARY_COLOR}, ${ACCENT_COLOR}, ${PRIMARY_COLOR})`,
                    backgroundSize: "200% 100%",
                    boxShadow: `0 0 25px ${PRIMARY_COLOR}e0, inset 0 0 10px ${PRIMARY_COLOR}40`,
                }}
            />
            {/* Scanline Effect */}
            <div
                ref={scanlineRef}
                className="absolute left-0 top-0 h-full w-20 opacity-0"
                style={{
                    background: `linear-gradient(90deg, transparent, ${WARNING_COLOR}a0, transparent)`,
                    filter: `drop-shadow(0 0 10px ${WARNING_COLOR})`,
                }}
            />
            {/* Progress Percentage Text */}
            <p
                ref={progressTextRef}
                className="absolute inset-0 flex items-center justify-center font-bold text-lg"
                style={{ color: DARK_BG, textShadow: `0 0 5px ${WARNING_COLOR}` }}
                initial={{ innerHTML: "0%" }}
            >
                0%
            </p>
        </div>

        {/* Final Status Message */}
        <div
            ref={completionMessageRef}
            className="text-xl md:text-3xl font-black uppercase tracking-widest"
            style={{ color: WARNING_COLOR, fontFamily: "Orbitron, monospace", textShadow: `0 0 20px ${WARNING_COLOR}cc` }}
        >
            <TechTextReveal text="SYSTEM ONLINE" color={WARNING_COLOR} delay={0} />
        </div>
      </div>
    </div>
  )
}