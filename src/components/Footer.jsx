import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0e27] border-t-2 border-cyan-500/30 py-16" style={{ boxShadow: '0 -10px 30px rgba(0, 255, 136, 0.1)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 
              className="text-xl font-black mb-4"
              style={{
                color: '#00ff88',
                textShadow: '0 0 20px rgba(0, 255, 136, 0.8)',
                fontFamily: 'Orbitron, monospace',
              }}
            >
              igNITion
            </h3>
            <p className="text-slate-400 text-sm">
              The ultimate gaming-tech arena experience at Gautam Buddha University.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="font-bold mb-4"
              style={{
                color: '#00ff88',
                fontFamily: 'Orbitron, monospace',
              }}
            >
              [ QUICK LINKS ]
            </h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              {['About', 'Events', 'Sponsors', 'Gallery'].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ 
                    x: 5, 
                    color: '#00ff88',
                    textShadow: '0 0 10px rgba(0, 255, 136, 0.6)',
                  }}
                  className="cursor-pointer transition-all"
                  style={{
                    fontFamily: 'Orbitron, monospace',
                  }}
                >
                  &gt; {link}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 
              className="font-bold mb-4"
              style={{
                color: '#00ff88',
                fontFamily: 'Orbitron, monospace',
              }}
            >
              [ COMMAND ]
            </h4>
            <p className="text-slate-400 text-sm mb-2">📡 hello@ignition.com</p>
            <p className="text-slate-400 text-sm">📞 +91 XXXXX XXXXX</p>
          </div>

          {/* Social */}
          <div>
            <h4 
              className="font-bold mb-4"
              style={{
                color: '#00ff88',
                fontFamily: 'Orbitron, monospace',
              }}
            >
              [ NETWORK ]
            </h4>
            <div className="flex gap-4">
              {['Twitter', 'Instagram', 'LinkedIn'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center text-center text-xs font-bold"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 153, 255, 0.05))',
                    border: '2px solid rgba(0, 255, 136, 0.3)',
                    color: '#00ff88',
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: '0 0 15px rgba(0, 255, 136, 0.6)',
                  }}
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div 
          className="border-t border-cyan-500/30 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm"
          style={{
            fontFamily: 'Orbitron, monospace',
          }}
        >
          <p>© {currentYear} igNITion - Gautam Buddha University | All Rights Reserved</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-400 transition-colors">[ Privacy ]</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">[ Terms ]</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
