import Header from './components/Header';
import Hero from './components/Hero';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import VideoDemo from './components/VideoDemo';
import Section4_5 from './components/Section4_5';
import Section4_7 from './components/Section4_7';
import Section5 from './components/Section5';
import Section5_5 from './components/Section5_5';
import Section5_7 from './components/Section5_7';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Section4_5 />
      <div id="features">
        <Section3 />
      </div>
      <Section4 />
      <VideoDemo />
      <Section4_7 />
      <div id="price-comparison">
        <Section5 />
      </div>
      <Section5_5 />
      <div id="pricing">
        <Section5_7 />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
