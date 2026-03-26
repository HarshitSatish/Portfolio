import './Experience.css'
import { experience_1 } from '../Data/Portfoliodata'
import { useState, useEffect, useRef } from 'react'

function Experience() {
  const [active, setActive] = useState(0)
  const itemRefs = useRef([])

  useEffect(() => {
    const observers = itemRefs.current.map((el, i) => {
      if (!el) return null
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(i)
        },
        { threshold: 0.6 }
      )
      observer.observe(el)
      return observer
    })
    return () => observers.forEach(o => o && o.disconnect())
  }, [])

  return (
    <section id="experience" className='experience'>
      <div className='section'>
        <h2 className='exp-heading'>Experience</h2>
        <div className='exp-divider' />

        <div className='exp-container box'>

          {/* Left — sticky timeline */}
          <div className='exp-timeline'>
            <div className='exp-line' />
            {experience_1.map((item, i) => (
              <div
                key={i}
                className={`exp-timeline-item ${active === i ? 'active' : ''}`}
              >
                <div className='exp-dot' />
                <div className='exp-timeline-text'>
                  <p className='exp-company'>{item.Company}</p>
                  <p className='exp-duration'>{item.Duration}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — scrollable experience items */}
          <div className='exp-scroll'>
            {experience_1.map((item, i) => (
              <div
                key={i}
                className='exp-details'
                ref={el => itemRefs.current[i] = el}
              >
                <h3 className='exp-position'>{item.Position}</h3>
                <p className='exp-company-name'>{item.Company}</p>
                <p className='exp-duration-text'>{item.Duration}</p>
                <ul className='exp-responsibilities'>
                  {item.Responsibilities.map((r, j) => (
                    <li key={j}>{r}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience