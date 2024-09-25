import * as z from "zod";
import { ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(5, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  username: z.string().min(1, "Username is required"),
});
