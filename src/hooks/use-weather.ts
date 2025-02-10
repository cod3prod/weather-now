"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function useWeather() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [isGeoLoading, setIsGeoLoading] = useState(false);
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
      setIsGeoLoading(false);
    };

    const geoError = (err: GeolocationPositionError) => {
      setGeolocationError(err.message);
      console.error("Error getting location:", err);
      setIsGeoLoading(false);
    };

    const geoOptions = {
      enableHighAccuracy: true,
      timeout: 60 * 1000,
      maximumAge: 15 * 60 * 1000,
    };

    const fetchGeoLocation = async () => {
      setIsGeoLoading(true);
      navigator.geolocation.getCurrentPosition(
        geoSuccess,
        geoError,
        geoOptions
      );
    };

    fetchGeoLocation();
  }, [setGeolocationError, setIsGeoLoading, setLocation]);

  const { data, error, isFetching } = useQuery({
    queryKey: ["weather", location?.latitude || 0, location?.longitude || 0],
    queryFn: fetchWeatherData,
    enabled: !!location,
    staleTime: 15 * 60 * 1000,
    gcTime: 30 * 60 * 1000
  });

  return { data, error, isFetching, isGeoLoading, geolocationError };
}
