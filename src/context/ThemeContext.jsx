"use client"

import { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("theme-mode")
    if (saved) {
      setIsDark(saved === "dark")
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme-mode", isDark ? "dark" : "light")
    }
  }, [isDark, mounted])

  const toggleTheme = () => setIsDark(!isDark)

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>
}
