import { useInView } from '../hooks/useInView'

const skills = {
  Frontend: ['React', 'TypeScript', 'JavaScript', 'HTML & CSS', 'Tailwind CSS', 'Next.js'],
  Backend:  ['Node.js', 'Express', 'Python', 'REST APIs', 'PostgreSQL', 'MongoDB'],
  Tools:    ['Git', 'Vite', 'Docker', 'Figma', 'Linux', 'CI/CD'],
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section className="section" id="skills">
      <div className="container" ref={ref}>
        <p className="label">// skills</p>
        <h2 className={`section-title fade-in${inView ? ' visible' : ''}`}>
          Tech Stack
        </h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], i) => (
            <div
              key={category}
              className={`skills-group fade-in${inView ? ' visible' : ''}`}
              style={{ transitionDelay: `${i * 0.12 + 0.1}s` }}
            >
              <h3 className="skills-category">{category}</h3>
              <div className="skills-tags">
                {items.map(skill => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
