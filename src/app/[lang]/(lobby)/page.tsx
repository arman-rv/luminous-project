import PageAnimationWrapper from "@/components/layouts/animation/page-animation-wrapper";
import {
  CategoriesSection,
  CourseSection,
  HeroSection,
  NewsSection,
  ServiceSection,
} from "@/components/pages/lobby";
import { TeachersSection } from "@/components/pages/lobby/client";
import { InfoSection } from "@/components/pages/lobby/info/info-section";

import { type Locale } from "#/i18n.config";

const HomePage = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <PageAnimationWrapper className="mx-auto max-w-screen-2xl overflow-hidden">
      <HeroSection lang={lang} />
      <ServiceSection lang={lang} />
      <InfoSection lang={lang} />
      <CourseSection lang={lang} />
      <CategoriesSection lang={lang} />
      <TeachersSection lang={lang} />
      <NewsSection lang={lang} />
    </PageAnimationWrapper>
  );
};

export default HomePage;
