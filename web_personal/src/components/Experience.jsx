import { useInView } from '../hooks/useInView'

const jobs = [
  {
    company: 'Wimad',
    role: 'IT Specialist',
    period: '2023 — 2025',
    bullets: [
      'Led Operating Systems error handling, user management and system optimization',
      'Implemented and maintained dockerized applications, improving deployment efficiency by 30%',
      'Provided technical support and troubleshooting for internal teams, reducing downtime by 25%',
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
