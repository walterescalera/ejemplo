import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getWeather } from "../../services/service";
import { UbicationContext } from "../../context/UbicationContext";
import "./UbicationCreation.css";
import UbicationForm from "../../components/Ubication/UbicationForm";
import { getCurrentHour, getTemperature, getWindSpeed } from "../../utils";

const UbicationEdit = () => {
  const { id } = useParams();
  const { ubications, setUbications } = useContext(UbicationContext);
  const [currentUbication, setCurrentUbication] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const ubication = ubications.filter((u) => {
      return u.id === Number(id);
    });

    const data = {
      cityName: ubication[0]?.cityName,
      longitud: ubication[0]?.longitud,
      latitud: ubication[0]?.latitud,
    };
    setCurrentUbication(data);
  }, [id, ubications]);

  const handleEdit = async ({ cityName, latitud, longitud }) => {
    const weatherData = await getWeather(latitud, longitud);

    if (weatherData.error) {
      alert(weatherData.reason);
    }

    const ubicationsFiltered = ubications.filter(
      (ubication) => ubication.id !== Number(id)
    );
    console.log("handleEdit | ubicationsFiltered", ubicationsFiltered);

    const ubicationEdited = {
      id: Number(id),
      cityName: cityName,
      latitud: latitud,
      longitud: longitud,
      temperature: getTemperature(weatherData),
      windSpeed: getWindSpeed(weatherData),
    };
    console.log("handleEdit | ubicationEdited", ubicationEdited);

    setUbications([...ubicationsFiltered, ubicationEdited]);

    navigate("/home");
  };

  return (
    <UbicationForm
      initialValue={currentUbication}
      title="Editar una ubicación"
      btnLabel="Editar"
      submit={handleEdit}
    />
  );
};

export default UbicationEdit;
