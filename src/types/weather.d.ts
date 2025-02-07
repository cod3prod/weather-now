type WeatherIconType =
  | "01d"
  | "02d"
  | "03d"
  | "04d"
  | "09d"
  | "10d"
  | "13d"
  | "50d"
  | "01n"
  | "02n"
  | "03n"
  | "04n"
  | "09n"
  | "10n"
  | "13n"
  | "50n";

type WeatherResponse = {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  snow: { "1h": number };
  sys: { country: string; sunrise: number; sunset: number };
  timezone: number;
  visibility: number;
  weather: {
    description: string;
    icon: WeatherIconType;
    id: number;
    main: string;
  }[];
  wind: { speed: number; deg: number; gust: number };
};
