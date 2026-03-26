import './Hero.css'
import { personalinfo } from '../Data/Portfoliodata'

function Hero() {
    return(
        <section id="about" className='hero'>
        <div className="hero-content">
            <img src="/Public/Profile_photo.png" alt='Profile Photo' className='Hero_photo' />
            <div className="hero-text">
            <h1 className='Hero_name'>{personalinfo.name}</h1>
            <h3 className='Hero_current'>{personalinfo.title}</h3>
            <h3 className='Hero_course_name'>{personalinfo.Course}</h3>
            <h4 className='Hero_location'>{personalinfo.Location}</h4>
            {personalinfo.Role.map((line, i) => (
                <h2 className='Hero_roles' key={i}>{line}</h2>
            ))}
            <div className='Hero_button'>
                <a href={personalinfo.Github} target="_blank" className='Hero_github'>Github</a>
                <a href={personalinfo.LinkedIn} target="_blank" className='Hero_linkedln'>LinkedIn</a>
                <a href={`mailto:${personalinfo.Personal_email}`} className='Hero_email'>Email</a>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Hero;

