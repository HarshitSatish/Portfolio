import './Recommendation.css'
import { recommendation } from '../Data/Portfoliodata'
import useScrollReveal from '../Hooks/UseScrollreveal'

function Recommendations() {
  const ref = useScrollReveal()

  return (
    <section id="recommendations" className='recommendations'>
      <div className='section'>
        <h2 className='rec-heading'>Recommendations</h2>
        <div className='rec-divider' />
        <div className='rec-grid box fade-in' ref={ref}>
          {recommendation.map((item, i) => (
            <div key={i} className='rec-card'>
              <div className='rec-quote-mark'>"</div>
              <p className='rec-quote'>
                {Array.isArray(item.recommendation)
                  ? item.recommendation.join(' ')
                  : item.recommendation}
              </p>
              <div className='rec-footer'>
                <div className='rec-avatar'>{item.Name.charAt(0)}</div>
                <div>
                  <h3 className='rec-name'>{item.Name}</h3>
                  <p className='rec-position'>{item.Position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Recommendations