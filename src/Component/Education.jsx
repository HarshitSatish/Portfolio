import './Education.css'
import { school } from '../Data/Portfoliodata'
import useScrollReveal from '../Hooks/UseScrollreveal'

function Education() {
  const ref = useScrollReveal()

  return (
    <section id="Education" className='Education'>
      <div className='section'>
        <h2 className='edu-heading'>Education</h2>
        <div className='edu-divider' />

        <div className='edu-box box fade-in' ref={ref}>
          <div className='edu-timeline'>

            {school.map((item, i) => (
              <div key={i} className='edu-item'>

                {/* Top — degree info */}
                <div className='edu-top'>
                  <span className='edu-degree'>{item.Level}</span>
                  <span className='edu-institution'>{item.School}</span>
                  <span className='edu-field'>{item.Major}</span>
                </div>

                {/* Middle — dot on the line */}
                <div className='edu-dot-row'>
                  <div className='edu-dot' />
                </div>

                {/* Bottom — year */}
                <div className='edu-bottom'>
                  <span className='edu-year'>{item.year}</span>
                </div>

              </div>
            ))}

            {/* Horizontal connecting line */}
            <div className='edu-line' />

          </div>
        </div>

      </div>
    </section>
  )
}

export default Education