import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

export default function Loader({ onLoadComplete }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const scanlineRef = useRef(null);
  const coresRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;
    const progress = progressRef.current;
    const scanline = scanlineRef.current;

    const tl = gsap.timeline();

    tl.to(container, {
      duration: 0.5,
      opacity: 1,
    })
      .to(text, {
        duration: 2,
        opacity: 1,
        y: 0,
        rotationX: 0,
        scale: 1,
        ease: 'back.out',
      }, 0.2)
      .to(progress, {
        duration: 4,
        width: '100%',
        ease: 'power2.inOut',
      }, 0)
      .to(scanline, {
        duration: 3.5,
        height: '100%',
        ease: 'power1.inOut',
      }, 0)
      .to(container, {
        duration: 1,
        opacity: 0,
        delay: 1,
        onComplete: () => {
          onLoadComplete();
        },
      });

    const glitchTl = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    glitchTl
      .to(text, {
        skewX: 8,
        scaleY: 0.92,
        duration: 0.08,
        ease: 'power1.inOut',
      })
      .to(text, {
        skewX: -8,
        scaleY: 1.08,
        duration: 0.08,
      })
      .to(text, {
        skewX: 4,
        scaleY: 0.98,
        duration: 0.08,
      })
      .to(text, {
        skewX: 0,
        scaleY: 1,
        duration: 0.08,
      });

    coresRef.current.forEach((core, index) => {
      const delay = index * 0.3;
      gsap.to(core, {
        duration: 5 + index,
        y: gsap.utils.random(-50, 50),
        x: gsap.utils.random(-50, 50),
        rotation: 360,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay,
      });
    });
  }, [onLoadComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-gradient-to-br from-[#0d0221] via-[#1a0a3e] to-[#0d0221] flex items-center justify-center z-50 opacity-0 overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-40 cyber-grid" />

      {/* Animated core orbs */}
      <motion.div
        ref={(el) => (coresRef.current[0] = el)}
        className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{
          scale: [0.6, 1.5, 0.6],
          opacity: [0.3, 0.9, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{
          background: 'linear-gradient(135deg, rgba(255, 0, 200, 0.6), rgba(0, 217, 255, 0.3))',
          filter: 'drop-shadow(0 0 40px rgba(255, 0, 200, 0.8))',
        }}
      />

      <motion.div
        ref={(el) => (coresRef.current[1] = el)}
        className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full blur-3xl pointer-events-none"
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{
          scale: [1.3, 0.5, 1.3],
          opacity: [0.9, 0.2, 0.9],
        }}
        transition={{ duration: 6, repeat: Infinity, delay: 0.7 }}
        style={{
          background: 'linear-gradient(135deg, rgba(255, 0, 100, 0.6), rgba(0, 217, 255, 0.4))',
          filter: 'drop-shadow(0 0 50px rgba(0, 217, 255, 0.8))',
        }}
      />

      <motion.div
        ref={(el) => (coresRef.current[2] = el)}
        className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full blur-2xl pointer-events-none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{
          scale: [0.8, 1.8, 0.8],
          opacity: [0.5, 0.85, 0.5],
        }}
        transition={{ duration: 7, repeat: Infinity, delay: 1.4 }}
        style={{
          background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.5), rgba(255, 0, 100, 0.3))',
          filter: 'drop-shadow(0 0 60px rgba(255, 0, 255, 0.9))',
        }}
      />

      <div className="text-center relative z-10">
        <div
          ref={textRef}
          className="mb-16 opacity-0 translate-y-12"
        >
          <motion.div 
            className="mb-16 space-y-3"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.p 
              className="text-xs uppercase tracking-[0.4em]"
              style={{ color: 'rgba(255, 0, 200, 0.8)' }}
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              ▶ SYS.IGNITION_BOOT
            </motion.p>
            <motion.p 
              className="text-xs uppercase tracking-[0.3em]"
              style={{ color: 'rgba(0, 217, 255, 0.8)' }}
              animate={{ x: [-5, 0, -5] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
            >
              ⚡ NEURAL_SYNC_INITIALIZE
            </motion.p>
            <motion.p 
              className="text-xs uppercase tracking-[0.3em]"
              style={{ color: 'rgba(255, 0, 100, 0.8)' }}
              animate={{ x: [0, -5, 0] }}
              transition={{ duration: 0.7, repeat: Infinity, delay: 0.4 }}
            >
              ◆ CORE_MATRIX_ACTIVE
            </motion.p>
          </motion.div>

          <motion.div
            animate={{
              textShadow: [
                '0 0 20px rgba(255, 0, 200, 0.6), 0 0 40px rgba(255, 0, 200, 0.4), 0 0 60px rgba(0, 217, 255, 0.3)',
                '0 0 40px rgba(255, 0, 200, 1), 0 0 80px rgba(255, 0, 200, 0.8), 0 0 120px rgba(0, 217, 255, 0.6)',
                '0 0 20px rgba(255, 0, 200, 0.6), 0 0 40px rgba(255, 0, 200, 0.4), 0 0 60px rgba(0, 217, 255, 0.3)',
              ],
              scale: [1, 1.02, 1],
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <h1 
              className="text-9xl font-black mb-8 tracking-widest"
              style={{
                color: '#ff00c8',
                fontFamily: 'Orbitron, monospace',
                letterSpacing: '0.3em',
              }}
            >
              igNITion
            </h1>
          </motion.div>

          <motion.p 
            className="text-xl font-bold mb-8"
            animate={{
              opacity: [0.5, 1, 0.5],
              letterSpacing: ['0.15em', '0.25em', '0.15em'],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              color: 'rgba(255, 0, 200, 0.9)',
              fontFamily: 'Orbitron, monospace',
              textShadow: '0 0 20px rgba(255, 0, 200, 0.8)',
            }}
          >
            [ COMMAND MATRIX ONLINE ]
          </motion.p>
        </div>

        <div className="w-96 mb-10">
          <div 
            className="h-4 rounded-sm overflow-hidden border-2 relative"
            style={{
              borderColor: 'rgba(255, 0, 200, 0.8)',
              backgroundColor: 'rgba(255, 0, 200, 0.1)',
              boxShadow: 'inset 0 0 30px rgba(255, 0, 200, 0.4), 0 0 30px rgba(255, 0, 200, 0.4)',
            }}
          >
            <div
              ref={progressRef}
              className="h-full w-0 rounded-sm relative"
              style={{
                background: 'linear-gradient(90deg, #ff00c8, #00d9ff, #ff0088, #00d9ff, #ff00c8)',
                backgroundSize: '200% 100%',
                boxShadow: '0 0 50px rgba(255, 0, 200, 1), inset 0 0 20px rgba(255, 0, 200, 0.8), 0 0 20px rgba(0, 217, 255, 0.6)',
                animation: 'gradient-shift 2.5s ease infinite',
              }}
            />
          </div>

          <motion.div 
            className="mt-4 flex justify-between text-xs uppercase tracking-widest font-bold"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <span style={{ color: 'rgba(255, 0, 200, 0.9)', textShadow: '0 0 10px rgba(255, 0, 200, 0.6)' }}>INIT_PHASE</span>
            <span style={{ color: 'rgba(0, 217, 255, 0.9)', textShadow: '0 0 10px rgba(0, 217, 255, 0.6)' }}>█████████░</span>
            <span style={{ color: 'rgba(255, 0, 200, 0.9)', textShadow: '0 0 10px rgba(255, 0, 200, 0.6)' }}>100%</span>
          </motion.div>
        </div>

        <motion.div 
          className="flex justify-center gap-12 text-sm font-bold mb-10"
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            style={{ color: 'rgba(255, 0, 200, 0.8)' }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            ● NEXUS_CORE
          </motion.div>
          <motion.div 
            style={{ color: 'rgba(0, 217, 255, 0.8)' }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
          >
            ● SYNC_MATRIX
          </motion.div>
          <motion.div 
            style={{ color: 'rgba(255, 0, 100, 0.8)' }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }}
          >
            ● MODULE_GRID
          </motion.div>
        </motion.div>

        <motion.p 
          className="text-base font-bold"
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.9, 1.15, 0.9],
            letterSpacing: ['0.1em', '0.3em', '0.1em'],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            color: '#00d9ff',
            textShadow: '0 0 30px rgba(0, 217, 255, 1), 0 0 60px rgba(0, 217, 255, 0.8)',
            fontFamily: 'Orbitron, monospace',
            fontWeight: '900',
          }}
        >
          &gt;_ AWAITING SYSTEM COMMAND...
        </motion.p>
      </div>

      <div
        ref={scanlineRef}
        className="absolute top-0 left-0 right-0 h-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent pointer-events-none"
        style={{
          animation: 'scanline-move 8s linear infinite',
        }}
      />
    </div>
  );
}
