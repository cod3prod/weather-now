import QueryProvider from "@/components/query-provider";
import { Noto_Sans_KR } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/index.css";

export const metadata: Metadata = {
  title: "Weather Now",
  description: "Simple Weather App using TanStack Query",
  icons: {
    icon: "/favicon.ico",
  },
};

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  preload: true,
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={notoSansKR.className}>
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
