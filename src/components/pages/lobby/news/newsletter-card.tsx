import { NewsletterRegisterForm } from "@/components/forms/newsletter-register-form";

import { type Locale } from "#/i18n.config";

export const NewsletterSection = ({ lang }: { lang: Locale }) => {
  return (
    <div className="flex w-full items-center justify-center p-5">
      <NewsletterRegisterForm lang={lang} />
    </div>
  );
};
