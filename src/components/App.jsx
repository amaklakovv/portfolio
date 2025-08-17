import { useState } from 'react';
import './App.css'
import GlassCard from './GlassCard';
import MotionPermissionButton from './MotionPermissionButton';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import Projects from './Projects';
import FlippingText from './FlippingText';

function App() {

  const [isMotionEnabled, setIsMotionEnabled] = useState(false);

  const heroPhrases = [
    'a third year engineering student',
    'a software engineering major',
    'a problem solver',
    'a team player',
    'a fast learner',
    'a creative thinker',
    'a scalable developer',
    'a lifelong learner',
    'an AI enthusiast',
    'a tech explorer'
  ];

  return (
    <div className="App">
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="fullscreen-section">
        <GlassCard isMotionEnabled={isMotionEnabled}>
          <div className="hero-text-container">
            <h1>Andrew Maklakov</h1>
            <FlippingText phrases={heroPhrases} />
          </div>
        </GlassCard>
        {!isMotionEnabled && (
          <MotionPermissionButton onGrant={() => setIsMotionEnabled(true)} />
        )}
      </section>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
