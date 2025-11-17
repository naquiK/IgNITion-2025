import { motion } from 'framer-motion';
import SponsorCard from './SponsorCard';

export default function Sponsors() {
  const sponsors = {
    platinum: [
      {
        name: 'TechCorp',
        description: 'Leading tech solutions provider',
        icon: '⚡',
        level: 'Platinum',
      },
      {
        name: 'InnovateLabs',
        description: 'Innovation and research hub',
        icon: '🔬',
        level: 'Platinum',
      },
    ],
    gold: [
      {
        name: 'CodeMasters',
        description: 'Software development company',
        icon: '💻',
        level: 'Gold',
      },
      {
        name: 'DesignHub',
        description: 'Creative design agency',
        icon: '🎨',
        level: 'Gold',
      },
      {
        name: 'CloudSync',
        description: 'Cloud infrastructure provider',
        icon: '☁️',
        level: 'Gold',
      },
    ],
    silver: [
      {
        name: 'DataFlow',
        description: 'Data analytics platform',
        icon: '📊',
        level: 'Silver',
      },
      {
        name: 'WebDynamics',
        description: 'Web development tools',
        icon: '🌐',
        level: 'Silver',
      },
      {
        name: 'SecureNet',
        description: 'Cybersecurity solutions',
        icon: '🔐',
        level: 'Silver',
      },
      {
        name: 'AIML Insights',
        description: 'AI/ML research firm',
        icon: '🤖',
        level: 'Silver',
      },
    ],
  };

  return (
    <section id="sponsors" className="py-20 px-4 bg-gradient-to-b from-[#0a0e27] via-[#1a0033] to-[#0a0e27] relative overflow-hidden">
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0] }}
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
            [ GUILD PARTNERS ]
          </h2>
          <p 
            className="text-slate-300 text-lg"
            style={{
              color: 'rgba(0, 255, 136, 0.7)',
            }}
          >
            POWERFUL ALLIES SUPPORTING THE ARENA
          </p>
        </motion.div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <h3 
            className="text-2xl font-bold text-center mb-8"
            style={{
              color: '#FFD700',
              fontFamily: 'Orbitron, monospace',
              letterSpacing: '0.05em',
            }}
          >
            ⚔️ PLATINUM TIER
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {sponsors.platinum.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} index={index} />
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <h3 
            className="text-2xl font-bold text-center mb-8"
            style={{
              color: '#FFA500',
              fontFamily: 'Orbitron, monospace',
              letterSpacing: '0.05em',
            }}
          >
            🏅 GOLD TIER
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {sponsors.gold.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} index={index + 2} />
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div>
          <h3 
            className="text-2xl font-bold text-center mb-8"
            style={{
              color: '#C0C0C0',
              fontFamily: 'Orbitron, monospace',
              letterSpacing: '0.05em',
            }}
          >
            🛡️ SILVER TIER
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {sponsors.silver.map((sponsor, index) => (
              <SponsorCard key={index} sponsor={sponsor} index={index + 5} />
            ))}
          </div>
        </div>

        <motion.div
          className="text-center mt-16"
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
            [ BECOME A PARTNER ]
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
