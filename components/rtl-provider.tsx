"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"

interface RTLContextType {
  isRTL: boolean
  toggleRTL: () => void
}

const RTLContext = createContext<RTLContextType | undefined>(undefined)

export function RTLProvider({ children }: { children: React.ReactNode }) {
  const [isRTL, setIsRTL] = useState(false)

  useEffect(() => {
    const savedRTL = localStorage.getItem("rtl-mode")
    if (savedRTL) {
      setIsRTL(savedRTL === "true")
    }
  }, [])

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr"
    document.documentElement.lang = isRTL ? "ar" : "en"
    localStorage.setItem("rtl-mode", isRTL.toString())
  }, [isRTL])

  const toggleRTL = () => setIsRTL(!isRTL)

  return <RTLContext.Provider value={{ isRTL, toggleRTL }}>{children}</RTLContext.Provider>
}

export function useRTL() {
  const context = useContext(RTLContext)
  if (context === undefined) {
    throw new Error("useRTL must be used within an RTLProvider")
  }
  return context
}
