import { ChangePasswordForm } from "@/components/forms/edit-password-form";
import { EditProfileForm } from "@/components/forms/edit-profile-form";
import { H2 } from "@/components/elements/ui";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/elements/ui/tabs";
import { Icons } from "@/components/assets/icons";

import { type Locale } from "#/i18n.config";

const ProfileDetails = ({ params: { lang } }: { params: { lang: Locale } }) => {
  return (
    <div className="flex h-full w-full flex-col space-y-6">
      <div className="flex flex-col gap-4 xs:flex-row xs:items-center xs:justify-between">
        <H2 className="text-2xl font-bold tracking-tight">
          {{ fa: "ویرایش پروفایل", en: "Edit Profile" }[lang]}
        </H2>
      </div>
      <div className="h-full w-full">
        <Tabs
          defaultValue="account"
          className="flex h-full w-full flex-col items-center justify-center"
        >
          <TabsList className="flex h-14 w-full flex-row gap-4 bg-primary">
            <TabsTrigger
              value="password"
              className="text-white data-[state=active]:text-black dark:data-[state=active]:text-white"
            >
              {{ fa: "تغییر رمزعبور", en: "Password Change" }[lang]}
            </TabsTrigger>
            <div className="flex h-52 w-52 -translate-y-10 items-center justify-center rounded-full bg-slate-200">
              <Icons.placeholder className="h-6 w-6 text-slate-800" />
            </div>
            <TabsTrigger
              value="account"
              className="text-white data-[state=active]:text-black dark:data-[state=active]:text-white"
            >
              {{ fa: "اطلاعات حساب", en: "Account Info" }[lang]}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="password" className="h-full w-full">
            <div className="flex h-full w-full items-center justify-center rounded-md border-4 border-primary">
              <ChangePasswordForm lang={lang} />
            </div>
          </TabsContent>
          <TabsContent value="account" className="h-full w-full">
            <div className="flex h-full w-full items-center justify-center rounded-md border-4 border-primary">
              <EditProfileForm lang={lang} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};
export default ProfileDetails;
