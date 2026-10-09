// Página completa para la sección de login de la aplicación. Esta página se muestra cuando el usuario no ha iniciado sesión y necesita autenticarse para acceder a las funcionalidades protegidas de la aplicación.

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Completa todos los campos')
            return;
        }

        // Simulación: más adelante esto llamará a la API real
        setError('');
        navigate('/dashboard'); // Redirige al dashboard después de un login exitoso
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
            <div className="w-full max-w-sm bg-white rounded-xl shadow-md p-8">
                <h1 className="text-2xl font-bold text-slate-800 text-center">
                    Inventario Práctica
                </h1>
                <p className="text-sm text-slate-500 text-center mt-1 mb-6">
                    Iniciar sesión para continuar
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                            Correo electrónico
                        </label>
                        <input 
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="correo@ejemplo.com"
                            className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
        
                    {error && <p className="text-red-600 text-sm">{error}</p>}

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                            Contraseña
                        </label>
                        <input 
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="********"
                            className="w-full px-3 py-2 border border-slate-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {error && <p className="text-red-600 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors"
                    >
                        Iniciar sesión
                    </button>

                </form>

            </div>
        </div>
    );
}

export default LoginPage;