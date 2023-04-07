import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import SimplifySection from './components/SimplifySection';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <header>
        <Header />
        <Hero />
      </header>
      <main>
        <AboutSection />
        <Testimonials />
        <SimplifySection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
