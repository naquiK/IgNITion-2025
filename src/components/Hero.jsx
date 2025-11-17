import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function Hero() {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 100, scale: 0.5, rotationX: 90 },
      { opacity: 1, y: 0, scale: 1, rotationX: 0, duration: 1.5, ease: 'back.out' }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 50, letterSpacing: '0.2em' },
      { opacity: 1, y: 0, letterSpacing: '0.05em', duration: 1.2, delay: 0.3, ease: 'power3.out' }
    );

    const glitchTl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
    glitchTl.to(titleRef.current, {
      skewX: 5,
      duration: 0.05,
      ease: 'power1.inOut',
    }).to(titleRef.current, {
      skewX: -5,
      duration: 0.05,
    }).to(titleRef.current, {
      skewX: 0,
      duration: 0.05,
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a0033] to-[#0a0e27] relative overflow-hidden flex items-center justify-center pt-20">
      <div className="absolute inset-0 opacity-20 cyber-grid" />
      
      <div className="absolute inset-0 particle-effect opacity-50" />

      <motion.div
        className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 80, -60, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.3), rgba(0, 153, 255, 0.2))',
          filter: 'drop-shadow(0 0 40px rgba(0, 255, 136, 0.6))',
        }}
      />

      <motion.div
        className="absolute bottom-20 left-20 w-96 h-96 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 50, 0],
          y: [0, -80, 60, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
        style={{
          background: 'linear-gradient(135deg, rgba(255, 0, 153, 0.3), rgba(0, 153, 255, 0.2))',
          filter: 'drop-shadow(0 0 40px rgba(0, 153, 255, 0.6))',
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full blur-3xl"
        animate={{
          x: [0, 50, -80, 0],
          y: [0, -60, 40, 0],
          scale: [0.8, 1, 0.9, 0.8],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        style={{
          background: 'linear-gradient(135deg, rgba(0, 255, 200, 0.2), rgba(255, 0, 153, 0.15))',
          filter: 'drop-shadow(0 0 30px rgba(0, 255, 200, 0.4))',
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-6"
        >
          <h1 
            className="text-9xl md:text-10xl font-black mb-4"
            style={{
              background: 'linear-gradient(90deg, #00ff88 0%, #0099ff 25%, #ff0099 50%, #0099ff 75%, #00ff88 100%)',
              backgroundSize: '300% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient-shift 4s ease infinite',
              filter: 'drop-shadow(0 0 20px rgba(0, 255, 136, 0.8)) drop-shadow(0 0 40px rgba(0, 153, 255, 0.6))',
              fontFamily: 'Orbitron, monospace',
              letterSpacing: '0.15em',
              textShadow: '0 0 50px rgba(0, 255, 136, 0.5), 0 0 100px rgba(0, 153, 255, 0.3)',
            }}
          >
            igNITion
          </h1>
          
          <motion.div 
            className="h-1 w-56 mx-auto bg-gradient-to-r from-cyan-500 via-green-500 to-cyan-500 rounded-full"
            animate={{
              boxShadow: [
                '0 0 10px rgba(0, 255, 136, 0.5)',
                '0 0 30px rgba(0, 255, 136, 0.9)',
                '0 0 10px rgba(0, 255, 136, 0.5)',
              ],
              scaleX: [1, 1.1, 1],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          />
        </motion.div>

        <motion.p
          ref={subtitleRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.2 }}
          className="text-2xl md:text-4xl font-bold mb-8 mt-8"
          style={{
            color: '#00ff88',
            textShadow: '0 0 20px rgba(0, 255, 136, 0.9), 0 0 40px rgba(0, 255, 136, 0.5)',
            fontFamily: 'Orbitron, monospace',
            letterSpacing: '0.08em',
          }}
        >
          &gt; NEURAL PROTOCOL INITIATED &lt;
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.2 }}
          className="text-slate-300 mb-12 text-lg max-w-3xl mx-auto leading-relaxed"
          style={{
            color: 'rgba(0, 255, 136, 0.85)',
            textShadow: '0 0 10px rgba(0, 255, 136, 0.5)',
          }}
        >
          ENTER THE DIGITAL ARENA | Gautam Buddha University presents the ultimate gaming-tech experience | COMPETE • INNOVATE • DOMINATE
        </motion.p>

        <motion.div
          className="flex gap-6 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1.2 }}
          variants={containerVariants}
        >
          <motion.button
            className="neon-btn px-10 py-5 rounded-none text-lg font-bold tracking-wider"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.08,
              boxShadow: '0 0 40px rgba(0, 255, 136, 1), inset 0 0 20px rgba(0, 255, 136, 0.5), 0 0 60px rgba(0, 153, 255, 0.6)',
              y: -5,
            }}
            whileTap={{ scale: 0.92 }}
          >
            [ ENTER ARENA ]
          </motion.button>

          <motion.button
            className="neon-btn px-10 py-5 rounded-none text-lg font-bold tracking-wider"
            variants={itemVariants}
            style={{ 
              color: '#0099ff', 
              borderColor: 'rgba(0, 153, 255, 0.7)',
              boxShadow: '0 0 25px rgba(0, 153, 255, 0.6), inset 0 0 15px rgba(0, 153, 255, 0.2)'
            }}
            whileHover={{ 
              scale: 1.08,
              boxShadow: '0 0 40px rgba(0, 153, 255, 1), inset 0 0 20px rgba(0, 153, 255, 0.5), 0 0 60px rgba(0, 255, 136, 0.6)',
              y: -5,
            }}
            whileTap={{ scale: 0.92 }}
          >
            [ EXPLORE QUESTS ]
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-20 text-sm font-bold"
          animate={{ y: [0, 15, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            color: '#00ff88',
            textShadow: '0 0 15px rgba(0, 255, 136, 0.8)',
            fontFamily: 'Orbitron, monospace',
            letterSpacing: '0.05em',
          }}
        >
          ↓ INITIALIZE SEQUENCE ↓
        </motion.div>
      </div>
    </section>
  );
}
