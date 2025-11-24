"use client"

import { useEffect, useRef, useContext, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import gsap from "gsap"
import { ThemeContext } from "../context/ThemeContext" // Assuming this path is correct
// Import your images
import img1 from "../assests/g1.jpg"
import img2 from "../assests/g2.jpg"
import img3 from "../assests/g3.jpg"
import img4 from "../assests/g4.jpg"
import img5 from "../assests/g5.jpg"
import img6 from "../assests/g6.jpg"
import img7 from "../assests/g7.jpg"
import img8 from "../assests/g9.jpg" // Using g9 twice, as in your original
import img9 from "../assests/g9.jpg"
import img10 from "../assests/g10.jpg"
import img11 from "../assests/g11.jpg"
import img12 from "../assests/g12.jpg"


// --- Utility: Random Hex Color for Dynamic Accents ---
const neonColors = [
  "#00FFC2", // Primary Green
  "#FF00FF", // Primary Pink
  "#00C2FF", // Cyan
  "#FFFF00", // Yellow
];
const getRandomNeonColor = () => neonColors[Math.floor(Math.random() * neonColors.length)];

// --- Custom Component: Glitch Text Effect ---
const GlitchText = ({ children, isDark, primaryColor, className = "" }) => {
  const [flickerColor, setFlickerColor] = useState(primaryColor);

  useEffect(() => {
    setFlickerColor(primaryColor); // Reset if primaryColor changes
  }, [primaryColor]);

  const glitchVariants = {
    initial: {
      opacity: 1,
    },
    hover: {
      opacity: [1, 0.8, 0.1, 0.8, 1], // Brief flicker on hover
      x: [0, 2, -2, 0], // Slight horizontal shift
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.6, 1],
        onComplete: () => setFlickerColor(getRandomNeonColor()), // Change color after glitch
      },
    },
    idleFlicker: { // Subtle random flicker when idle
      opacity: [1, 0.9, 1],
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.1,
        delay: Math.random() * 5, // Random delay for asynchronous flicker
        repeatDelay: 2 + Math.random() * 3,
      },
    },
  };

  return (
    <motion.span
      className={`inline-block relative ${className}`}
      variants={glitchVariants}
      initial="initial"
      animate="idleFlicker"
      whileHover="hover"
      style={{
        color: flickerColor, // Use dynamic flicker color
        textShadow: isDark ? `0 0 3px ${flickerColor}a0` : `none`,
      }}
    >
      {children}
    </motion.span>
  );
};


