const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());  // Parse JSON request bodies
app.use(cors());

// Conexión a la base de datos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'system_control',
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado a la base de datos');
});

// Endpoint de autenticación
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM usr_usuarios WHERE usuario = ? AND contrasena = ?';
    db.query(query, [username, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.json({ success: true, message: 'Inicio de sesión exitoso' });
        } else {
            res.json({ success: false, message: 'Usuario o contraseña incorrectos' });
        }
    });
});

// Endpoint para guardar los datos del estudiante
app.post('/students', (req, res) => {
    const {
        cedula,
        nombres,
        apellidos,
        fechaNacimiento,
        direccion,
        correo,
        celular,
        telefono,
        representante,
        estado,
    } = req.body;

    // Verificar que los campos requeridos no estén vacíos
    if (!cedula || !nombres || !apellidos || !fechaNacimiento || !direccion || !correo || !celular || !telefono || !representante) {
        return res.status(400).json({ success: false, message: 'Faltan campos obligatorios' });
    }

    // Consulta SQL para insertar los datos en la base de datos
    const query = `
        INSERT INTO adm_estudiantes 
        (id_estudiante, nombres_estudiante, apellidos_estudiante, f_nacimiento, direccion, correo, celular, telefono, id_representante, estado)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    // Ejecución de la consulta
    db.query(query, [
        cedula,               // id_estudiante
        nombres,              // nombres_estudiante
        apellidos,            // apellidos_estudiante
        fechaNacimiento,      // f_nacimiento
        direccion,            // direccion
        correo,               // correo
        celular,              // celular
        telefono,             // telefono
        representante,        // id_representante
        estado,               // estado
    ], (err, results) => {
        if (err) {
            console.error('Error al registrar el estudiante:', err.message);
            return res.status(500).json({ success: false, message: 'Error al registrar el estudiante' });
        }

        res.json({ success: true, message: 'Estudiante registrado exitosamente', data: results });
    });
});

app.listen(5000, () => {
    console.log('Servidor corriendo en el puerto 5000');
});
