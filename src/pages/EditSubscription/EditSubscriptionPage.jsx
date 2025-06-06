// src/pages/EditSubscription/EditSubscriptionPage.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  fetchSubscriptionById,
  updateSubscription,
} from '../../services/api';              // <-- dos niveles arriba a 'src/services/api.js'
import "../../styles/EditSubscription.css";   // <-- dos niveles arriba a 'src/styles/EditSubscription.css'

export default function EditSubscriptionPage() {
  const { id } = useParams();
  const [serviceName, setServiceName] = useState('');
  const [cost, setCost] = useState('');
  const [category, setCategory] = useState('');
  const [renewalDate, setRenewalDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchSubscriptionById(id);
      setServiceName(data.serviceName);
      setCost(data.cost);
      setCategory(data.category);
      setRenewalDate(data.renewalDate);
    };
    loadData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!serviceName || !cost || !category || !renewalDate) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor llena todos los campos.',
      });
      return;
    }
    const updatedSub = {
      serviceName,
      cost: parseFloat(cost),
      category,
      renewalDate,
    };
    try {
      await updateSubscription(id, updatedSub);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Suscripción actualizada',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate('/dashboard');
    } catch (error) {
      Swal.fire('Error', 'No se pudo actualizar la suscripción.', 'error');
    }
  };

  return (
    <div className="edit-container">
      <form className="edit-form" onSubmit={handleSubmit}>
        <h2>Editar Suscripción</h2>
        <label>Servicio:</label>
        <input
          type="text"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          required
          className="input-field"
        />
        <label>Costo Mensual (USD):</label>
        <input
          type="number"
          step="0.01"
          value={cost}
          onChange={(e) => setCost(e.target.value)}
          required
          className="input-field"
        />
        <label>Categoría:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
          Actualizar
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
