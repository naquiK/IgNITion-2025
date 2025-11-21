"use client"

import { motion } from "framer-motion"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

export default function Footer() {
  const { isDark } = useContext(ThemeContext)
  const currentYear = new Date().getFullYear()

  const primaryColor = isDark ? "#00ff88" : "#8a2be2"
  const borderColor = isDark ? "rgba(0, 255, 136, 0.3)" : "rgba(138, 43, 226, 0.3)"
  const bgColor = isDark ? "rgba(10, 14, 39, 0.95)" : "rgba(245, 247, 250, 0.95)"
  const textColor = isDark ? "rgba(200, 200, 200, 0.8)" : "rgba(100, 100, 100, 0.8)"

  return (
    <footer
      className="border-t-2 py-16 transition-all duration-300"
      style={{
        background: bgColor,
        borderColor: borderColor,
        boxShadow: isDark ? "0 -10px 30px rgba(0, 255, 136, 0.1)" : "0 -10px 30px rgba(138, 43, 226, 0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3
              className="text-lg md:text-xl font-black mb-4"
              style={{
                color: primaryColor,
                textShadow: isDark ? "0 0 20px rgba(0, 255, 136, 0.8)" : "0 0 20px rgba(138, 43, 226, 0.4)",
                fontFamily: "Orbitron, monospace",
              }}
            >
              igNITion
            </h3>
            <p className="text-sm" style={{ color: textColor }}>
              The ultimate gaming-tech arena experience at Gautam Buddha University.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="font-bold mb-4"
              style={{
                color: primaryColor,
                fontFamily: "Orbitron, monospace",
              }}
            >
              [ QUICK LINKS ]
            </h4>
            <ul className="space-y-2 text-sm" style={{ color: textColor }}>
              {["About", "Events", "Sponsors", "Gallery"].map((link) => (
                <motion.li
                  key={link}
                  whileHover={{
                    x: 5,
                    color: primaryColor,
                    textShadow: isDark ? "0 0 10px rgba(0, 255, 136, 0.6)" : "0 0 10px rgba(138, 43, 226, 0.4)",
                  }}
                  className="cursor-pointer transition-all"
                  style={{
                    fontFamily: "Orbitron, monospace",
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
                color: primaryColor,
                fontFamily: "Orbitron, monospace",
              }}
            >
              [ COMMAND ]
            </h4>
            <p className="text-sm mb-2" style={{ color: textColor }}>
              📡 igNITion@gbu.ac.in
            </p>
            <p className="text-sm" style={{ color: textColor }}>
              📞 +91 XXXXX XXXXX
            </p>
          </div>

          {/* Social */}
          <div>
            <h4
              className="font-bold mb-4"
              style={{
                color: primaryColor,
                fontFamily: "Orbitron, monospace",
              }}
            >
              [ NETWORK ]
            </h4>
            <div className="flex gap-4">
              {["Twitter", "Instagram", "LinkedIn"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center text-center text-xs font-bold transition-all duration-300"
                  style={{
                    background: isDark
                      ? "linear-gradient(135deg, rgba(0, 255, 136, 0.1), rgba(0, 153, 255, 0.05))"
                      : "linear-gradient(135deg, rgba(138, 43, 226, 0.1), rgba(138, 43, 226, 0.05))",
                    border: `2px solid ${borderColor}`,
                    color: primaryColor,
                  }}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: isDark ? "0 0 15px rgba(0, 255, 136, 0.6)" : "0 0 15px rgba(138, 43, 226, 0.4)",
                  }}
                >
                  {social[0]}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="border-t pt-8 flex flex-col md:flex-row justify-between items-center text-sm"
          style={{
            borderColor: borderColor,
            color: textColor,
            fontFamily: "Orbitron, monospace",
          }}
        >
          <p>© {currentYear} igNITion - Gautam Buddha University | All Rights Reserved</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-cyan-400 transition-colors">
              [ Privacy ]
            </a>
            <a href="#" className="hover:text-cyan-400 transition-colors">
              [ Terms ]
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
