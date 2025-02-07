import getCloudIcon from "@/data/cloud-icons";
import { weatherIcons } from "@/data/weather-icons";
import {
  FaArrowDown,
  FaArrowUp,
  FaTint,
  FaWind,
} from "react-icons/fa";

export default function WeatherCard({ data }: { data: WeatherResponse  | null }) {
  console.log("test", data);

  if(!data) return null;

  return (
    <div className="bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl p-6 w-full max-w-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-white">{data.name}</h1>
        <div className="text-6xl">{weatherIcons[data.weather[0].icon]}</div>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-6xl font-light text-white mb-2">{data.main.temp}°C</h2>
        <p className="text-xl text-white/80 capitalize">
          {data.weather[0].description}
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white/10 rounded-xl p-4 text-center">
          <FaWind className="text-2xl text-white mx-auto mb-2" />
          <p className="text-white">{data.wind.speed} km/h</p>
          <span className="text-sm text-white/60">바람</span>
        </div>

        <div className="bg-white/10 rounded-xl p-4 text-center">
          <FaTint className="text-2xl text-white mx-auto mb-2" />
          <p className="text-white">{data.main.humidity}%</p>
          <span className="text-sm text-white/60">습도</span>
        </div>

        <div className="bg-white/10 rounded-xl p-4 text-center">
          {getCloudIcon(data.clouds.all)}
          <p className="text-white">{data.clouds.all}%</p>
          <span className="text-sm text-white/60">구름 상태</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div className="bg-white/10 rounded-xl p-4 text-center">
          <FaArrowUp className="text-2xl text-white mx-auto mb-2" />
          <p className="text-white">{data.main.temp_max}°C</p>
          <span className="text-sm text-white/60">최고 기온</span>
        </div>

        <div className="bg-white/10 rounded-xl p-4 text-center">
          <FaArrowDown className="text-2xl text-white mx-auto mb-2" />
          <p className="text-white">{data.main.temp_min}°C</p>
          <span className="text-sm text-white/60">최저 기온</span>
        </div>
      </div>
    </div>
  );
}
