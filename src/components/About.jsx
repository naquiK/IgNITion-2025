import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const headingRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  const stats = [
    { number: '500+', label: 'PLAYERS' },
    { number: '20+', label: 'QUESTS' },
    { number: '10+', label: 'GUILDS' },
    { number: '2', label: 'DAYS' },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-[#0a0e27] via-[#1a0033] to-[#0a0e27] relative overflow-hidden">
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          ref={headingRef}
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-5xl md:text-6xl font-black mb-4"
            style={{
              color: '#00ff88',
              textShadow: '0 0 30px rgba(0, 255, 136, 0.8)',
              fontFamily: 'Orbitron, monospace',
              letterSpacing: '0.1em',
            }}
          >
            [ ABOUT THE ARENA ]
          </h2>
          <p 
            className="text-slate-300 text-lg max-w-2xl mx-auto"
            style={{
              color: 'rgba(0, 255, 136, 0.7)',
            }}
          >
            DIVE INTO THE DIGITAL UNIVERSE
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hud-frame p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 153, 255, 0.05))',
              border: '2px solid rgba(0, 255, 136, 0.3)',
            }}
          >
            <h3 
              className="text-2xl font-bold mb-4"
              style={{
                color: '#00ff88',
                fontFamily: 'Orbitron, monospace',
              }}
            >
              &gt; WHAT IS igNITion?
            </h3>
            <p className="text-slate-300 leading-relaxed mb-4">
             Ignition-2025 is more than just a Techfest—it's a celebration of creativity and the boundless possibilities of technology. Designed to ignite the spark of curiosity and passion in students, tech enthusiasts, and professionals alike, Ignition serves as a platform where the brightest minds converge to push the boundaries of science, engineering, and digital transformation.
            </p>
            <p className="text-slate-400 leading-relaxed">
              With 20+ epic quests spanning code battles, design warfare, hackathon raids, and knowledge seminars, igNITion offers the ultimate immersive tech gaming experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="hud-frame p-8"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 153, 255, 0.1), rgba(0, 255, 136, 0.05))',
              border: '2px solid rgba(0, 153, 255, 0.3)',
            }}
          >
            <h3 
              className="text-2xl font-bold mb-4"
              style={{
                color: '#0099ff',
                fontFamily: 'Orbitron, monospace',
              }}
            >
              &gt; GAUTAM BUDDHA UNIVERSITY
            </h3>
            <p className="text-slate-300 leading-relaxed mb-4">
             Situated in the tech-bowl of India, Greater Noida, Gautam Buddha University is a leading institution that offers graduate and post-graduate degrees in diverse fields of education. GBU polishes the imperfections within its students and helps them sparkle like diamonds. Gautam Buddha University boasts a robust infrastructure and has a grand campus, which is probably one of the most picturesque and breathtaking in the entire country, if not the most. It’s not a wonder why the university has become a favoured venue for conducting key events, both of national and international importance.
            </p>
            <p className="text-slate-400 leading-relaxed">
              igNITion embodies GBU's mission to empower tomorrow's tech leaders through experiential battle arenas and industry collaboration.
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="hud-frame p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{
                background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 153, 255, 0.05))',
                border: '2px solid rgba(0, 255, 136, 0.3)',
                boxShadow: '0 0 20px rgba(0, 255, 136, 0.2), inset 0 0 20px rgba(0, 255, 136, 0.05)',
              }}
            >
              <h3 
                className="text-3xl md:text-4xl font-black mb-2"
                style={{
                  color: '#00ff88',
                  textShadow: '0 0 10px rgba(0, 255, 136, 0.8)',
                }}
              >
                {stat.number}
              </h3>
              <p 
                className="text-sm md:text-base"
                style={{
                  color: 'rgba(0, 255, 136, 0.6)',
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '0.8rem',
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="neon-btn px-8 py-4 rounded-none text-lg"
            whileHover={{
              boxShadow: '0 0 30px rgba(0, 255, 136, 0.8), inset 0 0 20px rgba(0, 255, 136, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            [ LEARN LORE ]
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
