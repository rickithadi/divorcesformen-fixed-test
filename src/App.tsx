import Hero from './components/Hero';
import Header from './components/Header';
import Section1 from './components/Section1';
import Footer from './components/Footer';
import SEOHead from './components/SEOHead';
import { heroProps, headerProps, section1Props, footerProps } from './data/props';

function App() {
  return (
    <div className="App">
      <SEOHead />
      <Hero {...heroProps} />
      <Header {...headerProps} />
      <Section1 {...section1Props} />
      <Footer {...footerProps} />
    </div>
  );
}

export default App;
