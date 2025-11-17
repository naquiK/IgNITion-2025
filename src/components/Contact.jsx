import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-[#0a0e27] via-[#1a0033] to-[#0a0e27] relative overflow-hidden">
      <motion.div
        className="absolute top-20 left-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0], x: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Infinity, delay: 0.5 }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
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
            [ CONTACT COMMAND ]
          </h2>
          <p 
            className="text-slate-300 text-lg"
            style={{
              color: 'rgba(0, 255, 136, 0.7)',
            }}
          >
            REACH OUR CENTRAL COMMAND
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: '📡',
                title: 'EMAIL',
                content: 'hello@ignition2025.com',
              },
              {
                icon: '📞',
                title: 'SIGNAL',
                content: '+91 XXXXX XXXXX',
              },
              {
                icon: '📍',
                title: 'BASE',
                content: 'Gautam Buddha University, Greater Noida',
              },
              {
                icon: '🔗',
                title: 'NETWORK',
                content: 'Instagram • Twitter • LinkedIn',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-4 items-start group hud-frame p-4"
                whileHover={{ x: 10 }}
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 153, 255, 0.05))',
                  border: '2px solid rgba(0, 255, 136, 0.2)',
                }}
              >
                <span className="text-3xl mt-2">{item.icon}</span>
                <div>
                  <h3 
                    className="text-lg font-bold mb-2"
                    style={{
                      color: '#00ff88',
                      fontFamily: 'Orbitron, monospace',
                    }}
                  >
                    [{item.title}]
                  </h3>
                  <p className="text-slate-400">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="hud-frame"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 153, 255, 0.05))',
                border: '2px solid rgba(0, 255, 136, 0.3)',
                padding: '2px',
              }}
              whileHover={{ boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)' }}
            >
              <input
                type="text"
                name="name"
                placeholder="ENTER NAME"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-[#0a0e27] text-cyan-400 placeholder-slate-600 p-4 outline-none focus:text-green-400 transition-colors"
                style={{
                  fontFamily: 'Orbitron, monospace',
                }}
              />
            </motion.div>

            <motion.div
              className="hud-frame"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 153, 255, 0.05))',
                border: '2px solid rgba(0, 255, 136, 0.3)',
                padding: '2px',
              }}
              whileHover={{ boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)' }}
            >
              <input
                type="email"
                name="email"
                placeholder="ENTER EMAIL"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#0a0e27] text-cyan-400 placeholder-slate-600 p-4 outline-none focus:text-green-400 transition-colors"
                style={{
                  fontFamily: 'Orbitron, monospace',
                }}
              />
            </motion.div>

            <motion.div
              className="hud-frame"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 153, 255, 0.05))',
                border: '2px solid rgba(0, 255, 136, 0.3)',
                padding: '2px',
              }}
              whileHover={{ boxShadow: '0 0 20px rgba(0, 255, 136, 0.5)' }}
            >
              <textarea
                name="message"
                placeholder="ENTER MESSAGE"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full bg-[#0a0e27] text-cyan-400 placeholder-slate-600 p-4 outline-none focus:text-green-400 transition-colors resize-none"
                style={{
                  fontFamily: 'Orbitron, monospace',
                }}
              />
            </motion.div>

            <motion.button
              type="submit"
              className="neon-btn w-full py-4 rounded-none text-lg"
              whileHover={{
                boxShadow: '0 0 30px rgba(0, 255, 136, 0.8), inset 0 0 20px rgba(0, 255, 136, 0.3)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              {submitted ? '[ TRANSMISSION SENT ]' : '[ SEND TRANSMISSION ]'}
            </motion.button>

            {submitted && (
              <motion.p
                className="text-center font-semibold"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  color: '#00ff88',
                  textShadow: '0 0 10px rgba(0, 255, 136, 0.8)',
                }}
              >
                SIGNAL RECEIVED! AWAITING RESPONSE...
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
