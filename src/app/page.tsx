"use client";

import { useWeather } from "@/hooks/use-weather";
import WeatherCard from "@/components/weather-card";
import IsLoading from "@/components/is-loading";
import IsError from "@/components/is-error";

export default function Page() {
  const { data, error, isFetching, isGeoLoading, geolocationError } =
    useWeather();

  const message = isGeoLoading
    ? "위치 설정"
    : isFetching
    ? "날씨 찾기"
    : "완료";

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center p-4">
      {(isFetching || isGeoLoading) && <IsLoading message={message} />}
      {(error || geolocationError) && (
        <IsError
          error={geolocationError || error?.message || "Unknown Error"}
        />
      )}
      {data && <WeatherCard data={data} />}
    </main>
  );
}
