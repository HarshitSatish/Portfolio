import './Project.css'
import { projects } from '../Data/Portfoliodata'
import useScrollReveal from '../Hooks/UseScrollreveal'

function Projects() {
  const ref = useScrollReveal()

  return (
    <section id="projects" className='projects'>
      <div className='section'>
        <h2 className='proj-heading'>Projects</h2>
        <div className='proj-divider' />

        <div className='proj-grid fade-in' ref={ref}>
          {projects.map((item, i) => (
            <div key={i} className='proj-card box'>

              {/* Header — title and GitHub link */}
              <div className='proj-header'>
                <h3 className='proj-title'>{item.Title}</h3>
                <a href={item.Github} target='_blank' className='proj-github'>GitHub →</a>
              </div>

              {/* Description */}
              <p className='proj-description'>{item.Description}</p>

              {/* Key metrics */}
              <div className='proj-metrics'>
                {item.Metrics.map((m, j) => (
                  <span key={j} className='proj-metric'>{m}</span>
                ))}
              </div>

              {/* Tools used */}
              <div className='proj-tools'>
                {item.Tools.map((t, j) => (
                  <span key={j} className='proj-tool'>{t}</span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects