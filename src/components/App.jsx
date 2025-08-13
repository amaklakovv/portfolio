import './App.css'
import GlassCard from './GlassCard';
import Navbar from './Navbar';

function App() {

  return (
    <div className="App">
      <Navbar />
      <GlassCard>
        <h1>Andrew Maklakov</h1>
        <p>Software Engineering Student</p>
      </GlassCard>
    </div>
  )
}

export default App
