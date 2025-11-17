import { motion } from 'framer-motion';
import EventCard from './EventCard';

export default function Events() {
  const events = [
    {
      name: 'CODE CLASH',
      description: 'Competitive programming tournament with live challenges',
      category: 'CODING BATTLE',
      prize: '50,000',
      icon: '⚔️',
    },
    {
      name: 'UI/UX WARFARE',
      description: 'Design innovative user interfaces and experiences',
      category: 'DESIGN QUEST',
      prize: '30,000',
      icon: '🎨',
    },
    {
      name: 'HACKATHON RAID',
      description: 'Build amazing projects in 24 hours with your team',
      category: 'DEVELOPMENT',
      prize: '1,00,000',
      icon: '🚀',
    },
    {
      name: 'WEB WARRIOR',
      description: 'Full-stack web development competition',
      category: 'WEB DEV',
      prize: '40,000',
      icon: '🌐',
    },
    {
      name: 'AI NEXUS',
      description: 'Solve problems using machine learning and AI',
      category: 'AI/ML',
      prize: '60,000',
      icon: '🤖',
    },
    {
      name: 'CYBER SHIELD',
      description: 'Test your cybersecurity skills in this thrilling quest',
      category: 'SECURITY',
      prize: '35,000',
      icon: '🔐',
    },
  ];

  return (
    <section id="events" className="py-20 px-4 bg-gradient-to-b from-[#0a0e27] via-[#1a0033] to-[#0a0e27] relative overflow-hidden">
      <motion.div
        className="absolute top-40 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
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
            [ AVAILABLE QUESTS ]
          </h2>
          <p 
            className="text-slate-300 text-lg max-w-2xl mx-auto"
            style={{
              color: 'rgba(0, 255, 136, 0.7)',
            }}
          >
            SELECT YOUR BATTLE AND CLAIM VICTORY
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} event={event} index={index} />
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="neon-btn px-10 py-4 rounded-none text-lg"
            whileHover={{
              boxShadow: '0 0 30px rgba(0, 255, 136, 0.8), inset 0 0 20px rgba(0, 255, 136, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            [ VIEW ALL QUESTS ]
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
