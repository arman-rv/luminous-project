import React from "react";
import Image from "next/image";
import Link from "next/link";

import {
  footerMenuOptionsDict,
  footerSocialMediaOptionsDict,
} from "@/dict/layouts/root.dict";

import { cn } from "@/lib/utils";

import { type Locale } from "#/i18n.config";

export const Footer = ({ lang }: { lang: Locale }) => {
  return (
    <div className="my-10">
      {/* footer background */}
      {/* <div className="relative aspect-[7/1] w-full">
        <Image
          src="/images/artworks/footer-art.svg"
          fill
          alt="footer-art"
          className="object-cover"
        />
      </div> */}
      {/* Footer Section */}
      <footer className="container pt-4 grid w-full grid-rows-3 place-content-center border-t-2 lg:grid-cols-3 lg:grid-rows-1">
        {/* Info Area */}
        <div className="flex items-start justify-center gap-6">
          {/* Nav Bar */}
          <ul className="flex flex-col gap-1.5 text-xl font-bold md:text-lg">
            {footerMenuOptionsDict.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="hover:text-gray-100">
                  {item.title[lang]}
                </Link>
              </li>
            ))}
          </ul>
          {/* Phone Numbers */}
          <div className="flex flex-col items-end gap-3 lg:items-start">
            <div
              className={cn(
                "font-bold",
                lang === "en" ? "" : "text-xl md:text-lg"
              )}
            >
              {
                {
                  fa: "شماره های تماس",
                  en: "Phone numbers",
                }[lang]
              }
            </div>
            <ul className="flex flex-col gap-1">
              <li className="font-bold">09110000000</li>
              <li className="font-bold">09120000000</li>
            </ul>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex w-fit items-center gap-4">
            {footerSocialMediaOptionsDict.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-xl text-primary transition-colors duration-500 hover:text-accent xs:text-3xl lg:text-5xl"
              >
                <item.icon />
              </Link>
            ))}
          </div>
          <p className="w-fit font-bold text-primary lg:text-lg">
            {
              {
                fa: "ما را در شبکه‌های اجتماعی دنبال کنید",
                en: "Follow Us on Social Medias",
              }[lang]
            }
          </p>
        </div>
        {/* Trust Badges */}
        <div className="flex items-center justify-center">
          <div className="relative aspect-square h-32">
            <Image
              src="/images/trust/E-Namad.png"
              alt="e-namad"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-square h-32">
            <Image
              src="/images/trust/Sabt.webp"
              alt="sabt"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};
