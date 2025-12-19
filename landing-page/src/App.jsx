import './App.css'
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero';
import Servicio from './components/Servicios/Servicios';
import Nosotros from './components/Nosotros/Nosotros';
import Productos from './components/Productos/Productos';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <main>
        <section id="inicio">
          <Hero />
        </section>
        <section id="nosotros">
          <Nosotros />
        </section>
        <section id="servicios">
          <Servicio />
        </section>
        <section id="productos">
          <Productos />
        </section>
        <section id="contacto">
          <Contacto />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App