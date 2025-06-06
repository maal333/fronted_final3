// src/pages/Login/LoginPage.jsx
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchUserByEmail } from '../../services/api';
import { AuthContext } from '../../utils/AuthContext';
import Swal from 'sweetalert2';
import '../../styles/Login.css'; // Estilos llamativos e interactivos

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // 1. Consultar usuario por email
    const user = await fetchUserByEmail(email);
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'Usuario no encontrado',
        text: 'Verifica tu correo e inténtalo nuevamente.',
      });
      return;
    }
    // 2. Validar contraseña
    if (user.password !== password) {
      Swal.fire({
        icon: 'error',
        title: 'Contraseña incorrecta',
        text: 'Por favor revisa tu contraseña.',
      });
      return;
    }
    // 3. Si es válido: hacer login, guardar en contexto y localStorage
    login({ id: user.id, email: user.email });
    // 4. Redirigir a Dashboard
    navigate('/dashboard');
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: '¡Bienvenido!',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        <label htmlFor="email">Correo:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tucorreo@ejemplo.com"
          required
          className="input-field"
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
          required
          className="input-field"
        />
        <button type="submit" className="btn-login">
          Entrar
        </button>
      </form>
    </div>
  );
}
