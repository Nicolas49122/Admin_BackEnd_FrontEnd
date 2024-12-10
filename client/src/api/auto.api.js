import axios from 'axios'



const AutoAPI = axios.create({
    baseURL: 'http://localhost:8000/autos/api/v1/autos/',
    headers: {
        "Content-Type": "multipart/form-data", // Asegúrate de que el token se haya almacenado correctamente
    }
})

export const getAllAutos = () => AutoAPI.get('/');

export const getAuto = (id) => AutoAPI.get(`/${id}`);

export const createAuto = (auto) => AutoAPI.post('/', auto);

export const deleteAuto = (id) => AutoAPI.delete(`/${id}/`);

export const updateAuto = (id, auto) => AutoAPI.put(`/${id}/`, auto)