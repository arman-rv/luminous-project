import { create } from "zustand";

interface UserProps {
  phoneNumber: string;
}
interface UserStore {
  user: UserProps;
  setUser: (data: UserProps) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: {
    phoneNumber: "",
  },
  setUser: (data) => set({ user: data }),
}));
