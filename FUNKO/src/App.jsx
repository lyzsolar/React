import React from 'react';
import { Link } from 'react-router-dom';
import BeginSesion from './components/pages/BeginSesion'; // Ajusta la ruta según tu estructura
import HomePage from './components/pages/HomePage'; // Ajusta la ruta según tu estructura

function App() {
  return (
  
      <nav>
        <ul>
          <li>
            <Link to="/BeginSesion">Inicio de Sesión</Link>
          </li>
          <li>
            <Link to="/HomePage">Home</Link>
          </li>
        </ul>
      </nav>

  )
}

export default App
