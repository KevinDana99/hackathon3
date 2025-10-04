import type { ReactAnimatedWeatherProps } from "../components/Dashboard/types";

const wheatherList = [
  {
    icon: "CLEAR_DAY",
    color: "goldenrod",
    size: 100,
    animate: true,
  },
  {
    icon: "CLEAR_NIGHT",
    color: "goldenrod",
    size: 100,
    animate: true,
  },
  {
    icon: "CLOUDY",
    color: "goldenrod",
    size: 100,
    animate: true,
  },
  {
    icon: "FOG",
    color: "goldenrod",
    size: 100,
    animate: true,
  },
  {
    icon: "PARTLY_CLOUDY_DAY",
    color: "goldenrod",
    size: 100,
    animate: true,
  },
  {
    icon: "PARTLY_CLOUDY_NIGHT",
    color: "goldenrod",
    size: 100,
    animate: true,
  },
  {
    icon: "RAIN",
    color: "goldenrod",
    size: 100,
    animate: true,
  },
  {
    icon: "SLEET",
    color: "goldenrod",
    size: 100,
    animate: true,
  },
  {
    icon: "SNOW",
    color: "goldenrod",
    size: 100,
    animate: true,
  },
  {
    icon: "WIND",
    color: "goldenrod",
    size: 100,
    animate: true,
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
