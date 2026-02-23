import { useInView } from '../hooks/useInView'

const jobs = [
  {
    company: 'Company Name',
    role: 'Senior Frontend Developer',
    period: '2023 — Present',
    bullets: [
      'Led development of React application serving 10k+ daily active users',
      'Improved page performance by 40% through code splitting and lazy loading',
      'Mentored junior developers and ran weekly code reviews',
    ],
  },
  {
    company: 'Another Company',
    role: 'Full Stack Developer',
    period: '2021 — 2023',
    bullets: [
      'Built and maintained RESTful APIs with Node.js and Express',
      'Developed responsive interfaces with React and TypeScript',
      'Collaborated closely with design team to deliver pixel-perfect UIs',
    ],
  },
  {
    company: 'Startup XYZ',
    role: 'Junior Developer',
    period: '2020 — 2021',
    bullets: [
      'Contributed to a full-stack web app using the MERN stack',
      'Wrote unit and integration tests, raising coverage from 40% to 85%',
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section className="section section-alt" id="experience">
      <div className="container" ref={ref}>
        <p className="label">// experience</p>
        <h2 className={`section-title fade-in${inView ? ' visible' : ''}`}>
          Work History
        </h2>
        <div className="timeline">
          {jobs.map((job, i) => (
            <div
              key={i}
              className={`timeline-item fade-in${inView ? ' visible' : ''}`}
              style={{ transitionDelay: `${i * 0.15 + 0.1}s` }}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{job.role}</h3>
                    <p className="timeline-company">{job.company}</p>
                  </div>
                  <span className="timeline-period">{job.period}</span>
                </div>
                <ul className="timeline-desc">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
