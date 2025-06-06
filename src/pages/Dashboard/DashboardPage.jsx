// src/pages/Dashboard/DashboardPage.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  fetchAllSubscriptions,
  deleteSubscription,
} from '../../services/api';
import SubscriptionCard from '../../components/SubscriptionCard/SubscriptionCard';
import { AuthContext } from '../../utils/AuthContext';
import '../../styles/Dashboard.css';

export default function DashboardPage() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const loadSubscriptions = async () => {
    const data = await fetchAllSubscriptions();
    setSubscriptions(data);
  };

  useEffect(() => {
    loadSubscriptions();
  }, []);

  const handleDelete = async (id) => {
    const success = await deleteSubscription(id);
    if (success) {
      loadSubscriptions();
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Filtrar suscripciones por serviceName o categoría
  const filtered = subscriptions.filter((sub) =>
    sub.serviceName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sub.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Mis Suscripciones</h1>
        <button onClick={handleLogout} className="btn-logout">
          Cerrar Sesión
        </button>
      </header>

      <div className="dashboard-controls">
        <input
          type="text"
          placeholder="Buscar por nombre o categoría..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input-search"
        />
        <button
          onClick={() => navigate('/subscription/add')}
          className="btn-add"
        >
          + Nueva Suscripción
        </button>
      </div>

      <div className="subscriptions-list">
        {filtered.length
          ? filtered.map((sub) => (
              <SubscriptionCard
                key={sub.id}
                subscription={sub}
                onDelete={handleDelete}
              />
            ))
          : (
            <p className="no-results">No se encontraron suscripciones.</p>
          )}
      </div>
    </div>
  );
}
