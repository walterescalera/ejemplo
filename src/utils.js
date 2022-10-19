const getCurrentHour = () => {
  var currentDate = new Date();
  const currentHour = currentDate.getHours();
  return currentHour;
};

export const getTemperature = (weatherData) => {
  const { hourly, hourly_units } = weatherData;
  const currentHour = getCurrentHour();
  return `${hourly.temperature_2m[currentHour - 1]} ${
    hourly_units.temperature_2m
  }`;
};

export const getWindSpeed = (weatherData) => {
  const { hourly, hourly_units } = weatherData;
  const currentHour = getCurrentHour();
  return `${hourly.windspeed_10m[currentHour - 1]} ${
    hourly_units.windspeed_10m
  }`;
};
