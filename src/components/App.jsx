import { useState, useEffect } from 'react';
import './App.css'
import GlassCard from './GlassCard';
import MotionPermissionButton from './MotionPermissionButton';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import WorkExperience from './WorkExperience';
import Projects from './Projects';
import FlippingText from './FlippingText';
import { trackSectionView, trackScrollDepth, trackEvent } from '../analytics';

function App() {

  const [isMotionEnabled, setIsMotionEnabled] = useState(false);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'experience', 'projects', 'contact', 'footer'];
    const seenSections = new Set();

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const id = entry.target.id || entry.target.dataset.section;
          if (entry.isIntersecting && id && !seenSections.has(id)) {
            trackSectionView(id);
            seenSections.add(id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean)
      .forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const thresholds = [25, 50, 75, 100];
    const seenDepths = new Set();

    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || window.pageYOffset;
      const scrollHeight = doc.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const percent = Math.min(100, Math.round((scrollTop / scrollHeight) * 100));

      thresholds.forEach(depth => {
        if (percent >= depth && !seenDepths.has(depth)) {
          trackScrollDepth(depth);
          seenDepths.add(depth);
        }
      });
    };

    const listener = () => window.requestAnimationFrame(handleScroll);
    window.addEventListener('scroll', listener, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', listener);
  }, []);

  useEffect(() => {
    const clickHandler = event => {
      const target = event.target.closest('[data-analytics-label]');
      if (!target) return;
      const label = target.dataset.analyticsLabel;
      const category = target.dataset.analyticsCategory || 'interaction';
      trackEvent('click', label, category, 1, { element: target.tagName.toLowerCase() });
    };

    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, []);

  const heroPhrases = [
    'a final year engineering student',
    'a software engineering major',
    'a problem solver',
    'a cross-functional team player',
    'a fast adapting engineer',
    'a product-minded thinker',
    'a scalable developer',
    'a continuous builder'
  ];

  return (
    <div className="App">
      <Navbar />
      <section id="home" className="fullscreen-section">
        <GlassCard isMotionEnabled={isMotionEnabled}>
          <div className="hero-text-container">
            <h1>Andrew Maklakov</h1>
            <FlippingText phrases={heroPhrases} />
          </div>
          {!isMotionEnabled && (
            <MotionPermissionButton onGrant={() => setIsMotionEnabled(true)} />
          )}
        </GlassCard>
      </section>
      <About />
      <WorkExperience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
