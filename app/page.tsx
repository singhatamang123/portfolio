import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Info';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white overflow-hidden bg-grain">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}