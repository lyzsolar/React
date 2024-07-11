import React from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import Button from '../atoms/Button';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="login-form">
      <h2>Inicio de Sesión</h2>
      <div>
        <Input type="text" placeholder="Usuario" />
      </div>
      <div>
        <Input type="password" placeholder="Contraseña" />
      </div>
        <Link to="/HomePage">
           <Button>Acepatar</Button>
        </Link>
    </div>
  );
};

export default LoginForm;
