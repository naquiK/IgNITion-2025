"use client"

import { useState, useContext } from "react"
import { motion } from "framer-motion"
import { ThemeContext } from "../context/ThemeContext"

export default function Contact() {
  const { isDark } = useContext(ThemeContext)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    /* Added light mode support with theme context */
    <section
      id="contact"
      className="py-20 px-4 transition-all duration-300 relative overflow-hidden"
      style={{
        background: isDark
          ? "linear-gradient(to-b, rgba(10, 14, 39, 0.9), rgba(26, 13, 62, 0.9))"
          : "linear-gradient(to-b, rgba(245, 247, 250, 0.95), rgba(232, 236, 241, 0.95))",
      }}
    >
      <motion.div
        className="absolute top-20 left-10 w-80 h-80 rounded-full blur-3xl"
        animate={{ y: [0, 50, 0], x: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        style={{
          background: isDark ? "rgba(0, 217, 255, 0.08)" : "rgba(138, 43, 226, 0.06)",
        }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-96 h-96 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0], x: [0, 50, 0] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
        style={{
          background: isDark ? "rgba(64, 0, 128, 0.08)" : "rgba(138, 43, 226, 0.08)",
        }}
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
              color: isDark ? "#00d9ff" : "#4000ff",
              textShadow: isDark ? "0 0 30px rgba(0, 217, 255, 0.8)" : "0 0 20px rgba(64, 0, 128, 0.3)",
              fontFamily: "Orbitron, monospace",
              letterSpacing: "0.1em",
            }}
          >
            [ CONTACT COMMAND ]
          </h2>
          <p
            className="text-lg"
            style={{
              color: isDark ? "rgba(0, 217, 255, 0.7)" : "rgba(64, 0, 128, 0.6)",
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
                icon: "📡",
                title: "EMAIL",
                content: "igNITion@gbu.ac.in",
              },
              {
                icon: "📞",
                title: "SIGNAL",
                content: "+91 XXXXX XXXXX",
              },
              {
                icon: "📍",
                title: "BASE",
                content: "Gautam Buddha University, Greater Noida",
              },
              {
                icon: "🔗",
                title: "NETWORK",
                content: "Instagram • Twitter • LinkedIn",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex gap-4 items-start group hud-frame p-4 transition-all duration-300"
                whileHover={{ x: 10 }}
                style={{
                  background: isDark
                    ? "linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(0, 153, 255, 0.05))"
                    : "linear-gradient(135deg, rgba(64, 0, 128, 0.08), rgba(138, 43, 226, 0.05))",
                  border: isDark ? "2px solid rgba(0, 217, 255, 0.2)" : "2px solid rgba(64, 0, 128, 0.2)",
                  boxShadow: isDark ? "0 0 15px rgba(0, 217, 255, 0.1)" : "0 0 15px rgba(64, 0, 128, 0.05)",
                }}
              >
                <span className="text-3xl mt-2">{item.icon}</span>
                <div>
                  <h3
                    className="text-lg font-bold mb-2"
                    style={{
                      color: isDark ? "#00d9ff" : "#4000ff",
                      fontFamily: "Orbitron, monospace",
                    }}
                  >
                    [{item.title}]
                  </h3>
                  <p style={{ color: isDark ? "#a0aec0" : "#6b7280" }}>{item.content}</p>
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
              className="hud-frame transition-all duration-300"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(0, 153, 255, 0.05))"
                  : "linear-gradient(135deg, rgba(64, 0, 128, 0.08), rgba(138, 43, 226, 0.05))",
                border: isDark ? "2px solid rgba(0, 217, 255, 0.3)" : "2px solid rgba(64, 0, 128, 0.3)",
                padding: "2px",
              }}
              whileHover={{
                boxShadow: isDark ? "0 0 20px rgba(0, 217, 255, 0.5)" : "0 0 20px rgba(64, 0, 128, 0.4)",
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="ENTER NAME"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-4 outline-none transition-colors"
                style={{
                  background: isDark ? "#0a0e27" : "#f5f7fa",
                  color: isDark ? "#00d9ff" : "#4000ff",
                  fontFamily: "Orbitron, monospace",
                }}
              />
            </motion.div>

            <motion.div
              className="hud-frame transition-all duration-300"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(0, 153, 255, 0.05))"
                  : "linear-gradient(135deg, rgba(64, 0, 128, 0.08), rgba(138, 43, 226, 0.05))",
                border: isDark ? "2px solid rgba(0, 217, 255, 0.3)" : "2px solid rgba(64, 0, 128, 0.3)",
                padding: "2px",
              }}
              whileHover={{
                boxShadow: isDark ? "0 0 20px rgba(0, 217, 255, 0.5)" : "0 0 20px rgba(64, 0, 128, 0.4)",
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="ENTER EMAIL"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 outline-none transition-colors"
                style={{
                  background: isDark ? "#0a0e27" : "#f5f7fa",
                  color: isDark ? "#00d9ff" : "#4000ff",
                  fontFamily: "Orbitron, monospace",
                }}
              />
            </motion.div>

            <motion.div
              className="hud-frame transition-all duration-300"
              style={{
                background: isDark
                  ? "linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(0, 153, 255, 0.05))"
                  : "linear-gradient(135deg, rgba(64, 0, 128, 0.08), rgba(138, 43, 226, 0.05))",
                border: isDark ? "2px solid rgba(0, 217, 255, 0.3)" : "2px solid rgba(64, 0, 128, 0.3)",
                padding: "2px",
              }}
              whileHover={{
                boxShadow: isDark ? "0 0 20px rgba(0, 217, 255, 0.5)" : "0 0 20px rgba(64, 0, 128, 0.4)",
              }}
            >
              <textarea
                name="message"
                placeholder="ENTER MESSAGE"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full p-4 outline-none resize-none transition-colors"
                style={{
                  background: isDark ? "#0a0e27" : "#f5f7fa",
                  color: isDark ? "#00d9ff" : "#4000ff",
                  fontFamily: "Orbitron, monospace",
                }}
              />
            </motion.div>

            <motion.button
              type="submit"
              className="neon-btn w-full py-4 rounded-none text-lg transition-all duration-300"
              whileHover={{
                boxShadow: isDark
                  ? "0 0 30px rgba(0, 217, 255, 0.8), inset 0 0 20px rgba(0, 217, 255, 0.3)"
                  : "0 0 30px rgba(64, 0, 128, 0.6), inset 0 0 20px rgba(64, 0, 128, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                borderColor: isDark ? "rgba(0, 217, 255, 0.7)" : "rgba(64, 0, 128, 0.7)",
                color: isDark ? "#00d9ff" : "#4000ff",
                background: isDark ? "rgba(0, 217, 255, 0.1)" : "rgba(64, 0, 128, 0.1)",
              }}
            >
              {submitted ? "[ TRANSMISSION SENT ]" : "[ SEND TRANSMISSION ]"}
            </motion.button>

            {submitted && (
              <motion.p
                className="text-center font-semibold"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  color: isDark ? "#00d9ff" : "#4000ff",
                  textShadow: isDark ? "0 0 10px rgba(0, 217, 255, 0.8)" : "0 0 10px rgba(64, 0, 128, 0.4)",
                }}
              >
                SIGNAL RECEIVED! AWAITING RESPONSE...
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}
