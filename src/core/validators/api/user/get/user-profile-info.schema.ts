import { z } from "zod";

export const userProfilePictureSchema = z.object({
  id: z.string(),
  userProfileId: z.number(),
  pictureName: z.string(),
  puctureAddress: z.string(),
  inserDate: z.string(),
});

export const userProfileInfoSchema = z.object({
  currentPictureAddress: z.string(),
  profileCompletionPercentage: z.number().min(0).max(100),
  userImage: z.array(userProfilePictureSchema),
  email: z.string().email(),
  phoneNumber: z.string(),
  lName: z.string(),
  fName: z.string(),
  userAbout: z.string(),
  linkdinProfile: z.string().nullable(),
  telegramLink: z.string().nullable(),
  receiveMessageEvent: z.boolean(),
  homeAdderess: z.string(),
  nationalCode: z.string(),
  gender: z.boolean(),
  birthDay: z.string(),
  latitude: z.string().nullable(),
  longitude: z.string().nullable(),
});

export type UserProfileInfoType = z.infer<typeof userProfileInfoSchema>;
