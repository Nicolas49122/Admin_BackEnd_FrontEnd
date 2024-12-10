import { Link } from 'react-router-dom';

export function Navigation() {
    return (
        <div className="w-full fixed top-0 left-0 p-4 bg-indigo-600 text-white shadow-md z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link to="/" className="flex items-center">
                    <h1 className="text-3xl font-extrabold">MOTORMARKET</h1>
                </Link>
                
                <div className="flex items-center space-x-4">
                    <button className="bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition duration-300">
                        <Link to="/auto-create">Añadir Auto</Link>
                    </button>

                    <button className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition duration-300">
                        <Link to="/auditoria">Auditoría</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
