"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export function AnimatedGrid({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const gridSize = 50
    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      const time = Date.now() * 0.001

      // Draw animated grid
      ctx.strokeStyle = "rgba(34, 211, 238, 0.1)"
      ctx.lineWidth = 1

      for (let x = 0; x < canvas.offsetWidth; x += gridSize) {
        const opacity = 0.05 + Math.sin(time + x * 0.01) * 0.03
        ctx.strokeStyle = `rgba(34, 211, 238, ${opacity})`
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.offsetHeight)
        ctx.stroke()
      }

      for (let y = 0; y < canvas.offsetHeight; y += gridSize) {
        const opacity = 0.05 + Math.sin(time + y * 0.01) * 0.03
        ctx.strokeStyle = `rgba(167, 139, 250, ${opacity})`
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.offsetWidth, y)
        ctx.stroke()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 pointer-events-none", className)}
      style={{ width: "100%", height: "100%" }}
    />
  )
}
