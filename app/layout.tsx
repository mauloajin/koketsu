import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://koketsu.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "纐纈 北新地 日本料理 | 大阪・曽根崎新地の和食",
    template: "%s | 纐纈 北新地 日本料理"
  },
  description:
    "纐纈 北新地 日本料理は、大阪・北新地駅近くの曽根崎新地にある日本料理店です。季節の食材を大切にしたおまかせコース、日本酒やワインとの組み合わせ、接待・会食・記念日のお食事に向いた落ち着いた時間をご案内します。",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "纐纈 北新地 日本料理 | 大阪・曽根崎新地の和食",
    description:
      "大阪・北新地駅近く、曽根崎新地の日本料理店。季節の食材を生かしたおまかせコースを落ち着いた空間で。",
    url: siteUrl,
    siteName: "纐纈 北新地 日本料理",
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "纐纈 北新地 日本料理 | 大阪・曽根崎新地の和食",
    description:
      "大阪・北新地駅近く、曽根崎新地の日本料理店。季節の食材を生かしたおまかせコースを落ち着いた空間で。"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
