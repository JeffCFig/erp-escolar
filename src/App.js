import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './pages/Login'; // Verifica que la ruta sea correcta
import Dashboard from './components/Dashboard'; // Verifica la ruta al componente
import PrivateRoute from './auth/PrivateRoute'; // Confirma la existencia del archivo

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Redirección de la raíz a /login */}
                <Route path="/" element={<Navigate to="/login" />} />

                {/* Ruta pública */}
                <Route path="/login" element={<LoginForm />} />
                
                {/* Ruta protegida */}
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <Dashboard />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;
