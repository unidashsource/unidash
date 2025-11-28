import { z } from "zod";

export const personalDetailsSchema = z.object({
  dob: z.date({
    required_error: "Date of birth is required.",
  }),
  gender: z.enum(["Male", "Female", "Other", "Prefer not to say"], {
    required_error: "Please select a gender.",
  }),
  social_category: z.enum(["General", "SC", "ST", "OBC-NCL", "EWS"], {
    required_error: "Social Category is required for Indian admissions.",
  }),
  nationality: z.string().min(2, "Nationality is required."),
  aadhar_number: z.string().optional(), // Optional for privacy initially
  address_permanent: z.string().min(10, "Permanent address is too short."),
  address_correspondence: z.string().optional(),
  is_financial_aid_seeker: z.boolean().default(false),
});

export type PersonalDetailsFormValues = z.infer<typeof personalDetailsSchema>;
