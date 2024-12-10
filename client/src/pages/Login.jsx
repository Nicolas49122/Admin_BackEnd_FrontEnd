import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Aquí puedes agregar la lógica de autenticación (por ejemplo, una API de backend)
    if (email === 'admin' && password === 'password') {
      // Si la autenticación es exitosa, redirige al usuario
      navigate('/auto');
    } else {
      // Si las credenciales son incorrectas, muestra un mensaje de error
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl max-w-sm w-full">
        <h2 className="text-3xl font-bold text-center text-indigo-400 mb-8">Bienvenido</h2>
        
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-lg font-medium text-gray-300">Correo electrónico</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 mt-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              placeholder="Ingresa tu correo electrónico"
              required
            />
          </div>

          <div className="mb-8">
            <label htmlFor="password" className="block text-lg font-medium text-gray-300">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 mt-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-4 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}
