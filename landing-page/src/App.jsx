import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/NavBar/Navbar'
import Hero from './components/Hero/Hero';

function App() {
  

  return (
    <>
      <Navbar/>
    <div>
      <Routes>
        <Route path="/" element={<Hero />} /> 
      
      </Routes>
    </div>

    </>
  )
}

export default App
