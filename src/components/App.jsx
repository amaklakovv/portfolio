import './App.css'
import GlassCard from './GlassCard';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Projects from './Projects';
import FlippingText from './FlippingText';

function App() {

  const heroPhrases = [
    'a software engineering student',
    'a problem solver',
    'a team player',
    'a fast learner',
    'an AI enthusiast',
    'a lifelong learner'
  ];

  return (
    <div className="App">
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="fullscreen-section">
        <GlassCard>
          <div className="hero-text-container">
            <h1>Andrew Maklakov</h1>
            <FlippingText phrases={heroPhrases} />
          </div>
        </GlassCard>
      </section>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
