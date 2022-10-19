import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { UbicationContext } from "../../context/UbicationContext";
import "./UbicationDisplay.css";

const UbicationDisplay = () => {
  const { id } = useParams();
  const { ubications } = useContext(UbicationContext);
  const ubication = ubications.filter((u) => u.id === Number(id));

  return (
    <div className="ubication-display-container">
      <div className="ubication-display-card">
        <h1 className="ubication-display-name">{ubication[0]?.cityName}</h1>
        <li>lat: {ubication[0]?.latitud}</li>
        <li>lon:{ubication[0]?.longitud}</li>
        <li>Temperatura :{ubication[0]?.temperature}</li>
        <li>Velocidad del viento : {ubication[0]?.windSpeed}</li>
        <Link className="btn-back" to="/home">
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default UbicationDisplay;
