import { type Metadata } from "next";

import { Footer } from "@/components/layouts/footer/footer";
import { Header } from "@/components/layouts/header/header";

import { auth } from "@/lib/auth";

import { type Locale } from "#/i18n.config";

export const metadata: Metadata = {
  title: "Luminous",
  description: "The Luminous Team React Project",
  icons: {
    icon: "/favicon/favicon.ico",
  },
};

const LobbyLayout = async ({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) => {
  const session = await auth();

  return (
    <div className="relative flex min-h-screen flex-col">
      <Header lang={lang} token={session?.user.token} />
      {children}
      <Footer lang={lang} />
    </div>
  );
};

export default LobbyLayout;
