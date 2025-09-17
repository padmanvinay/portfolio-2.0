"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type Orb = {
  id: number
  x: number
  y: number
  size: number
  color: string
  speedX: number
  speedY: number
  opacity: number
}

export function FloatingOrbs({ className }: { className?: string }) {
  const [orbs, setOrbs] = useState<Orb[]>([])

  useEffect(() => {
    const colors = ["rgba(34, 211, 238, 0.4)", "rgba(167, 139, 250, 0.4)", "rgba(16, 185, 129, 0.4)"]

    const initialOrbs: Orb[] = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 100 + 50,
      color: colors[Math.floor(Math.random() * colors.length)],
      speedX: (Math.random() - 0.5) * 0.5,
      speedY: (Math.random() - 0.5) * 0.5,
      opacity: Math.random() * 0.3 + 0.1,
    }))

    setOrbs(initialOrbs)

    const animateOrbs = () => {
      setOrbs((prevOrbs) =>
        prevOrbs.map((orb) => ({
          ...orb,
          x: orb.x + orb.speedX,
          y: orb.y + orb.speedY,
          x:
            orb.x > window.innerWidth + orb.size
              ? -orb.size
              : orb.x < -orb.size
                ? window.innerWidth + orb.size
                : orb.x + orb.speedX,
          y:
            orb.y > window.innerHeight + orb.size
              ? -orb.size
              : orb.y < -orb.size
                ? window.innerHeight + orb.size
                : orb.y + orb.speedY,
        })),
      )
    }

    const interval = setInterval(animateOrbs, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={cn("fixed inset-0 pointer-events-none z-10", className)}>
      {orbs.map((orb) => (
        <div
          key={orb.id}
          className="absolute rounded-full blur-xl"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: orb.color,
            opacity: orb.opacity,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  )
}
