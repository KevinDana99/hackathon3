// react-animated-weather.d.ts
declare module "react-animated-weather" {
  type WeatherIcon =
    | "CLEAR_DAY"
    | "CLEAR_NIGHT"
    | "PARTLY_CLOUDY_DAY"
    | "PARTLY_CLOUDY_NIGHT"
    | "CLOUDY"
    | "RAIN"
    | "SLEET"
    | "SNOW"
    | "WIND"
    | "FOG";

  interface ReactAnimatedWeatherProps {
    icon: WeatherIcon;
    animate?: boolean;
    size?: number;
    color?: string;
  }

  const ReactAnimatedWeather: React.FC<ReactAnimatedWeatherProps>;

  export default ReactAnimatedWeather;
}
