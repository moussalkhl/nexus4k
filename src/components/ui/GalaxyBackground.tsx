'use client'

import { useEffect, useRef } from 'react'
import styles from './GalaxyBackground.module.css'

export function GalaxyBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = window.innerWidth
    let height = window.innerHeight

    // We store stars data
    const stars: {
      x: number
      y: number
      radius: number
      speed: number
      alpha: number
      decrease: boolean
    }[] = []

    const initStars = () => {
      stars.length = 0
      // Adjust density based on screen size for performance
      const numStars = Math.floor((width * height) / 2500)
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.2,
          speed: Math.random() * 0.3 + 0.05,
          alpha: Math.random(),
          decrease: Math.random() > 0.5,
        })
      }
    }

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
      initStars()
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Set global composite operation for better glow effects
      ctx.globalCompositeOperation = 'lighter'

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i]
        
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`
        ctx.fill()

        // Slow cinematic movement (drifting left and up)
        star.y -= star.speed
        star.x -= star.speed * 0.2

        // Wrap around screen
        if (star.y < 0) {
          star.y = height
          star.x = Math.random() * width
        }
        if (star.x < 0) {
          star.x = width
          star.y = Math.random() * height
        }

        // Twinkling logic
        if (star.decrease) {
          star.alpha -= 0.005
          if (star.alpha <= 0.1) star.decrease = false
        } else {
          star.alpha += 0.005
          if (star.alpha >= 0.8) star.decrease = true
        }
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const categories = [
    { name: 'Movies', className: styles.movies },
    { name: 'Sports', className: styles.sports },
    { name: 'Series', className: styles.series },
    { name: 'Documentaries', className: styles.docs },
    { name: 'Anime', className: styles.anime },
  ]

  return (
    <div className={styles.container} aria-hidden="true">
      {/* Dynamic Starfield Canvas */}
      <canvas ref={canvasRef} className={styles.canvas} />
      
      {/* Nebula Effects (CSS blurred layers) */}
      <div className={`${styles.nebula} ${styles.nebula1}`} />
      <div className={`${styles.nebula} ${styles.nebula2}`} />
      <div className={`${styles.nebula} ${styles.nebula3}`} />

      {/* Orbiting Planets Container */}
      <div className={styles.planetsContainer}>
        {categories.map((cat) => (
          <div key={cat.name} className={styles.planetWrapper}>
            <div 
              className={`${styles.planet} ${cat.className}`} 
              data-category={cat.name} 
            />
          </div>
        ))}
      </div>
    </div>
  )
}
