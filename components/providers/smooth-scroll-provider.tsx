'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';

const LenisContext = createContext<Lenis | null>(null);

export const useLenis = () => useContext(LenisContext);

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
  const lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 2,
    infinite: false,
  })

  // 🔴 IMPORTANT: prevent native body scrolling
  document.documentElement.classList.add("lenis")
  document.body.style.overflow = "hidden"

  setLenis(lenisInstance)

  let rafId = 0
  const raf = (time: number) => {
    lenisInstance.raf(time)
    rafId = requestAnimationFrame(raf)
  }
  rafId = requestAnimationFrame(raf)

  return () => {
    cancelAnimationFrame(rafId)
    lenisInstance.destroy()
    document.body.style.overflow = ""
    document.documentElement.classList.remove("lenis")
    setLenis(null)
  }
}, [])


  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}
