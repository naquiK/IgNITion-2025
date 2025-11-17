import { motion } from 'framer-motion';

export default function SponsorCard({ sponsor, index }) {
  const sponsorBgImages = {
    'TechCorp': '/sponsor-tech.jpg',
    'InnovateLabs': '/sponsor-labs.jpg',
    'CodeMasters': '/sponsor-code.jpg',
    'DesignHub': '/sponsor-design.jpg',
    'CloudSync': '/sponsor-cloud.jpg',
    'DataFlow': '/sponsor-data.jpg',
    'WebDynamics': '/sponsor-web.jpg',
    'SecureNet': '/sponsor-security.jpg',
    'AIML Insights': '/sponsor-ai.jpg',
  };

  const bgImage = sponsorBgImages[sponsor.name] || '/placeholder.svg?key=hibi9';

  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        y: -5,
      }}
      style={{
        background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 153, 255, 0.05))',
        border: '2px solid rgba(0, 255, 136, 0.3)',
        borderRadius: '0px',
        padding: '24px',
        textAlign: 'center',
        boxShadow: '0 0 20px rgba(0, 255, 136, 0.2)',
      }}
    >
      <div 
        className="h-20 flex items-center justify-center mb-4 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(0, 255, 136, 0.5), rgba(0, 153, 255, 0.3)), url('${bgImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          border: '1px solid rgba(0, 255, 136, 0.2)',
          boxShadow: '0 0 20px rgba(0, 255, 136, 0.3) inset',
        }}
      >
        <motion.span 
          className="text-3xl relative z-10 drop-shadow-lg"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          {sponsor.icon}
        </motion.span>
      </div>

      <h3 
        className="text-lg font-bold mb-2 group-hover:scale-105 transition-transform"
        style={{
          color: '#00ff88',
          textShadow: '0 0 10px rgba(0, 255, 136, 0.6)',
          fontFamily: 'Orbitron, monospace',
        }}
      >
        {sponsor.name}
      </h3>

      <p className="text-sm text-slate-400 mb-3">{sponsor.description}</p>

      <div className="mb-4">
        <span 
          className="text-xs font-bold px-3 py-1 inline-block"
          style={{
            background: 'rgba(0, 255, 136, 0.1)',
            color: '#00ff88',
            border: '1px solid rgba(0, 255, 136, 0.3)',
            fontFamily: 'Orbitron, monospace',
            letterSpacing: '0.05em',
          }}
        >
          [{sponsor.level.toUpperCase()}]
        </span>
      </div>

      <motion.a
        href="#"
        className="inline-block text-sm font-semibold transition-colors"
        style={{
          color: '#0099ff',
          fontFamily: 'Orbitron, monospace',
        }}
        whileHover={{
          textShadow: '0 0 10px rgba(0, 153, 255, 0.8)',
        }}
      >
        [ DETAILS ]
      </motion.a>
    </motion.div>
  );
}
