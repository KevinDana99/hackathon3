const wheatherList = [
  {
    id: "1",
    icon: "WIND",
    color: "goldenrod",
    size: 100,
    animate: true,
    name: "fuertes vientos",
    defaultQueryType: "lowerthan",
  },
  {
    id: "2",
    icon: "CLEAR_DAY",
    color: "goldenrod",
    size: 100,
    animate: true,
    name: "temperature",
    unit: "°C",
  },
  {
    id: "3",
    icon: "RAIN",
    color: "goldenrod",
    size: 100,
    animate: true,
    name: "rain",
    unit: "mm",
  },
];

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
