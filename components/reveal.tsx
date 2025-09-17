"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number // milliseconds
  direction?: "up" | "down" | "left" | "right"
  threshold?: number
}

export function Reveal({ children, className, delay = 0, direction = "up", threshold = 0.2 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setVisible(true)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const t = window.setTimeout(() => setVisible(true), delay)
            io.unobserve(e.target)
            // cleanup timer when unmounting early
            return () => window.clearTimeout(t)
          }
        })
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [delay, threshold])

  const start = {
    up: "opacity-0 translate-y-6",
    down: "opacity-0 -translate-y-6",
    left: "opacity-0 translate-x-6",
    right: "opacity-0 -translate-x-6",
  }[direction]

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform will-change-opacity",
        visible ? "opacity-100 translate-x-0 translate-y-0" : start,
        className,
      )}
    >
      {children}
    </div>
  )
}
