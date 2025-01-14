import Hero from "@/components/MainPage/Hero/Hero";
import AboutAuthor from "@/components/MainPage/AboutAuthor/AboutAuthor";
import { getTranslations } from "next-intl/server";
import MyTools from "@/components/MainPage/MyTools/MyTools";

export async function generateMetadata({ params }) {
  const locale = (await params).locale;
  const t = await getTranslations({ locale, namespace: "Metadata.Main" });
  return {
    metadataBase: new URL("https://darikarma.vercel.app").toString(),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/",
      languages: {
        "uk-UA": `/uk`,
        "ru-Ru": "/ru",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: "/",
      siteName: "Darikarma",
      images: [
        {
          url: new URL(
            "/opengraph-image.png",
            "https://darikarma.vercel.app"
          ).toString(),
          width: 600,
          height: 600,
        },
        {
          url: new URL(
            "/opengraph-image.png",
            "https://darikarma.vercel.app"
          ).toString(),
          width: 1200,
          height: 1200,
          alt: "Custom alt",
        },
      ],
      locale: "uk",
      type: "website",
    },
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: t("title"),
      description: t("description"),
      images: ["/twitter-image.png"],
    },
    manifest: "/manifest.json",
    icons: {
      icon: "/icon.ico",
      shortcut: "/favicon.png",
      apple: "/apple-touch-icon.png",
      other: [
        {
          rel: "apple-touch-icon-precomposed",
          url: "/apple-touch-icon-precomposed.png",
        },
      ],
    },
  };
}

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutAuthor />
      <MyTools />
    </main>
  );
}
