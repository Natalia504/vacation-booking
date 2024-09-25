export type actionFunction = (
  props: any,
  formData: FormData
) => Promise<{ message: string }>;