// --- Custom Component: Glitch Gallery Item ---
const GlitchGalleryItem = ({ item, index, isDark }) => {
  const [itemAccentColor, setItemAccentColor] = useState(getRandomNeonColor());

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: index % 2 === 0 ? -100 : 100,
      rotate: index % 2 === 0 ? -5 : 5,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 20,
        delay: index * 0.1,
        duration: 0.8,
        onComplete: () => setItemAccentColor(getRandomNeonColor()),
      },
    },
    hover: {
      scale: 1.02,
      rotate: index % 2 === 0 ? 1 : -1,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const glitchImageVariants = {
    hover: {
      scale: 1.05,
      filter: ["brightness(1)", "brightness(1.2) hue-rotate(10deg)", "brightness(1)"],
      x: [0, 2, -2, 0],
      y: [0, -2, 2, 0],
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        repeat: 1,
        repeatType: "mirror",
      },
    },
  };

  const textBgColor = isDark ? `rgba(0,0,0,0.8)` : `rgba(255,255,255,0.8)`;
  const textColor = isDark ? itemAccentColor : "#333";

  return (
    <motion.div
      className="group relative h-96 rounded-lg overflow-hidden border-2 p-1 transition-all duration-300"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ amount: 0.3, once: true }}
      style={{
        borderColor: isDark ? `${itemAccentColor}aa` : `${itemAccentColor}40`,
        boxShadow: isDark
          ? `0 0 10px ${itemAccentColor}40, inset 0 0 5px ${itemAccentColor}20`
          : `0 0 5px ${itemAccentColor}20, inset 0 0 2px ${itemAccentColor}10`,
      }}
    >
      {/* Glitchy Border Top-Left */}
      <motion.div
        className="absolute top-0 left-0 w-1/4 h-1/4 border-t-4 border-l-4"
        initial={{ opacity: 0, scaleX: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
        exit={{ opacity: 0, scaleX: 0, scaleY: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        style={{ borderColor: itemAccentColor }}
      />
      {/* Glitchy Border Bottom-Right */}
      <motion.div
        className="absolute bottom-0 right-0 w-1/4 h-1/4 border-b-4 border-r-4"
        initial={{ opacity: 0, scaleX: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleX: 1, scaleY: 1 }}
        exit={{ opacity: 0, scaleX: 0, scaleY: 0 }}
        transition={{ delay: 0.3, duration: 0.3 }}
        style={{ borderColor: itemAccentColor }}
      />


      {/* Image Container with Glitch */}
      <motion.div
        className="relative w-full h-full"
        variants={glitchImageVariants}
        whileHover="hover"
      >
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          className="w-full h-full object-cover opacity-90 transition-opacity duration-500 group-hover:opacity-100"
        />

        {/* Scanline Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 50%, rgba(255,255,255,0.05) 50%)',
            backgroundSize: '100% 4px',
            animation: 'scan-flicker 10s linear infinite',
          }}
        />

        {/* Text Overlay */}
        <div
          className="absolute inset-0 flex flex-col justify-end p-6"
          style={{
            background: `linear-gradient(to top, ${textBgColor} 40%, transparent 100%)`,
          }}
        >
          <p
            className="text-xs font-mono uppercase tracking-widest mb-1"
            style={{ color: itemAccentColor, textShadow: isDark ? `0 0 2px ${itemAccentColor}cc` : 'none' }}
          >
            [ SEGMENT &gt; {item.category ? item.category.toUpperCase() : "DATA"} ]
          </p>
          <h3
            className="text-2xl font-black uppercase leading-tight"
            style={{ color: textColor, fontFamily: "Orbitron, monospace" }}
          >
            <GlitchText isDark={isDark} primaryColor={itemAccentColor}>
              {item.title ? item.title : `FILE #${item.id}`}
            </GlitchText>
          </h3>
        </div>
      </motion.div>
    </motion.div>
  );
};


// --- Main Gallery Component ---

export default function Gallery() {
  const titleRef = useRef(null)
  const containerRef = useRef(null)
  const { isDark } = useContext(ThemeContext)

  // Use this for background parallax
  const { scrollYProgress } = useScroll(); // Target the whole document scroll

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
      )
    }
  }, [])

  const gallerySample = [
    { id: 1, title: "", category: "", image: img3 },
    { id: 2, title: "", category: "", image: img1 },
    { id: 3, title: "", category: "", image: img2 },
    { id: 4, title: "", category: "", image: img4 },
    { id: 5, title: "", category: "", image: img5 },
    { id: 6, title: "", category: "", image: img6 },
    { id: 7, title: "", category: "", image: img7 },
    { id: 8, title: "", category: "", image: img8 },
    { id: 9, title: "", category: "", image: img9 },
    { id: 10, title: "", category: "", image: img10 },
    { id: 11, title: "", category: "", image: img11 },
    { id: 12, title: "", category: "", image: img12 },
  ]

  const primaryColor = isDark ? "#00FFC2" : "#3F51B5";
  const secondaryColor = isDark ? "#FF00FF" : "#E91E63";

  // Retain a min-height to ensure scrollability
  const minHeightClass = "min-h-[150vh]";

  // Base background for dark/light mode
  const baseBackground = isDark
    ? "radial-gradient(circle at 50% 50%, #1a1f2e 0%, #0c0f13 100%)"
    : "radial-gradient(circle at 50% 50%, #eef2f7 0%, #f8f9fa 100%)";

  // Parallax layer transforms
  const bgLayer1Y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); // Slowest for larger elements
  const bgLayer2Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Medium speed for abstract shapes
  const bgLayer3Y = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]); // Fastest for smallest elements (stars/dust)


  return (
    <section
      id="gallery"
      className={`relative overflow-hidden pt-20 pb-40 ${minHeightClass}`}
      style={{ background: baseBackground }}
    >
      {/* Gamefied Parallax Background Layers */}
      {isDark && (
        <>
          {/* Layer 1: Data Dust/Stars (Fastest) */}
          <motion.div
            className="absolute inset-0 z-0 opacity-[0.03]"
            style={{
              backgroundImage: `radial-gradient(circle, ${primaryColor} 1px, transparent 1px), radial-gradient(circle, ${secondaryColor} 1px, transparent 1px)`,
              backgroundSize: '80px 80px, 120px 120px',
              backgroundPosition: '0 0, 40px 40px',
              y: bgLayer3Y,
            }}
          />
          {/* Layer 2: Abstract Shapes/Circuitry (Medium Speed) */}
          <motion.div
            className="absolute inset-0 z-0 opacity-[0.02]"
            style={{
              backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" stroke="${primaryColor.replace('#', '%23')}30" stroke-width="0.5"><path d="M50 0L100 50L50 100L0 50L50 0Z" /><circle cx="50" cy="50" r="25" /></svg>')`,
              backgroundSize: '200px 200px',
              backgroundPosition: '0 0',
              filter: 'blur(1px)', // Slight blur for depth
              y: bgLayer2Y,
            }}
          />
          {/* Layer 3: Diffused Glow/Fog (Slowest) */}
          <motion.div
            className="absolute inset-0 z-0 opacity-10"
            style={{
              background: `radial-gradient(circle at 20% 80%, ${primaryColor}20 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${secondaryColor}20 0%, transparent 50%)`,
              filter: 'blur(30px)',
              y: bgLayer1Y,
            }}
          />
        </>
      )}

      {/* Main content with higher z-index */}
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Title Panel - Sticky at the top */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0 }}
          className="text-center mb-10 sticky top-10 md:top-16 z-30 bg-black/50 backdrop-blur-md border-b-4 border-t-4 p-4 rounded-sm"
          style={{
            borderColor: isDark ? `${primaryColor}40` : `${primaryColor}40`,
            boxShadow: isDark ? `0 0 10px ${primaryColor}40, 0 0 10px ${secondaryColor}40` : 'none',
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
            SYSTEM LOGS &gt;&gt; VIRTUAL REALM
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
            [ INITIATE SCROLL SEQUENCE: EXPLORE DATA ]
          </p>
        </motion.div>

        {/* Gallery Grid - Glitch Items */}
        <div
          ref={containerRef} // This ref is now primarily for measuring the content's scroll area
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-20"
        >
          {gallerySample.map((item, index) => (
            <GlitchGalleryItem
              key={item.id}
              item={item}
              index={index}
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
                ? `0 0 30px ${primaryColor}60, inset 0 0 8px ${primaryColor}40`
                : `0 0 20px ${primaryColor}40`,
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: isDark ? `${primaryColor}2a` : `${primaryColor}2a`,
              boxShadow: isDark
                ? `0 0 60px ${primaryColor}80, inset 0 0 15px ${secondaryColor}60`
                : `0 0 40px ${primaryColor}60`,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <GlitchText isDark={isDark} primaryColor={primaryColor} className="tracking-widest">
              ACCESS DECRYPTED DATA
            </GlitchText>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}