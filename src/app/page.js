import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Technologies from '@/components/Technologies';
import Qualification from '@/components/Qualification';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ToastContainer } from 'react-toastify';



export default function Home() {
  return (
    <main className="scroll-smooth max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Skills />
      <Qualification />
      <Projects />
      <Contact />
      <ToastContainer position='top-center' />
      <Footer />
    </main>
  );
}
