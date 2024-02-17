import Image from "next/image";
import Link from "next/link";

import { H1 } from "@/components/elements/ui";

import { heroDict } from "@/dict/pages/lobby.dict";

import { type Locale } from "#/i18n.config";

export const HeroSection = ({ lang }: { lang: Locale }) => {
  return (
    <section className="relative pt-10 lg:pt-24">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-y-10 text-center lg:flex-nowrap lg:justify-between lg:text-start">
          <div className="order-2 w-full sm:w-auto lg:order-1">
            <H1 className="text-6xl font-black leading-[80px] lg:text-7xl lg:leading-[96px]">
              {heroDict.title[lang]}
            </H1>
            <p className="mt-5 max-w-xl text-center font-medium text-gray-600 dark:text-gray-400 md:text-lg lg:text-start">
              {heroDict.description[lang]}
            </p>
            <button className="group relative mt-5 inline-flex w-fit items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-primary to-accent p-[4px] font-extrabold text-secondary transition-transform duration-300 hover:to-primary hover:text-primary focus:outline-none active:scale-90">
              <Link
                href={`/${lang}/courses`}
                className="relative rounded-lg px-9 py-2 transition-all duration-300 ease-in group-hover:bg-background"
              >
                {heroDict.button[lang]}
              </Link>
            </button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative h-[400px] w-[300px] sm:w-[400px] lg:h-[500px] lg:w-[460px] xl:h-[600px] xl:w-[550px]">
              <Image
                src="/images/artworks/boy-light.svg"
                fill
                priority
                quality={100}
                alt="hero-section"
                className="object-contain dark:hidden"
              />
              <Image
                src="/images/artworks/boy-dark.svg"
                fill
                priority
                quality={100}
                alt="hero-section"
                className="hidden object-contain dark:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
