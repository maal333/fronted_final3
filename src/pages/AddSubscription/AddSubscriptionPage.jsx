// src/pages/AddSubscription/AddSubscriptionPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { createSubscription } from '../../services/api';
import '../../styles/AddSubscription.css';

export default function AddSubscriptionPage() {
  const [serviceName, setServiceName] = useState('');
  const [cost, setCost] = useState('');
  const [category, setCategory] = useState('');
  const [renewalDate, setRenewalDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validaciones básicas
    if (!serviceName || !cost || !category || !renewalDate) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor llena todos los campos.',
      });
      return;
    }
    const newSub = {
      serviceName,
      cost: parseFloat(cost),
      category,
      renewalDate,
    };
    try {
      await createSubscription(newSub);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Suscripción agregada',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/dashboard');
    } catch (error) {
      Swal.fire('Error', 'No se pudo agregar la suscripción.', 'error');
    }
  };

  return (
    <div className="add-container">
      <form className="add-form" onSubmit={handleSubmit}>
        <h2>Agregar Nueva Suscripción</h2>
        <label>Servicio:</label>
        <input
          type="text"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          placeholder="Nombre del servicio"
          required
          className="input-field"
        />
        <label>Costo Mensual (USD):</label>
        <input
          type="number"
          step="0.01"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          placeholder="e.g., 9.99"
          required
          className="input-field"
        />
        <label>Categoría:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="Streaming, Música, etc."
          required
          className="input-field"
        />
        <label>Fecha de Renovación:</label>
        <input
          type="date"
          value={renewalDate}
          onChange={(e) => setRenewalDate(e.target.value)}
          required
          className="input-field"
        />
        <button type="submit" className="btn-submit">
          Guardar
        </button>
        <button
          type="button"
          className="btn-cancel"
          onClick={() => navigate('/dashboard')}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}
