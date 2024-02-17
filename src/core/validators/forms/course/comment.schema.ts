import { z } from "zod";

export const courseCommentInputSchema = z.object({
  title: z.string(),
  describe: z.string(),
});

export type CourseCommentInputProps = z.infer<typeof courseCommentInputSchema>;
