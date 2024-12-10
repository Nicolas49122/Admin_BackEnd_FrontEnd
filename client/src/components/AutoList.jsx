import { useEffect, useState } from "react";
import { getAllAutos } from "../api/auto.api";
import { AutoCard } from "./AutoCard";

export function AutoList() {
    const [autos, setAutos] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga
    const [error, setError] = useState(null); // Estado de error

    useEffect(() => { 
        async function loadAuto() {
            try {
                const res = await getAllAutos();
                setAutos(res.data);
            } catch (err) {
                setError("No se pudieron cargar los autos");
            } finally {
                setLoading(false);
            }
        }
        loadAuto();
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            {loading ? (
                <div className="flex justify-center items-center space-x-2">
                    <div className="animate-spin rounded-full border-4 border-indigo-500 border-t-transparent w-12 h-12"></div>
                    <span className="text-xl text-gray-600">Cargando autos...</span>
                </div>
            ) : error ? (
                <div className="text-center py-5">
                    <span className="text-xl text-red-500 font-semibold">{error}</span>
                </div>
            ) : autos.length === 0 ? (
                <div className="text-center py-5">
                    <span className="text-xl text-gray-600">No hay autos disponibles</span>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {autos.map(auto => (
                        <AutoCard key={auto.id} auto={auto} />
                    ))}
                </div>
            )}
        </div>
    );
}
