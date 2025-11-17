import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    closed: { opacity: 0, y: -20, pointerEvents: 'none' },
    open: { opacity: 1, y: 0, pointerEvents: 'auto' },
  };

  const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
  };

  const navItems = ['About', 'Events', 'Sponsors', 'Gallery', 'Contact'];

  return (
    <motion.nav 
      className="fixed top-0 w-full z-40 pt-0"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div 
        className="absolute inset-0 h-20 bg-gradient-to-b from-[#0a0e27] via-[#0a0e27] to-transparent backdrop-blur-2xl border-b-2"
        style={{
          borderColor: 'rgba(0, 255, 136, 0.3)',
          boxShadow: '0 0 30px rgba(0, 255, 136, 0.2), inset 0 -1px 0 rgba(0, 255, 136, 0.1)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-4 flex items-center justify-between h-20">
        <motion.div
          className="text-2xl font-black cursor-pointer relative"
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            textShadow: [
              '0 0 15px rgba(0, 255, 136, 0.6)',
              '0 0 30px rgba(0, 255, 136, 0.9)',
              '0 0 15px rgba(0, 255, 136, 0.6)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            color: '#00ff88',
            fontFamily: 'Orbitron, monospace',
            letterSpacing: '0.1em',
          }}
        >
          igNITion
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-12">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-bold text-sm uppercase relative group"
              style={{
                color: 'rgba(0, 255, 136, 0.7)',
                fontFamily: 'Orbitron, monospace',
                letterSpacing: '0.08em',
              }}
              whileHover={{
                color: '#00ff88',
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <motion.span
                className="relative"
                whileHover={{
                  textShadow: '0 0 10px rgba(0, 255, 136, 0.9)',
                }}
              >
                [{item}]
              </motion.span>
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-green-500"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <div 
            className="relative w-6 h-5"
            style={{
              boxShadow: '0 0 15px rgba(0, 153, 255, 0.5)',
            }}
          >
            <motion.span
              className="absolute w-full h-0.5 bg-cyan-500"
              animate={isOpen ? { rotate: 45, y: 10 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute w-full h-0.5 bg-cyan-500 top-2"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute w-full h-0.5 bg-cyan-500 bottom-0"
              animate={isOpen ? { rotate: -45, y: -10 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute top-20 right-0 left-0 backdrop-blur-xl border-b-2"
            style={{
              borderColor: 'rgba(0, 255, 136, 0.3)',
              background: 'linear-gradient(180deg, rgba(10, 14, 39, 0.95), rgba(26, 0, 51, 0.9))',
              boxShadow: '0 10px 40px rgba(0, 255, 136, 0.1)',
            }}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-3 border-l-2 font-bold text-sm uppercase transition-all"
                  style={{
                    color: 'rgba(0, 255, 136, 0.7)',
                    borderColor: 'rgba(0, 255, 136, 0.3)',
                    fontFamily: 'Orbitron, monospace',
                  }}
                  custom={i}
                  variants={linkVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  onClick={() => setIsOpen(false)}
                  whileHover={{
                    x: 10,
                    color: '#00ff88',
                    borderColor: '#00ff88',
                    background: 'rgba(0, 255, 136, 0.1)',
                    textShadow: '0 0 10px rgba(0, 255, 136, 0.8)',
                  }}
                >
                  [{item}]
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
