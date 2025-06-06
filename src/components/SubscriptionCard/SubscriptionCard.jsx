// src/components/SubscriptionCard/SubscriptionCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './SubscriptionCard.css';

export default function SubscriptionCard({ subscription, onDelete }) {
  const { id, serviceName, cost, category, renewalDate } = subscription;

  const handleDelete = () => {
    Swal.fire({
      title: `¿Eliminar ${serviceName}?`,
      text: '¡No podrás revertir esto!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        onDelete(id);
        Swal.fire('Eliminado', `${serviceName} ha sido eliminado.`, 'success');
      }
    });
  };

  return (
    <div className="subscription-card">
      <h3>{serviceName}</h3>
      <p>Costo: ${cost.toFixed(2)}</p>
      <p>Categoría: {category}</p>
      <p>Renovación: {new Date(renewalDate).toLocaleDateString()}</p>
      <div className="card-actions">
        <Link to={`/subscription/edit/${id}`} className="btn-edit">
          Editar
        </Link>
        <button onClick={handleDelete} className="btn-delete">
          Eliminar
        </button>
      </div>
    </div>
  );
}
