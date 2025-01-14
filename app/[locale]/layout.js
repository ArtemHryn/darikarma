import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Cormorant, Cormorant_SC, Geologica } from "next/font/google";
import { routing } from "@/i18n/routing";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

import "./globals.scss";

export const cormorant = Cormorant({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});
export const cormorant_sc = Cormorant_SC({
  subsets: ["cyrillic"],
  weight: ["300", "400", "500", "600", "700"],
});
export const geologica = Geologica({
  subsets: ["cyrillic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const navLink = [
  { name: { uk: "Головна", ru: "Главная" }, link: "/" },
  {
    name: { uk: "Матриця долі", ru: "Матрица судьбы" },
    link: "/matrix-consultations",
  },
  {
    name: { uk: "Кармічний менеджмент", ru: "Кармический менеджмент" },
    link: "/karma-consultations",
  },
  { name: { uk: "Калькулятор", ru: "Калькулятор" }, link: "/calculator" },
  { name: { uk: "Контакти", ru: "Контакты" }, link: "/contacts" },
];

export default async function RootLayout({ children, params }) {
  const locale = (await params).locale;
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={cormorant.className}>
        <NextIntlClientProvider messages={messages}>
          <Header navLink={navLink} />
          {children}
          <Footer navLink={navLink} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
