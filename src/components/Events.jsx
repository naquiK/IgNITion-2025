import React, { createContext, useContext, useState, useMemo } from 'react';
import { motion } from 'framer-motion';

// ----------------------------------------------------------------------
// 1. Theme Context Definition (Mocked for single-file runnability)
// ----------------------------------------------------------------------
const ThemeContext = createContext({
  isDark: true, // Default to dark mode
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const value = useMemo(() => ({ isDark, toggleTheme }), [isDark]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// --- Centralized Theme Constants (igNITion Palette) ---
const THEME = {
    PRIMARY: "#00E0FF", // Cyan/Blue
    ACCENT: "#FF00FF", // Magenta/Pink
    WARNING: "#FFD700", // Gold/Yellow
    BG_DARK: "#09142A", 
    TEXT_MAIN: "#FFFFFF",
};

// ----------------------------------------------------------------------
// 2. NEW COMPONENT: AWESOME Event Unlock Overlay (Made Responsive)
// ----------------------------------------------------------------------
const EventUnlockOverlay = ({ isDark }) => {
    const primaryColor = isDark ? THEME.PRIMARY : THEME.ACCENT;
    const warningColor = THEME.WARNING;

    const flicker = {
        opacity: [1, 0.9, 1, 0.8, 1],
        scale: [1, 1.005, 1, 0.995, 1],
        transition: {
            duration: 0.1,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
            delay: 0.5,
        }
    };
    
    const glitch = {
        x: [0, 1, -1, 1, -1, 0],
        skewX: [0, 0.5, -0.5, 0.5, -0.5, 0],
        transition: {
            duration: 0.08,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
            delay: 0.1,
        }
    };

    return (
        <motion.div
            className="absolute inset-0 flex items-center justify-center p-4 sm:p-8 z-50 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
                background: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(3px)',
                WebkitBackdropFilter: 'blur(3px)',
            }}
        >
            <motion.div
                className="text-center  sm:p-8 border-4 relative overflow-hidden max-w-lg w-full"
                initial={{ scale: 0.8, rotateX: 15 }}
                animate={{ scale: 1, rotateX: 0 }}
                transition={{ type: "spring", stiffness: 50, delay: 0.5 }}
                style={{
                    borderColor: warningColor,
                    boxShadow: `0 0 50px ${warningColor}40, inset 0 0 30px ${warningColor}30`,
                    background: isDark ? `${THEME.BG_DARK}e0` : `#ffffffc0`,
                }}
            >
                {/* 1. Holographic Projection Glow (Awesome Background) */}
                <motion.div
                    className="absolute inset-0 opacity-20 pointer-events-none"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        background: `radial-gradient(circle at 50% 50%, ${primaryColor} 0%, transparent 60%)`,
                        filter: 'blur(50px)',
                    }}
                />

                {/* Top Left Corner Detail */}
                <div className="absolute top-0 left-0 w-10 h-8 sm:w-10 sm:h-10 border-t-4 border-l-4 transform -translate-x-3 -translate-y-3" style={{ borderColor: primaryColor, boxShadow: `0 0 8px ${primaryColor}a0` }} />
                
                <motion.p 
                    className="text-xs sm:text-xl md:text-2xl font-mono uppercase tracking-widest mb-2 sm:mb-4 relative z-10" 
                    style={{ color: warningColor }}
                    animate="glitch"
                    variants={{ glitch: {...glitch, duration: 0.15} }}
                >
                    [ STATUS &gt; ACCESS DENIED ]
                </motion.p>

                <motion.h3
                    className="text-2xl  sm:text-5xl md:text-7xl font-black uppercase mb-4 sm:mb-6 relative z-10 leading-tight"
                    animate={["flicker", "glitch"]}
                    variants={{ flicker, glitch }}
                    style={{
                        color: primaryColor,
                        fontFamily: "Orbitron, monospace",
                        textShadow: `0 0 20px ${primaryColor}a0, 0 0 8px ${warningColor}a0`,
                    }}
                >
                    INITIATION SEQUENCE
                </motion.h3>

                <motion.h4
                    className="text-xl sm:text-3xl md:text-4xl font-extrabold uppercase relative z-10 leading-snug"
                    animate={["flicker", "glitch"]}
                    variants={{ 
                        flicker: {...flicker, delay: 0.8}, 
                        glitch: {...glitch, delay: 0.3} 
                    }}
                    style={{
                        color: warningColor,
                        fontFamily: "Orbitron, monospace",
                        textShadow: `0 0 15px ${warningColor}a0`,
                    }}
                >
                    &gt;&gt; UNLOCKING SOON &lt;&lt;
                </motion.h4>

                <p className="text-sm sm:text-lg mt-4 sm:mt-6 font-mono relative z-10" style={{ color: isDark ? THEME.TEXT_MAIN : '#333' }}>
                    Awaiting final network handshake. Please check back for mission launch details.
                </p>

                {/* Bottom Right Corner Detail */}
                <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 border-b-4 border-r-4 transform translate-x-3 translate-y-3" style={{ borderColor: primaryColor, boxShadow: `0 0 8px ${primaryColor}a0` }} />
            </motion.div>
        </motion.div>
    );
};

// ----------------------------------------------------------------------
// 3. Main Events Component (Made Responsive)
// ----------------------------------------------------------------------

