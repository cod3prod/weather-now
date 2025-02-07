"use client";

import { useWeather } from "@/hooks/use-weather";
import WeatherCard from "@/components/weather-card";
import IsLoading from "@/components/is-loading";
import IsError from "@/components/is-error";


export default function Page() {
  const { data, isFetching, isError, geolocationError } = useWeather();
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center p-4">
      {isFetching && <IsLoading />}
      {isError || geolocationError && <IsError />}
      {data && <WeatherCard data={data} />}
    </main>
  );
}
