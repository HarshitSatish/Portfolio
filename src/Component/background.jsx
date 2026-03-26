import { useEffect, useRef } from 'react'
import './Background.css'

function Background() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const labels = [
      '92%', '1.2k', '0.87', 'p<0.05', 'n=1024',
      'R²=0.94', '↑18%', '3.4σ', 'μ=72', 'F1=0.91',
      '99.9%', 'Δ+12', '0.003', 'AUC=0.96', '±0.02',
      '10k', 'r=0.88', 'MAE=1.3', 'acc=94%', 'loss=0.12'
    ]

    const placedLabels = labels.map(text => ({
      text,
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      opacity: Math.random() * 0.25 + 0.08,
      size: Math.random() * 4 + 10
    }))

    function drawGrid() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const spacing = 40
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.35)'
      ctx.lineWidth = 1.5

      for (let x = 0; x <= canvas.width; x += spacing) {
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
      }
      for (let y = 0; y <= canvas.height; y += spacing) {
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
      }
      ctx.stroke()
    }

    function drawLabels() {
  placedLabels.forEach(label => {
    ctx.font = `${label.size}px Inter, monospace`
    ctx.fillStyle = `rgba(180, 180, 180, ${label.opacity + 0.2})`
    ctx.fillText(label.text, label.x, label.y)
  })
    }

    function draw() {
      drawGrid()
      drawLabels()
    }

    draw()

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      draw()
    })

  }, [])

  return <canvas ref={canvasRef} className="background-canvas" />
}

export default Background