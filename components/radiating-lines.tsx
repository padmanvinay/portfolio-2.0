"use client"

import { useEffect, useRef } from "react"

export function RadiatingLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const lines: Array<{
      angle: number
      length: number
      opacity: number
      speed: number
      maxLength: number
    }> = []

    // Create radiating lines
    for (let i = 0; i < 12; i++) {
      lines.push({
        angle: i * 30 * (Math.PI / 180), // 30 degrees apart
        length: 0,
        opacity: 0,
        speed: 0.5 + Math.random() * 0.5,
        maxLength: 200 + Math.random() * 300,
      })
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      lines.forEach((line) => {
        // Animate line growth
        if (line.length < line.maxLength) {
          line.length += line.speed
          line.opacity = Math.min(0.3, line.length / 100)
        } else {
          line.opacity = Math.max(0, line.opacity - 0.005)
          if (line.opacity <= 0) {
            line.length = 0
            line.maxLength = 200 + Math.random() * 300
          }
        }

        if (line.opacity > 0) {
          const endX = centerX + Math.cos(line.angle) * line.length
          const endY = centerY + Math.sin(line.angle) * line.length

          // Create gradient for the line
          const gradient = ctx.createLinearGradient(centerX, centerY, endX, endY)
          gradient.addColorStop(0, `rgba(34, 211, 238, ${line.opacity})`)
          gradient.addColorStop(0.5, `rgba(167, 139, 250, ${line.opacity * 0.7})`)
          gradient.addColorStop(1, `rgba(34, 211, 238, 0)`)

          ctx.strokeStyle = gradient
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(centerX, centerY)
          ctx.lineTo(endX, endY)
          ctx.stroke()
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="pointer-events-none absolute inset-0 z-10" style={{ mixBlendMode: "screen" }} />
  )
}
