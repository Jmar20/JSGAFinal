import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate para redirigir

export function Recuperar() {
    const [email, setEmail] = useState('');
    const [codigo, setCodigo] = useState('');
    const [nuevaContrasena, setNuevaContrasena] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Inicializa el hook para la navegación

    const cambiarContrasena = async () => {
        setMessage(''); // Resetear mensaje antes de enviar solicitud
        setError(''); // Resetear error antes de enviar solicitud
        try {
            if (claveAcceso === Usercodigo) { // Compara el valor de la clave de acceso
                const response = await axios.post('https://pyfjs.onrender.com/api/auth/cambiarContrasena', {
                    email,
                    nuevaContrasena,
                    claveAcceso: Usercodigo
                });
                setMessage(response.data.message || 'Contraseña cambiada exitosamente');
                setTimeout(() => {
                    navigate('/login'); // Redirige a la página de login
                }, 2000); // Espera 2 segundos antes de redirigir
            } else {
                setError('La clave de acceso es incorrecta');
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Error al cambiar la contraseña');
        }
    };

    const handleForgotPassword = async () => {
        setMessage(''); 
        setError(''); 

        try {
            await axios.post('https://pyfjs.onrender.com/api/auth/solicitarCambioContrasena', {
                email
            });
            setMessage('Una clave de acceso ha sido enviada a tu correo electrónico.');
            const claveAcceso = response.data.claveAcceso;
            setClaveAcceso(claveAcceso); 
        } catch (err) {
            setError(err.response?.data?.message || 'Error al solicitar el cambio de contraseña');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Recuperar Contraseña</h2>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label">Email:</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Código:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={codigo}
                                        onChange={(e) => setCodigo(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Nueva Contraseña:</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={nuevaContrasena}
                                        onChange={(e) => setNuevaContrasena(e.target.value)}
                                        required
                                    />
                                </div>
                                <button type="button" className="btn btn-primary w-100" onClick={cambiarContrasena}>
                                    Cambiar Contraseña
                                </button>
                                <button type="button" className="btn btn-secondary w-100 mt-2" onClick={handleForgotPassword}>
                                    Enviar Correo de Recuperación
                                </button>
                            </form>
                            {message && <div className="alert alert-success mt-3">{message}</div>}
                            {error && <div className="alert alert-danger mt-3">{error}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Recuperar;
