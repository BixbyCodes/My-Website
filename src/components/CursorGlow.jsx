import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let x = 0, y = 0, cx = 0, cy = 0
    let raf

    const onMove = (e) => {
      x = e.clientX
      y = e.clientY
    }

    const lerp = () => {
      cx += (x - cx) * 0.08
      cy += (y - cy) * 0.08
      el.style.left = cx + 'px'
      el.style.top = cy + 'px'
      raf = requestAnimationFrame(lerp)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(lerp)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return <div ref={ref} className="cursor-glow" />
}
