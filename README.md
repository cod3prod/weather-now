# Weather Now

**TanStack Query를 활용한 날씨 애플리케이션**

## 🎯 **프로젝트 목적**

### **핵심 목표**

- **TanStack Query**: `useQuery`를 사용해 날씨 데이터를 효율적으로 로드하고 상태를 관리합니다.

## 🔨 **기술 스택**

- **주요 기술**: Next.js 15
- **스타일링**: Tailwind CSS
- **라이브러리**: TanStack Query v5

## 📝 **핵심 학습 내용**

### TanStack Query

TanStack Query는 React 애플리케이션에서 데이터 fetching, 캐싱, 동기화 등을 손쉽게 처리해주는 라이브러리입니다. 이를 통해 API 호출을 더 효율적이고 구조화된 방식으로 관리할 수 있습니다

- `useQuery`: 데이터 가져오기, 캐싱, 상태 관리
- `enabled`: 특정 조건에 맞을 때만 데이터를 로드
- `staleTime`: 데이터가 `신선한 상태`로 유지되는 시간 설정
- `placeholderData`: 데이터를 요청하는 동안 `임시 데이터`를 유지

```typescript
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

// ...

const { data, error, isFetching, isError } = useQuery({
  queryKey: ["weather", location],
  queryFn: () => {
    if (!location) return Promise.resolve(null);
    return fetchWeatherData({ queryKey: ["weather", location] });
  },
  enabled: !!location,
  staleTime: 5 * 1000,
  placeholderData: (prev) => prev,
});
```

## ⚙️ **프로젝트 설정**

### 환경 변수

```
NEXT_PUBLIC_WEATHER_API_KEY=<OpenWeatherMap API>
```

### 프로젝트 실행

```bash
# 패키지 설치
npm install

# 로컬 개발 환경 실행
npm run dev
```
