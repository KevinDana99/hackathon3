export type WeatherIcon =
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

export interface ReactAnimatedWeatherProps {
  icon: WeatherIcon;
  animate?: boolean;
  size?: number;
  color?: string;
}
