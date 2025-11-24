"use client"

import { useState, useContext } from "react"
import { motion } from "framer-motion"
import { ThemeContext } from "../context/ThemeContext"

export default function Contact() {
  const { isDark } = useContext(ThemeContext)
  // Removed formData and setSubmitted state as the form is gone

  // Brochure Link
  const BROCHURE_LINK = "https://drive.google.com/file/d/1F0RC-mIpVZLyx4Xir0q3O_VO5Ql0Dvtr/view?usp=sharing"

  // Theme Colors
  const PRIMARY_COLOR = isDark ? "#00d9ff" : "#4000ff"; // Cyan / Indigo-Violet
  const SECONDARY_COLOR = isDark ? "#FF00FF" : "#E91E63"; // Magenta / Pink (Used for accents)

  return (
    <section
      id="contact"
      className="py-20 px-4 transition-all duration-300 relative overflow-hidden"
      style={{
        background: isDark
          ? "linear-gradient(to-b, rgba(10, 14, 39, 0.9), rgba(26, 13, 62, 0.9))"
          : "linear-gradient(to-b, rgba(245, 247, 250, 0.95), rgba(232, 236, 241, 0.95))",
      }}
    >
      {/* Animated Blur Orbs (Retained) */}
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
              color: PRIMARY_COLOR,
              textShadow: isDark ? `0 0 30px ${PRIMARY_COLOR}80` : `0 0 20px ${PRIMARY_COLOR}30`,
              fontFamily: "Orbitron, monospace",
              letterSpacing: "0.1em",
            }}
          >
            [ CONTACT COMMAND ]
          </h2>
          <p
            className="text-lg"
            style={{
              color: isDark ? `${PRIMARY_COLOR}b0` : `${PRIMARY_COLOR}80`,
            }}
          >
            REACH OUR CENTRAL COMMAND
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info (First Column - Retained) */}
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
                content: " tech.fest@gbu.ac.in",
              },
              {
                icon: "📞",
                title: "SIGNAL",
                content: "+91 6388752891",
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
                  border: isDark ? `2px solid ${PRIMARY_COLOR}30` : `2px solid ${PRIMARY_COLOR}30`,
                  boxShadow: isDark ? `0 0 15px ${PRIMARY_COLOR}10` : `0 0 15px ${PRIMARY_COLOR}05`,
                }}
              >
                <span className="text-3xl mt-2">{item.icon}</span>
                <div>
                  <h3
                    className="text-lg font-bold mb-2 uppercase"
                    style={{
                      color: PRIMARY_COLOR,
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

     
          <motion.div
            className="p-8 space-y-8 relative overflow-hidden flex flex-col justify-center min-h-[450px]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              background: isDark
                ? "linear-gradient(135deg, rgba(0, 217, 255, 0.1), rgba(0, 153, 255, 0.05))"
                : "linear-gradient(135deg, rgba(64, 0, 128, 0.08), rgba(138, 43, 226, 0.05))",
              border: isDark ? `4px solid ${PRIMARY_COLOR}40` : `4px solid ${PRIMARY_COLOR}40`,
              boxShadow: isDark ? `0 0 30px ${PRIMARY_COLOR}20` : `0 0 30px ${PRIMARY_COLOR}10`,
            }}
          >
            {/* Inner Border/Corner Detail */}
            <div className="absolute inset-4 border-2 pointer-events-none" style={{ borderColor: isDark ? `${PRIMARY_COLOR}30` : `${PRIMARY_COLOR}20` }} />
            
            <h3 
              className="text-3xl font-black uppercase text-center"
              style={{ color: PRIMARY_COLOR, fontFamily: "Orbitron, monospace" }}
            >
              [ INFO LOG &gt; REQUEST PACKET ]
            </h3>

            <p 
              className="text-center text-lg" 
              style={{ color: isDark ? "#a0aec0" : "#6b7280", fontFamily: "Share Tech Mono, monospace" }}
            >
              Download the comprehensive igNITion 2026 data packet. This file contains all mission details, event schedules, and rules for competition.
            </p>

            {/* Brochure Download Button */}
            <motion.a
              href={BROCHURE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="neon-btn block w-full py-4 text-center rounded-none text-xl uppercase font-bold transition-all duration-300 border-2 mt-4"
              whileHover={{
                scale: 1.02,
                boxShadow: isDark
                  ? `0 0 35px ${PRIMARY_COLOR}80, inset 0 0 25px ${PRIMARY_COLOR}30`
                  : `0 0 35px ${PRIMARY_COLOR}60, inset 0 0 25px ${PRIMARY_COLOR}20`,
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                borderColor: PRIMARY_COLOR,
                color: PRIMARY_COLOR,
                background: isDark ? `${PRIMARY_COLOR}1a` : `${PRIMARY_COLOR}1a`,
                fontFamily: "Orbitron, monospace",
              }}
            >
              <span className="mr-3">💾</span> [ DOWNLOAD DATA PACKET ]
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}