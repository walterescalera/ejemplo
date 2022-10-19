import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Ubication.css";

const UbicationForm = ({ initialValue, submit, title, btnLabel }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    reset(initialValue);
  }, [initialValue, reset]);

  return (
    <div className="ubication-new-container">
      <span>{title}</span>
      <form className="ubication-form" onSubmit={handleSubmit(submit)}>
        <input
          className="input-ubication-name-form"
          type="text"
          placeholder="Nombre de la ciudad"
          {...register("cityName", {
            required: "Debe ingresar un nombre de ciudad",
          })}
        />
        <p>{errors.cityName?.message}</p>
        <input
          className="input-ubication-name-form"
          type="text"
          placeholder="Ingrese latitud"
          {...register("latitud", {
            required: "Debe ingresar latitud",
          })}
        />
        <p>{errors.latitud?.message}</p>
        <input
          className="input-ubication-name-form"
          type="text"
          placeholder="Ingrese longitud"
          {...register("longitud", {
            required: "Debe ingresar longitud",
          })}
        />
        <p>{errors.longitud?.message}</p>
        <div className="btn-container">
          <button className="btn-form" type="submit">
            {btnLabel}
          </button>
          {/* <button className="btn-secundary" to="/home">
          Cancelar
          </button */}
          <Link className="btn-back" to="/home">
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UbicationForm;
