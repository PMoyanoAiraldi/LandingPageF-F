import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero';
import Servicio from './components/Servicios/Servicios';
import Nosotros from './components/Nosotros/Nosotros';
import Productos from './components/Productos/Productos';
import Contacto from './components/Contacto/Contacto';

function App() {
  

  return (
    <>
      <Navbar/>
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/nosotros' element={<Nosotros/>} /> 
        <Route path='/servicios' element={<Servicio />}/>
        <Route path='/productos' element={<Productos/>} />
        <Route path='/contacto' element={<Contacto/>} />
      </Routes>
    </div>

    </>
  )
}

export default App
