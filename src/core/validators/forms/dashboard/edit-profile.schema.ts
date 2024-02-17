import { z } from "zod";

export const editProfileInputSchema = z.object({
  LName: z.string(),
  FName: z.string(),
  UserAbout: z.string(),
  LinkdinProfile: z.string(),
  TelegramLink: z.string(),
  ReceiveMessageEvent: z.boolean(),
  HomeAdderess: z.string(),
  NationalCode: z.string(),
  Gender: z.boolean(),
  BirthDay: z.string(),
  Latitude: z.string(),
  Longitude: z.string(),
});

export type EditProfileInputProps = z.infer<typeof editProfileInputSchema>;
