import React, { useState } from 'react';
import axios from 'axios'; // Importar axios para enviar las solicitudes HTTP
import './styles/Forms.css'; // Asegurarse de que la ruta del archivo CSS es correcta

const StudentForm = () => {
  const [studentData, setStudentData] = useState({
    cedula: '',
    nombres: '',
    apellidos: '',
    fechaNacimiento: '',
    direccion: '',
    correo: '',
    celular: '',
    telefono: '',
    representante: '',
    estado: 'activo', // Valor predeterminado
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Usando axios para la solicitud POST
      const response = await axios.post('http://localhost:5000/students', studentData);

      if (response.data.success) {
        alert('Estudiante registrado exitosamente');
        // Limpiar el formulario después de enviar los datos
        setStudentData({
          cedula: '',
          nombres: '',
          apellidos: '',
          fechaNacimiento: '',
          direccion: '',
          correo: '',
          celular: '',
          telefono: '',
          representante: '',
          estado: 'activo',
        });
      } else {
        alert(response.data.message || 'Error al registrar estudiante');
      }
    } catch (error) {
        console.error('Error al conectar con el servidor:', error.response || error.message);
      alert('Error al conectar con el servidor');
    }
  };

  return (
    <div className="student-form-container">
      <form className="student-form" onSubmit={handleSubmit}>
        <h2 className="form-header">- ADMINISTRAR ESTUDIANTES -</h2>
        <div className="form-group">
          <label htmlFor="cedula">No. CÉDULA:</label>
          <input
            id="cedula"
            name="cedula"
            type="text"
            value={studentData.cedula}
            onChange={handleInputChange}
            placeholder="Ingrese el número de cédula"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="nombres">NOMBRES:</label>
          <input
            id="nombres"
            name="nombres"
            type="text"
            value={studentData.nombres}
            onChange={handleInputChange}
            placeholder="Ingrese los nombres"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="apellidos">APELLIDOS:</label>
          <input
            id="apellidos"
            name="apellidos"
            type="text"
            value={studentData.apellidos}
            onChange={handleInputChange}
            placeholder="Ingrese los apellidos"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fechaNacimiento">F. NACIMIENTO:</label>
          <input
            id="fechaNacimiento"
            name="fechaNacimiento"
            type="date"
            value={studentData.fechaNacimiento}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="direccion">DIRECCIÓN:</label>
          <input
            id="direccion"
            name="direccion"
            type="text"
            value={studentData.direccion}
            onChange={handleInputChange}
            placeholder="Ingrese la dirección"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo">CORREO:</label>
          <input
            id="correo"
            name="correo"
            type="email"
            value={studentData.correo}
            onChange={handleInputChange}
            placeholder="Ingrese el correo"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="celular">No. CELULAR:</label>
          <input
            id="celular"
            name="celular"
            type="text"
            value={studentData.celular}
            onChange={handleInputChange}
            placeholder="Ingrese el número de celular"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">No. TELÉFONO:</label>
          <input
            id="telefono"
            name="telefono"
            type="text"
            value={studentData.telefono}
            onChange={handleInputChange}
            placeholder="Ingrese el número de teléfono"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="representante">REPRESENTANTE:</label>
          <input
            id="representante"
            name="representante"
            type="text"
            value={studentData.representante}
            onChange={handleInputChange}
            placeholder="Nombre del representante"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="estado">ESTADO:</label>
          <select
            id="estado"
            name="estado"
            value={studentData.estado}
            onChange={handleInputChange}
          >
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
          </select>
        </div>
        <button type="submit" className="form-button">
          Registrar Estudiante
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
