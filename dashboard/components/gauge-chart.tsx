"use client"

import { useEffect, useRef } from "react"

interface GaugeChartProps {
  value: number
  max?: number
}

export default function GaugeChart({ value, max = 100 }: GaugeChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with higher resolution for retina displays
    const dpr = window.devicePixelRatio || 1
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)

    // Clear canvas
    ctx.clearRect(0, 0, rect.width, rect.height)

    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const radius = Math.min(centerX, centerY) * 0.8

    // Draw background arc (light gray)
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, Math.PI, 0, false)
    ctx.lineWidth = 20
    ctx.strokeStyle = "#e6e6e6"
    ctx.stroke()

    // Calculate the angle based on the value
    const percentage = value / max
    const angle = Math.PI - percentage * Math.PI

    // Create gradient
    const gradient = ctx.createLinearGradient(centerX - radius, centerY, centerX + radius, centerY)
    gradient.addColorStop(0, "#009ee2") // Light blue
    gradient.addColorStop(1, "#80fff8") // Teal

    // Draw value arc with gradient
    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, Math.PI, angle, false)
    ctx.lineWidth = 20
    ctx.strokeStyle = gradient
    ctx.stroke()

    // Draw the needle
    ctx.save()
    ctx.translate(centerX, centerY)
    ctx.rotate(angle)

    // Needle
    ctx.beginPath()
    ctx.moveTo(-5, 0)
    ctx.lineTo(0, -radius - 10)
    ctx.lineTo(5, 0)
    ctx.fillStyle = "#1c1463"
    ctx.fill()

    // Center circle
    ctx.beginPath()
    ctx.arc(0, 0, 10, 0, Math.PI * 2)
    ctx.fillStyle = "#1c1463"
    ctx.fill()

    ctx.restore()
  }, [value, max])

  return <canvas ref={canvasRef} style={{ width: "100%", height: "100%" }} />
}

