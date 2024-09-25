"use server";

import { ZodError } from "zod";
import { profileSchema } from "./schemas";

export const createProfileAction = async (
  prevState: any,
  formData: FormData
) => {
  try {
    const rawData = Object.fromEntries(formData);
    const validatedFields = profileSchema.parse(rawData);
    return { message: "Profile Created" };
  } catch (error: ZodError | any) {
    return {
      message: error.issues ? error.issues[0].message : "An error occurred",
    };
  }
};
