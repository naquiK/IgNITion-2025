import { useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Countdown from './components/Countdown';
import Events from './components/Events';
import Sponsors from './components/Sponsors';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const handleLoaderComplete = () => {
    setShowLoader(false);
  };

  if (showLoader) {
    return <Loader onLoadComplete={handleLoaderComplete} />;
  }

  return (
    <div className="bg-[#0a0e27] min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Countdown />
      <Events />
      <Sponsors />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
