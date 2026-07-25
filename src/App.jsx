import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import { Services, Process, About } from './components/Sections.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Process />
        <About />
      </main>
      <Footer />
    </>
  );
}
