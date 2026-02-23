import { useEffect, useRef } from 'react'
import './App.css'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import Skills     from './components/Skills'
import Experience from './components/Experience'
import Projects   from './components/Projects'
import Contact    from './components/Contact'

export default function App() {
  const glowRef = useRef(null)

  // Smooth cursor glow that follows the mouse with a slight lag
  useEffect(() => {
    const mouse   = { x: -500, y: -500 }
    const current = { x: -500, y: -500 }

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    window.addEventListener('mousemove', onMove, { passive: true })

    let raf
    const loop = () => {
      current.x += (mouse.x - current.x) * 0.08
      current.y += (mouse.y - current.y) * 0.08
      if (glowRef.current) {
        glowRef.current.style.left = `${current.x}px`
        glowRef.current.style.top  = `${current.y}px`
      }
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
