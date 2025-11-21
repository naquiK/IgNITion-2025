"use client"

import { createContext, useState, useEffect } from "react"

export const ThemeContext = createContext()

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme-mode")
    if (saved) return saved === "dark"
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  useEffect(() => {
    localStorage.setItem("theme-mode", isDark ? "dark" : "light")
  }, [isDark])

  const toggleTheme = () => setIsDark(!isDark)

  return <ThemeContext.Provider value={{ isDark, toggleTheme }}>{children}</ThemeContext.Provider>
}
