import React from 'react';
import SearchBar from '../molecules/SearchBar';
import Card from '../molecules/Card'; // Suponiendo que tenemos un componente Card para cada tarjeta
import logo from '../../assets/images/logo.png'; // Ajusta la ruta según tu estructura
import einstein from '../../assets/images/einstein.jpg'; // Ajusta la ruta según tu estructura
import seiya from '../../assets/images/seiya.jpeg'; // Ajusta la ruta según tu estructura
import ikki from '../../assets/images/ikki.jpg'; // Ajusta la ruta según tu estructura
import slash from '../../assets/images/slash.jpg'; // Ajusta la ruta según tu estructura
import anime from '../../assets/images/anime.jpg'; // Ajusta la ruta según tu estructura
import michael from '../../assets/images/michael.jpg'; // Ajusta la ruta según tu estructura
import snoopy from '../../assets/images/snoopy.jpg'; // Ajusta la ruta según tu estructura
import '../style.css'

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="search-bar">
        <SearchBar logo={logo} />
      </div>
      <div className="container">
        <Card image={einstein} title="Características" text="Cabeza Grande y Cuerpo Pequeño: Las figuras Funko Pop se caracterizan por sus cabezas desproporcionadamente grandes en comparación con sus cuerpos pequeños.    
        Estilo Simplificado: Los detalles faciales son minimalistas, con ojos grandes y negros que son una característica distintiva." />
        <Card image={seiya} title="Variedad de Licencias" text="Amplia Gama de Temas: Funko Pop cubre una gran variedad de temas y franquicias, incluyendo películas, series de televisión, cómics, videojuegos, deportes, música, y más.
        Licencias Oficiales: Las figuras están basadas en licencias oficiales, lo que garantiza la autenticidad y la representación fiel de personajes populares. " />
        <Card image={ikki} title="Ediciones Especiales y Exclusivas" text="Exclusivas de Convenciones: Funko lanza ediciones especiales para convenciones como San Diego Comic-Con (SDCC), New York Comic-Con (NYCC), y más.
        Exclusivas de Tiendas: También hay figuras exclusivas para ciertas tiendas, como Target, Walmart, Hot Topic, y Amazon." />
        <Card image={slash} title="Variaciones y Ediciones Limitadas" text="Chase Variants: Algunas figuras tienen variantes chase que son más raras y difíciles de encontrar. Ediciones Limitadas Hay figuras que se producen en cantidades limitadas, aumentando su valor para los coleccionistas." />
        <Card image={anime} title="Diversidad de Personajes" text="Amplia Representación: Desde superhéroes y villanos hasta personajes históricos y figuras de la cultura pop contemporánea, la variedad es enorme.
        Inclusión y Diversidad: Funko ha trabajado en representar una amplia gama de personajes de diferentes culturas, géneros y contextos históricos" />
        <Card image={michael} title="Empaque Coleccionable" text="Cajas con Ventana: Cada figura viene en una caja con una ventana transparente, lo que permite a los coleccionistas exhibir las figuras sin sacarlas del empaque.
        Diseño Atractivo: Las cajas suelen tener diseños atractivos y están numeradas, lo que facilita la identificación y organización para los coleccionistas." />
        <Card image={snoopy} title="Impacto Cultural" text="Iconos de la Cultura Pop: Los Funko Pop se han convertido en un fenómeno cultural, representando una amplia gama de iconos culturales y siendo un objeto de deseo tanto para coleccionistas casuales como para fanáticos acérrimos. " />
      </div>
    </div>
  );
};

export default HomePage;
