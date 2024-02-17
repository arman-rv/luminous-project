import localFont from "next/font/local";

export const fontIranSans = localFont({
  src: [
    {
      path: "./IranSansX-Family/IRANSansX-1-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./IranSansX-Family/IRANSansX-2-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./IranSansX-Family/IRANSansX-3-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./IranSansX-Family/IRANSansX-4-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./IranSansX-Family/IRANSansX-5-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./IranSansX-Family/IRANSansX-6-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./IranSansX-Family/IRANSansX-7-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./IranSansX-Family/IRANSansX-8-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./IranSansX-Family/IRANSansX-9-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-iran-sans",
});

export const fontRoboto = localFont({
  src: [
    {
      path: "./Roboto-Family/Roboto-1-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Roboto-Family/Roboto-1-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "./Roboto-Family/Roboto-3-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Roboto-Family/Roboto-3-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./Roboto-Family/Roboto-4-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Roboto-Family/Roboto-4-RegularItalic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Roboto-Family/Roboto-5-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Roboto-Family/Roboto-5-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Roboto-Family/Roboto-7-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Roboto-Family/Roboto-7-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./Roboto-Family/Roboto-9-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./Roboto-Family/Roboto-9-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-roboto",
});
