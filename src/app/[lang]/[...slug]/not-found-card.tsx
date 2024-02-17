import Image from "next/image";
import Link from "next/link";

import { type Locale } from "#/i18n.config";

const NotFoundCard = ({ lang }: { lang: Locale }) => {
  return (
    <>
      <div className="flex w-fit flex-col items-center justify-center">
        <button className="group relative mb-10 inline-flex w-fit items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-primary to-accent p-[4px] font-extrabold text-secondary transition-transform duration-300 hover:to-primary hover:text-primary focus:outline-none active:scale-90">
          <Link
            href={`/${lang}`}
            className="relative rounded-lg px-9 py-2 text-2xl transition-all duration-300 ease-in group-hover:bg-background"
          >
            {{ fa: "بازگشت به صفحه اصلی", en: "Back to home" }[lang]}
          </Link>
        </button>
        <div className="relative aspect-[2/1] w-[1000px]">
          <Image
            alt="404-bg"
            src="/images/artworks/404.svg"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};
export default NotFoundCard;
