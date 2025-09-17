"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function Spotlight({ className }: { className?: string }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      className={cn("pointer-events-none fixed inset-0 z-30 transition-opacity duration-300", className)}
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(34, 211, 238, 0.06), transparent 80%)`,
      }}
    />
  )
}
