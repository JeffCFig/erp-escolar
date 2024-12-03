import React from 'react';
import Menu from './Header'; // Importa el menú
import './Dashboard.css'; // Estilos específicos para el Dashboard

const Dashboard = () => {

    return (
        <div className="dashboard-container">
            <header>
                <Menu /> {/* Incluye el menú */}
            </header>
            <main>
            </main>
        </div>
    );
};

export default Dashboard;

