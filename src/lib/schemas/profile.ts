import { z } from "zod";

export const personalDetailsSchema = z.object({
  // Removed { required_error: ... } to fix build error
  dob: z.date(), 
  
  // Removed custom error map
  gender: z.enum(["Male", "Female", "Other", "Prefer not to say"]),
  
  // Removed custom error map
  social_category: z.enum(["General", "SC", "ST", "OBC-NCL", "EWS"]),
  
  nationality: z.string().min(2, "Nationality is required."),
  aadhar_number: z.string().optional(),
  address_permanent: z.string().min(10, "Permanent address is too short."),
  address_correspondence: z.string().optional(),
  is_financial_aid_seeker: z.boolean().default(false),
});

export type PersonalDetailsFormValues = z.infer<typeof personalDetailsSchema>;
