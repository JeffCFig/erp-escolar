import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import dashboardBackground from '../resources/dashboard_background.png';
import './styles/login.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      if (response.data.success) {
        localStorage.setItem('username', username);
        localStorage.setItem('userToken', response.data.token);
        navigate('/dashboard');
      } else {
        alert(response.data.message || 'Credenciales incorrectas');
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
      alert('Error al conectar con el servidor');
    }
  };

  return (
    <div className="contenedor">
      <div className="imagen">
      <img src={dashboardBackground} alt="Decorative" />
      </div>
      <div className="contenedorFormulario">
        <form className="formulario" onSubmit={handleLogin}>
          <h2 className="login-header">INICIAR SESIÓN</h2>
          <div className="input-group">
            <input
              id="username"
              type="text"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              id="password"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="botones">Login</button>
          <p className="restablecerPassword">¿Olvidaste tu contraseña?</p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
