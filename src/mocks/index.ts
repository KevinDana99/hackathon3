import type { ReactAnimatedWeatherProps } from "../components/Dashboard/types";

const wheatherList = [
  {
    icon: "CLOUDY",
    color: "goldenrod",
    size: 100,
    animate: true,
    name: "humedad",
  },
  {
    icon: "WIND",
    color: "goldenrod",
    size: 100,
    animate: true,
    name: "fuertes vientos",
  },
  {
    icon: "CLEAR_DAY",
    color: "goldenrod",
    size: 100,
    animate: true,
    name: "temperatura",
  },
  {
    icon: "RAIN",
    color: "goldenrod",
    size: 100,
    animate: true,
    name: "lluvia",
  },

  {
    icon: "SNOW",
    color: "goldenrod",
    size: 100,
    animate: true,
    name: "nieve",
  },

  {
    icon: "SLEET",
    color: "goldenrod",
    size: 100,
    animate: true,
    name: "agua nieve",
  },
] as ReactAnimatedWeatherProps[];

const dictionaryList = [
  {
    CLEAR_DAY: "dia despejado",
  },
  {
    CLEAR_NIGHT: "noche despejada",
  },
  {
    CLOUDY: "nublado",
  },
  {
    FOG: "neblina",
  },
  {
    PARTLY_CLOUDY_DAY: "Parcialmente nublado",
  },
  {
    PARTLY_CLOUDY_NIGHT: "Noche parcialmente nublada",
  },
  {
    RAIN: "lluvioso",
  },
  {
    SLEET: "aguanieve",
  },
  {
    SNOW: "nieve",
  },
  {
    WIND: "vientos fuertes",
  },
];

export { wheatherList, dictionaryList };
