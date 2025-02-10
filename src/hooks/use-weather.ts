"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function useWeather() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [geolocationError, setGeolocationError] = useState<string | null>(null);

  const fetchWeatherData = async ({
    queryKey,
  }: {
    queryKey: [string, number, number];
  }): Promise<WeatherResponse> => {
    const [, latitude, longitude] = queryKey;
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
    );
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  };

  useEffect(() => {
    if (!navigator.geolocation) {
      setGeolocationError("Geolocation is not supported by your browser");
      return;
    }

    const geoSuccess = (pos: GeolocationPosition) => {
      const { latitude, longitude } = pos.coords;
      setGeolocationError(null);
      setLocation({ latitude, longitude });
    };

    const geoError = (err: GeolocationPositionError) => {
      setGeolocationError(err.message);
      console.error("Error getting location:", err);
    };

    const geoOptions = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0,
    };

    navigator.geolocation.getCurrentPosition(geoSuccess, geoError, geoOptions);
  }, [setGeolocationError, setLocation]);

  const { data, error, isFetching, isError } = useQuery({
    queryKey: ["weather", location?.latitude || 0, location?.longitude || 0],
    queryFn: fetchWeatherData,
    enabled: !!location,
  });

  return { data, error, isFetching, isError, geolocationError };
}
