import Hero from './components/Hero';
import Header from './components/Header';
import VideoSection from './components/VideoSection';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import { heroProps, headerProps, footerProps } from './data/props';

function App() {
  return (
    <div className="App">
      <SEOHead />
      <Header {...headerProps} />
      <Hero {...heroProps} />
      <VideoSection />
      <Services />
      <Testimonials />
      <Footer {...footerProps} />
    </div>
  );
}

export default App;
