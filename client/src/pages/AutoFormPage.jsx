import { useForm } from "react-hook-form";
import { createAuto, deleteAuto, updateAuto, getAuto } from "../api/auto.api";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export function AutoFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();
    formData.append("marca", data.marca);
    formData.append("modelo", data.modelo);
    formData.append("year", data.year);
    formData.append("precio", data.precio);
    if (data.imagen[0]) {
      formData.append("imagen", data.imagen[0]);
    }

    if (params.id) {
      await updateAuto(params.id, formData); // Actualiza el coche con el archivo
      toast.success("Carro actualizado", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    } else {
      await createAuto(formData); // Crea un coche con el archivo
      toast.success("Carro agregado", {
        position: "bottom-right",
        style: {
          background: "#101010",
          color: "#fff",
        },
      });
    }
    navigate("/auto");
  });

  useEffect(() => {
    async function loadAuto() {
      if (params.id) {
        const res = await getAuto(params.id);
        setValue("marca", res.data.marca);
        setValue("modelo", res.data.modelo);
        setValue("year", res.data.year);
        setValue("precio", res.data.precio);
      }
    }
    loadAuto();
  }, []);

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Marca"
          {...register("marca", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.marca && <span>Este campo es requerido</span>}

        <input
          type="text"
          placeholder="Modelo"
          {...register("modelo", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        <input
          type="number"
          placeholder="Año"
          {...register("year", { required: true, min: 1900 })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        <input
          type="number"
          placeholder="Precio"
          {...register("precio", { required: true, min: 0 })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        <input
          type="file"
          {...register("imagen")}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />

        <button
          className="bg-indigo-500 p-3 rounded-lg border w-full mt-3"
          type="submit"
        >
          Guardar
        </button>
      </form>

      {params.id && (
        <button
          className="bg-red-500 p-3 rounded-lg w-48 mt-3"
          onClick={async () => {
            const accepted = window.confirm("Estas seguro?");
            if (accepted) {
              await deleteAuto(params.id);
              toast.success("Carro eliminado", {
                position: "bottom-right",
                style: {
                  background: "#101010",
                  color: "#fff",
                },
              });
              navigate("/auto");
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}
