"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

type Location = {
  latitude: number;
  longitude: number;
};

export function useWeather() {
  const fetchWeatherData = async ({
    queryKey,
  }: {
    queryKey: [string, Location];
  }): Promise<WeatherResponse> => {
    const [, location] = queryKey;
    const { latitude, longitude } = location;
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
    );
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  };

  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const [ geolocationError, setGeolocationError ] = useState<string | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setGeolocationError(null);
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        setGeolocationError("위치 정보를 허락해주세요.");
        console.error("Error getting location:", error);
      }
    );
  }, []);

  const { data, error, isFetching, isError } = useQuery({
    queryKey: ["weather", location],
    queryFn: () => {
      if (!location) return Promise.resolve(null);
      return fetchWeatherData({ queryKey: ["weather", location] });
    },
    enabled: !!location,
    staleTime: 5 * 1000,
  });

  return { data, error, isFetching, isError, geolocationError };
}
