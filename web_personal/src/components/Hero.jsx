import { useEffect, useState } from 'react'

const roles = [
  'Full Stack Developer',
  'React Enthusiast',
  'Problem Solver',
  'UI/UX Craftsperson',
]

function useTypewriter(words) {
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing')
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const word = words[idx % words.length]
    let timer

    if (phase === 'typing') {
      if (text.length < word.length) {
        timer = setTimeout(() => setText(word.slice(0, text.length + 1)), 80)
      } else {
        timer = setTimeout(() => setPhase('deleting'), 2200)
      }
    } else {
      if (text.length > 0) {
        timer = setTimeout(() => setText(prev => prev.slice(0, -1)), 45)
      } else {
        setIdx(prev => (prev + 1) % words.length)
        setPhase('typing')
      }
    }

    return () => clearTimeout(timer)
  }, [text, phase, idx, words])

  return text
}

export default function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section className="hero" id="about">
      <div className="hero-bg" />
      <div className="hero-content">
        <p className="hero-greeting mono">Hi, I'm</p>
        <h1 className="hero-name">Your Name</h1>
        <p className="hero-role">
          <span className="mono accent">&gt;_</span>
          <span className="hero-typed">{typed}</span>
          <span className="cursor-blink">|</span>
        </p>
        <p className="hero-bio">
          Passionate developer building clean, performant web experiences.
          I turn ideas into polished digital products with modern technologies
          and a sharp eye for detail.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Get in touch</a>
        </div>
        <div className="hero-scroll">
          <span>scroll</span>
          <div className="scroll-line" />
        </div>
      </div>
    </section>
  )
}
