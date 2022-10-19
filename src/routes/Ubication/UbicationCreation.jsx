import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { getWeather } from "../../services/service";
import { UbicationContext } from "../../context/UbicationContext";
import UbicationForm from "../../components/Ubication/UbicationForm";
import "./UbicationCreation.css";
import { getTemperature, getWindSpeed } from "../../utils";

const UbicationCreation = () => {
  const { ubications, setUbications } = useContext(UbicationContext);
  const navigate = useNavigate();
  const defaultValues = {
    cityName: "", // ""
    longitud: "", // ""
    latitud: "", // ""
  };

  const createUbication = async ({ cityName, latitud, longitud }) => {
    const weatherData = await getWeather(latitud, longitud);

    if (weatherData.error) {
      alert(weatherData.reason);
    }

    const ubicationNew = {
      id: ubications.length + 1,
      cityName: cityName,
      latitud: latitud,
      longitud: longitud,
      temperature: getTemperature(weatherData),
      windSpeed: getWindSpeed(weatherData),
    };
    setUbications([...ubications, ubicationNew]);
    navigate("/home");
  };

  return (
    <UbicationForm
      initialValue={defaultValues}
      title="Crear una nueva ubicación"
      btnLabel="Agregar"
      submit={createUbication}
    />
  );
};

export default UbicationCreation;
