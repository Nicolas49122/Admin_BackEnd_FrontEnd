import { useNavigate } from "react-router-dom";

export function AutoCard({ auto }) {
    const navigate = useNavigate();

    // Verificar si la URL de la imagen es válida o no
    const imageUrl = auto.imagen ? `${auto.imagen}` : null;

    return (
        <div 
            className="bg-zinc-800 p-4 hover:bg-zinc-700 hover:cursor-pointer rounded-lg shadow-md"
            onClick={() => navigate(`/auto/${auto.id}`)}
        >
            <h1 className="font-bold text-lg text-white uppercase">{auto.marca}</h1>
            <p className="text-slate-400">Modelo: {auto.modelo}</p>
            <p className="text-slate-300">Año: {auto.year}</p>
            <p className="text-white">S/. {auto.precio}</p>

            {/* Verifica si hay una imagen y es válida */}
            {imageUrl ? (
                <img 
                    src={imageUrl} 
                    alt={`${auto.marca} ${auto.modelo}`} 
                    className="mt-2 w-full h-auto rounded-md shadow-sm"
                />
            ) : (
                <div className="mt-2 text-center text-gray-400">No image available</div>
            )}
        </div>
    );
}
