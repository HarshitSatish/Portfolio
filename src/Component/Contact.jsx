import './Contact.css'
import { personalinfo } from '../Data/Portfoliodata'
import useScrollReveal from '../Hooks/UseScrollreveal'
import { useState } from 'react'

function Contact() {
  const ref = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const mailto = `mailto:${personalinfo.Personal_email}?subject=Portfolio Contact from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`
    window.location.href = mailto
    setSent(true)
  }

  return (
    <section id="contact" className='contact'>
      <div className='section'>
        <h2 className='contact-heading'>Contact</h2>
        <div className='contact-divider' />

        <div className='contact-box box fade-in' ref={ref}>
          <div className='contact-left'>
            <h3 className='contact-title'>Waiting to join hands and work together</h3>
            <p className='contact-subtitle'>
              I'm currently open to internships/co-op roles in data science, analytics and machine learning.
              Feel free to reach out!
            </p>
            <div className='contact-links'>
              <a href={personalinfo.LinkedIn} target='_blank' className='contact-link'>LinkedIn →</a>
              <a href={personalinfo.Github} target='_blank' className='contact-link'>GitHub →</a>
              <a href={`mailto:${personalinfo.Personal_email}`} className='contact-link'>Email →</a>
            </div>
          </div>

          <div className='contact-right'>
            {sent ? (
              <div className='contact-success'>
                ✓ email sent...
              </div>
            ) : (
              <form className='contact-form' onSubmit={handleSubmit}>
                <div className='contact-field'>
                  <label>Name</label>
                  <input
                    type='text'
                    name='name'
                    value={form.name}
                    onChange={handleChange}
                    placeholder='Your name'
                    required
                  />
                </div>
                <div className='contact-field'>
                  <label>Email</label>
                  <input
                    type='email'
                    name='email'
                    value={form.email}
                    onChange={handleChange}
                    placeholder='your@email.com'
                    required
                  />
                </div>
                <div className='contact-field'>
                  <label>Message</label>
                  <textarea
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    placeholder='Your message...'
                    rows={5}
                    required
                  />
                </div>
                <button type='submit' className='contact-btn'>Send Message</button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact