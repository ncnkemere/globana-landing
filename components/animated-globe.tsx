"use client"

import { useEffect, useRef } from "react"

export default function AnimatedGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 300
    canvas.height = 300

    // Colors from brand palette
    const primaryColor = "#1D3557"
    const secondaryColor = "#00BFA6"
    const accentColor = "#F4C542"

    // Globe parameters
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 120
    let rotation = 0

    // Draw globe function
    function drawGlobe() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw globe base
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.fillStyle = "#F5F6FA"
      ctx.fill()

      // Draw meridians
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI + rotation
        ctx.beginPath()
        ctx.ellipse(centerX, centerY, radius, radius * 0.2, angle, 0, Math.PI * 2)
        ctx.strokeStyle = primaryColor
        ctx.globalAlpha = 0.2
        ctx.stroke()
        ctx.globalAlpha = 1
      }

      // Draw parallels
      for (let i = 1; i < 5; i++) {
        const yOffset = (i / 5) * radius
        ctx.beginPath()
        ctx.ellipse(centerX, centerY, Math.sqrt(radius * radius - yOffset * yOffset), 5, 0, 0, Math.PI * 2)
        ctx.strokeStyle = primaryColor
        ctx.globalAlpha = 0.2
        ctx.stroke()
        ctx.globalAlpha = 1

        ctx.beginPath()
        ctx.ellipse(centerX, centerY, Math.sqrt(radius * radius - yOffset * yOffset), 5, 0, 0, Math.PI * 2)
        ctx.strokeStyle = primaryColor
        ctx.globalAlpha = 0.2
        ctx.stroke()
        ctx.globalAlpha = 1
      }

      // Draw connection points
      const points = [
        { x: -0.3, y: 0.2, color: primaryColor },
        { x: 0.5, y: -0.4, color: secondaryColor },
        { x: -0.6, y: -0.3, color: accentColor },
        { x: 0.2, y: 0.6, color: secondaryColor },
      ]

      points.forEach((point) => {
        const x = centerX + radius * point.x * Math.cos(rotation)
        const y = centerY + radius * point.y

        ctx.beginPath()
        ctx.arc(x, y, 6, 0, Math.PI * 2)
        ctx.fillStyle = point.color
        ctx.fill()
      })

      // Animate rotation
      rotation += 0.005
      requestAnimationFrame(drawGlobe)
    }

    drawGlobe()

    return () => {
      // Cleanup
    }
  }, [])

  return (
    <div className="flex justify-center py-8">
      <canvas ref={canvasRef} className="h-[300px] w-[300px]" />
    </div>
  )
}
