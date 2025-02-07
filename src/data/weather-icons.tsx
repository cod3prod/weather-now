import { JSX } from "react";
import { RiMistFill } from "react-icons/ri";
import {
  WiCloud,
  WiCloudy,
  WiDayCloudy,
  WiDaySunny,
  WiNightRain,
  WiShowers,
  WiSnow,
} from "react-icons/wi";

export const weatherIcons: Record<WeatherIconType, JSX.Element> = {
  "01d": <WiDaySunny className="text-yellow-500 text-6xl" />,
  "02d": <WiDayCloudy className="text-gray-400 text-6xl" />,
  "03d": <WiCloud className="text-gray-600 text-6xl" />,
  "04d": <WiCloudy className="text-gray-700 text-6xl" />,
  "09d": <WiShowers className="text-blue-500 text-6xl" />,
  "10d": <WiNightRain className="text-blue-400 text-6xl" />,
  "13d": <WiSnow className="text-white text-6xl" />,
  "50d": <RiMistFill className="text-gray-500 text-6xl" />,
  "01n": <WiDaySunny className="text-yellow-500 text-6xl" />,
  "02n": <WiDayCloudy className="text-gray-400 text-6xl" />,
  "03n": <WiCloud className="text-gray-600 text-6xl" />,
  "04n": <WiCloudy className="text-gray-700 text-6xl" />,
  "09n": <WiShowers className="text-blue-500 text-6xl" />,
  "10n": <WiNightRain className="text-blue-400 text-6xl" />,
  "13n": <WiSnow className="text-white text-6xl" />,
  "50n": <RiMistFill className="text-gray-500 text-6xl" />,
};
