import './Publication.css'
import { publications } from '../Data/Portfoliodata'
import useScrollReveal from '../Hooks/UseScrollreveal'

function Publications() {
  const ref = useScrollReveal()

  return (
    <section id="publications" className='publications'>
      <div className='section'>
        <h2 className='pub-heading'>Publications</h2>
        <div className='pub-divider' />

        <div className='pub-grid fade-in' ref={ref}>
          {publications.map((item, i) => (
            <div key={i} className='pub-card box'>

              {/* Publisher badge */}
              <span className='pub-badge'>{item.Publisher}</span>

              {/* Title */}
              <h3 className='pub-title'>{item.Title}</h3>

              {/* Conference if available */}
              {item.Conference && (
                <p className='pub-conference'>{item.Conference}</p>
              )}

              {/* Description if available */}
              {item.Description && (
                <p className='pub-description'>{item.Description}</p>
              )}

              {/* Footer — date and link */}
              <div className='pub-footer'>
                <span className='pub-date'>{item.Date}</span>
                {item.Link && (
                  <a href={item.Link} target='_blank' className='pub-link'>View Publication →</a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Publications