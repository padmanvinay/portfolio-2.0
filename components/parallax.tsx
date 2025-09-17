"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

export function useParallax(speed = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [y, setY] = useState(0)

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setY(0)
      return
    }

    let raf = 0
    let current = 0

    const update = () => {
      const rect = ref.current?.getBoundingClientRect()
      if (rect) {
        const target = rect.top * -speed
        // ease towards target for smoother, more visible motion
        current = lerp(current, target, 0.12)
        setY(current)
      }
      raf = requestAnimationFrame(update)
    }

    raf = requestAnimationFrame(update)
    return () => {
      if (raf) cancelAnimationFrame(raf)
    }
  }, [speed])

  return { ref, y }
}

export function ParallaxItem({
  speed = 0.15,
  className,
  children,
}: {
  speed?: number
  className?: string
  children: React.ReactNode
}) {
  const { ref, y } = useParallax(speed)
  return (
    <div ref={ref} className={className} style={{ transform: `translate3d(0, ${y}px, 0)`, willChange: "transform" }}>
      {children}
    </div>
  )
}