function Events() {
    const { isDark } = useContext(ThemeContext)
    
    const isLocked = true; 

    const bgColor = isDark
        ? `linear-gradient(180deg, ${THEME.BG_DARK}, #1a012a)`
        : "linear-gradient(to bottom, #f0f4f8, #eef1f5)"

    const titleColor = isDark ? THEME.PRIMARY : THEME.ACCENT
    const shadow = isDark ? `0 0 30px ${THEME.PRIMARY}a0` : `0 0 20px ${THEME.ACCENT}60`

    return (
        <section
            id="events"
            className="py-16 sm:py-24 px-4 transition-all duration-300 relative overflow-hidden"
            style={{ background: bgColor }}
        >
            {/* Background Data Stream Effect */}
            <motion.div
                className="absolute inset-0 opacity-20 pointer-events-none"
                animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                style={{
                    backgroundImage: `repeating-linear-gradient(45deg, ${THEME.PRIMARY}08 0px, ${THEME.PRIMARY}08 1px, transparent 1px, transparent 40px)`,
                    backgroundSize: "80px 80px",
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    className="text-center mb-12 sm:mb-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    {/* Refined HUD Title (Responsive Font Size) */}
                    <h2
                        className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 uppercase leading-tight"
                        style={{
                            color: titleColor,
                            textShadow: shadow,
                            fontFamily: "Orbitron, monospace",
                            letterSpacing: "0.15em",
                        }}
                    >
                        [ MISSION BRIEFING ]
                    </h2>
                    <div className={`h-1 w-24 mx-auto mb-3 ${isDark ? 'bg-gradient-to-r from-cyan-400 to-pink-400' : 'bg-indigo-500'}`} />
                    <p
                        className="text-sm  mb-8sm:text-lg mb-24 uppercase"
                        style={{
                            color: isDark ? `${THEME.TEXT_MAIN}a0` : `#333`,
                            fontFamily: "Share Tech Mono, monospace",
                        }}
                    >
                        SCROLL TO LOAD OBJECTIVES &gt;&gt; TARGET ACQUISITION
                    </p>
                </motion.div>

                {/* Event Grid Container: Full-height canvas for the overlay (Responsive Padding) */}
                <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 relative py-16 sm:py-32"> 
                    
                    {/* --- AWESOME UNLOCK OVERLAY IS RENDERED --- */}
                    {isLocked && <EventUnlockOverlay isDark={isDark} />}
                </div>

                <motion.div
                    // MODIFIED: Increased margin top from mt-8/sm:mt-12 to mt-16/sm:mt-24 for more space
                    className="text-center mt-16 sm:mt-24"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.button
                        className="px-8 sm:px-10 my-8 py-5 sm:py-4 rounded-sm text-sm sm:text-lg uppercase font-bold border-2"
                        whileHover={{
                            boxShadow: isDark
                                ? `0 0 30px ${THEME.PRIMARY}80, inset 0 0 20px ${THEME.PRIMARY}30`
                                : `0 0 30px ${THEME.ACCENT}60, inset 0 0 20px ${THEME.ACCENT}20`,
                        }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            borderColor: titleColor,
                            color: titleColor,
                            background: isDark ? `${THEME.PRIMARY}15` : `${THEME.ACCENT}15`,
                            fontFamily: "Orbitron, monospace",
                        }}
                    >
                        [ ACCESS AUTHORIZATION TERMINAL ]
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

// ----------------------------------------------------------------------
// 4. Theme Switcher Component
// ----------------------------------------------------------------------

function ThemeSwitcher() {
    const { isDark, toggleTheme } = useContext(ThemeContext);
    const color = isDark ? THEME.PRIMARY : THEME.ACCENT;

    return (
        <motion.button
            onClick={toggleTheme}
            className="p-3 mt-8 font-semibold rounded-xl transition-all duration-300 focus:outline-none"
            style={{ 
                color: isDark ? 'black' : 'white', 
                backgroundColor: color,
                fontFamily: "Orbitron, monospace",
                boxShadow: isDark ? `0 0 20px ${color}` : `0 0 20px ${color}`,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            Switch to {isDark ? "Light" : "Dark"} Mode
        </motion.button>
    );
}


// ----------------------------------------------------------------------
// 5. Main App Component
// ----------------------------------------------------------------------

export default function App() {
  const { isDark } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      {/* We need some padding on the body for a better visual context */}
      <div className="min-h-screen flex flex-col items-center pt-8 sm:pt-16 pb-0" style={{ 
        background: isDark 
            ? `radial-gradient(circle at top left, ${THEME.BG_DARK} 0%, #000000 70%)`
            : `linear-gradient(to bottom, #ffffff 0%, #f0f4f8 100%)`,
        fontFamily: "Inter, sans-serif" 
      }}>
        <style>{`
          /* Custom font import for style */
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
          
          /* Ensures the body takes up full height for the sticky footer effect */
          html, body, #root { 
            height: 100%; 
            margin: 0; 
            padding: 0;
            overflow-x: hidden;
          }
        `}</style>
        <header className="p-4 text-center">
            <h1 className="text-4xl font-bold mb-2" style={{ color: isDark ? THEME.PRIMARY : THEME.ACCENT, fontFamily: 'Orbitron, monospace' }}>
                igNITion 2025 Tech Fest
            </h1>
            <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>An incredibly responsive event teaser!</p>
            <ThemeSwitcher />
        </header>
        
        <Events />
      </div>
    </ThemeProvider>
  );
}

