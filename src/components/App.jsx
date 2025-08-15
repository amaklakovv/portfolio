import './App.css'
import GlassCard from './GlassCard';
import Navbar from './Navbar';
import About from './About';
import Footer from './Footer';
import Projects from './Projects';

function App() {

  return (
    <div className="App">
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="fullscreen-section">
        <GlassCard>
          <h1>Andrew Maklakov</h1>
          <p>Software Engineering Student</p>
        </GlassCard>
      </section>
      <About />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
