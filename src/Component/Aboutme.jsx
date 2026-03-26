import './About.css'
import { aboutSentences } from '../Data/Portfoliodata'
import useScrollReveal from '../Hooks/UseScrollreveal'

const barColors = [
  '#036062', '#04634b', '#056833',
  '#024778', '#034950', '#044769', '#05788f'
]

function About() {
  const ref = useScrollReveal()

  return (
    <section id="about-me" className='about'>
      <div className='section'>

        <h2 className='about-heading'>About Me</h2>
        <div className='about-divider' />

        <div className='about-box box fade-in' ref={ref}>
          <p className='about-line'>Data scientist who turns messy problems into clear decisions.</p>
          <p className='about-line'>Bridging analytical thinking with real world business impact.</p>
          <div className='about-chart'>
            {aboutSentences.map((item, i) => (
              <div key={i} className='about-row'>
                <span className='about-label'>{item.label}</span>
                <div
                  className='about-bar'
                  style={{
                    width: `${40 + i * 8}%`,
                    backgroundColor: barColors[i % barColors.length]
                  }}
                >
                  <span className='about-bar-text'>{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About