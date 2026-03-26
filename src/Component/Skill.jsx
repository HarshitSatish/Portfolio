import './Skills.css'
import { skills } from '../Data/Portfoliodata'
import useScrollReveal from '../Hooks/UseScrollreveal'

const floatingIcons = [
  { icon: 'devicon-python-plain',                    label: 'Python',      color: '#3776AB' },
  { icon: 'devicon-pandas-plain',                    label: 'Pandas',      color: '#150458' },
  { icon: 'devicon-numpy-plain',                     label: 'NumPy',       color: '#4dabcf' },
  { icon: 'devicon-tensorflow-original',             label: 'TensorFlow',  color: '#FF6F00' },
  { icon: 'devicon-pytorch-plain',                   label: 'PyTorch',     color: '#EE4C2C' },
  { icon: 'devicon-mysql-plain',                     label: 'SQL',         color: '#4479A1' },
  { icon: 'devicon-r-plain',                         label: 'R',           color: '#276DC3' },
  { icon: 'devicon-amazonwebservices-plain-wordmark', label: 'AWS',        color: '#FF9900' },
  { icon: 'devicon-docker-plain',                    label: 'Docker',      color: '#2496ED' },
  { icon: 'devicon-git-plain',                       label: 'Git',         color: '#F05032' },
  { icon: 'devicon-javascript-plain',                label: 'JavaScript',  color: '#F7DF1E' },
  { icon: 'devicon-react-original',                  label: 'React',       color: '#61DAFB' },
]

function Skills() {
  const ref = useScrollReveal()

  return (
    <section id="skills" className='skills'>
      <div className='section'>
        <h2 className='skills-heading'>Skills</h2>
        <div className='skills-divider' />

        <div className='skills-wrapper'>

          {/* Icons distributed across 4 edges, never overlapping the box */}
          {floatingIcons.map((item, i) => {
            const edge = i % 4
            let style = {
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + i * 0.5}s`,
            }

            if (edge === 0) {
            // Top edge — evenly spaced
            style.left = `${15 + (i / floatingIcons.length) * 70}%`
            style.top = '20px'
            } else if (edge === 1) {
            // Bottom edge — evenly spaced
            style.left = `${15 + (i / floatingIcons.length) * 70}%`
            style.bottom = '20px'
            } else if (edge === 2) {
            // Left edge — evenly spaced vertically
            style.left = '20px'
            style.top = `${15 + (i / floatingIcons.length) * 70}%`
            } else {
            // Right edge — evenly spaced vertically
            style.right = '20px'
            style.top = `${15 + (i / floatingIcons.length) * 70}%`
            }

            return (
              <div key={i} className='float-icon' style={style}>
                <i className={item.icon} style={{ color: item.color }} />
                <span>{item.label}</span>
              </div>
            )
          })}

          {/* Skills box — centered inside the wrapper */}
          <div className='skills-box box fade-in' ref={ref}>
            <div className='skills-grid'>
              {Object.entries(skills).map(([key, value], i) => (
                <div key={i} className='skills-category'>
                  <h3 className='skills-cat-title'>{key.replace(/_/g, ' ')}</h3>
                  <div className='skills-tags'>
                    {value.split(', ').map((skill, j) => (
                      <span key={j} className='skill-tag'>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills