# Weather Now

**TanStack Query를 활용한 날씨 애플리케이션**

## 🎯 **프로젝트 목적**

### **핵심 목표**

- **Geolocation API 최적화**: `Geolocation API`의 다양한 옵션을 활용하여 기능을 최적화합니다.
- **TanStack Query**: `useQuery`를 사용해 날씨 데이터를 효율적으로 로드하고 상태를 관리합니다.

## 🔨 **기술 스택**

- **주요 기술**: Next.js 15
- **스타일링**: Tailwind CSS
- **라이브러리**: TanStack Query v5

## 📝 **핵심 학습 내용**

### 1. Geolocation API 최적화

- `enableHighAccuracy`: 정확도를 높이지만 배터리 소모가 증가함
- `timeout`: 위치 정보를 가져오는 최대 대기 시간
- `maximumAge`: 이전 위치 정보를 캐싱하는 최대 시간


```typescript
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
```

### 2. TanStack Query

- `useQuery`: 데이터 가져오기, 캐싱, 상태 관리
- `enabled`: 특정 조건에 맞을 때만 데이터를 로드
- `staleTime`: 데이터가 `신선한 상태`로 유지되는 시간 설정
- `gctime`: 캐시된 데이터가 메모리에서 제거되기 전 유지 시간

```typescript
  const { data, error, isFetching } = useQuery({
    queryKey: ["weather", location?.latitude || 0, location?.longitude || 0],
    queryFn: fetchWeatherData,
    enabled: !!location,
    staleTime: 15 * 60 * 1000,
    gcTime: 30 * 60 * 1000
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
