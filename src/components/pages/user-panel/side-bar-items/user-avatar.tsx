import { H1 } from "@/components/elements/ui";
import { Icons } from "@/components/assets/icons";

type UserAvatarProps = {
  fName: string;
  lName: string;
  picture: string;
};

export const UserAvatar = ({ fName, lName, picture }: UserAvatarProps) => {
  return (
    <div className="flex w-fit flex-col items-center justify-center gap-3 p-7">
      <div className="relative aspect-square h-24 rounded-full">
        {/* <Image
          src="/images/dev/node-red.png"
          fill
          alt="avatar"
          className="rounded-full object-fill"
        /> */}
        <div className="flex h-full items-center justify-center rounded-full bg-gray-200">
          <Icons.placeholder className="h-7 w-7 text-slate-400" />
        </div>
        <div className="absolute bottom-2 start-2 h-3 w-3 rounded-full bg-green-500" />
      </div>
      <div className="flex flex-col justify-center gap-1 text-sm">
        <H1 className="font-extrabold text-white">{`${fName} ${lName}`}</H1>
      </div>
    </div>
  );
};
