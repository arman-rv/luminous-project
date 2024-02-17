import { TitleBox } from "@/components/pages/lobby";
import { ServiceCard } from "@/components/pages/lobby/services/service-card";

import { servicesDict, servicesTitleBoxDict } from "@/dict/pages/lobby.dict";

import { type Locale } from "#/i18n.config";

export const ServiceSection = ({ lang }: { lang: Locale }) => {
  return (
    <section className="relative mt-20 sm:mt-40">
      <div className="container">
        <TitleBox
          lang={lang}
          title={servicesTitleBoxDict.title}
          desc={servicesTitleBoxDict.subtitle}
        />
        <div className="grid cursor-default grid-rows-2 gap-5 md:grid-cols-2">
          {servicesDict.map((item) => (
            <ServiceCard
              key={item.id}
              title={item.title[lang]}
              desc={item.desc[lang]}
              Icon={item.icon}
              bgColor={item.bgColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
