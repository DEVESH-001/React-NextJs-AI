import { z } from "zod";

export const todoValidation = z.object({
  title: z
    .string()
    .min(3, { message: "Title should be atleast 3 char" })
    .max(40, { message: "Title should be at most 40 char" })
    .trim(),
  description: z
    .string()
    .max(500, { message: "Description should be at most 500 char" })
    .optional()
    .trim(),
  completed: z.boolean().optional(),
  priority: z.enum(["Low", "Medium", "High"]).optional(),
  dueDate: z.string().optional(),
});
