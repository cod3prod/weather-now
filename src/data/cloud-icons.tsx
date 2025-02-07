import { WiCloud, WiCloudy, WiDayCloudy, WiDaySunny } from "react-icons/wi";

export default function getCloudIcon(clouds: number) {
  if (clouds <= 25) {
    return <WiDaySunny className="text-2xl text-white mx-auto mb-2" />;
  } else if (clouds <= 50) {
    return <WiDayCloudy className="text-2xl text-white mx-auto mb-2" />;
  } else if (clouds <= 75) {
    return <WiCloudy className="text-2xl text-white mx-auto mb-2" />;
  } else {
    return <WiCloud className="text-2xl text-white mx-auto mb-2" />;
  }
}
