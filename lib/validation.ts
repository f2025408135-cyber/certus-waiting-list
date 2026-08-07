import { z } from "zod";

export const ROLE_VALUES = [
  "Kalkulant/in",
  "Baumeister/in",
  "Geschäftsführer/in",
  "Projektleiter/in",
  "Sonstiges",
] as const;

export const COMPANY_SIZE_VALUES = ["1–9", "10–49", "50–79", "80–199", "200+"] as const;

export const AVA_TOOL_VALUES = ["ABK", "NEVARIS", "ORCA", "RIB iTWO", "andere", "keine"] as const;

export const waitlistSchema = z
  .object({
    name: z.string().trim().min(1).max(200),
    email: z.string().trim().email().max(254),
    company: z.string().trim().min(1).max(200),
    role: z.enum(ROLE_VALUES).optional(),
    companySize: z.enum(COMPANY_SIZE_VALUES).optional(),
    avaTool: z.enum(AVA_TOOL_VALUES).optional(),
    pain: z.string().trim().max(2000).optional(),
    consent: z.boolean().refine((v) => v === true, { message: "consent_required" }),
  })
  // .strict(): unknown fields are rejected (the honeypot field
  // `firma_webseite` is stripped by the route before validation).
  .strict();

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}
