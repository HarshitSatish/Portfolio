import Navbar from "./Component/navbar"
import Hero from "./Component/Hero"
import Background from "./Component/background"
import About from "./Component/Aboutme"
import Recommendations from "./Component/Recommendation"
import Experience from "./Component/Experience"
import Skills  from "./Component/Skill"
import Education from "./Component/Education"
import Contact  from "./Component/Contact"
import Projects from "./Component/Project"
import Publications from "./Component/Publication"


function App() {
  return(
      <div>
          <Background />
          <Navbar />
          <Hero />
          <About />
          <Recommendations />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Publications />
          <Contact />
      </div>
  )
}

export default App