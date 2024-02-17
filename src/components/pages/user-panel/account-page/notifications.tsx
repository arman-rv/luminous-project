import { Bell } from "lucide-react";

export const UserDashboardNotification = () => {
  return (
    <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-background text-slate-500 transition-all duration-500 hover:opacity-50">
      <Bell />
    </div>
  );
};
