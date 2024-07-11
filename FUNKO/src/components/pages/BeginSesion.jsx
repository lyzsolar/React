import React from 'react';
import SearchBar from '../molecules/SearchBar';
import LoginForm from '../organisms/LoginForm';
import inosukeImg from '../../assets/images/inosuke.png';
import logo from '../../assets/images/logo.png'
import Button from '../atoms/Button';

const BeginSesion = () => {
  return (
    <div className="begin-sesion">
      <SearchBar logo={logo} />
      
      <div className="content">
        <img src={inosukeImg} alt="Inosuke" className="inosuke-img" />
        <div className="text-content">
          <h1 className="main-title">Funko te espera.</h1>
          <div className="three-columns">
            <p>Funko Pop trata de compartir experiencias con las historias que forman parte de tu vida.</p>
          </div>
        </div>
        <LoginForm />
      </div>
        
    </div>
  );
};

export default BeginSesion;