import "@/styles/globals.css";

import { type Metadata } from "next";

import { SettingButton } from "@/components/layouts/buttons/setting-button";
import { Toaster } from "@/components/elements/ui/toaster";
import { ProgressBarProvider, ThemeProvider } from "@/components/providers";
import { TailwindIndicator } from "@/components/utils/tailwind-indicator";

import { fontIranSans, fontRoboto } from "@/lib/fonts/fonts";
import { cn } from "@/lib/utils";

import { i18n, type Locale } from "#/i18n.config";

export const metadata: Metadata = {
  title: "Luminous",
  description: "The Luminous Team React Project",
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

export const generateStaticParams = () => {
  return i18n.locales.map((locale) => ({ lang: locale }));
};

const RootLayout = ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) => {
  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen antialiased",
          lang === "fa" ? "font-multiFA" : "font-multiEN",
          fontRoboto.variable,
          fontIranSans.variable
        )}
        dir={lang === "en" ? "ltr" : "rtl"}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ProgressBarProvider>
            <div className="relative flex min-h-screen flex-col">
              {children}
            </div>
            <SettingButton lang={lang} />
            {/* <TailwindIndicator /> */}
          </ProgressBarProvider>
        </ThemeProvider>
        <Toaster lang={lang} />
      </body>
    </html>
  );
};

export default RootLayout;
