import { z } from 'zod';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

export const PrivateSeedSchema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().email('Invalid email'),
  contact: z
    .string()
    .refine((val) => parsePhoneNumberFromString(val)?.isValid() ?? false, {
      message:
        'Invalid phone number. Use format [country code + 10 digit number]. eg: +1234567890',
    }),
  country: z.string().min(1, 'Country is required'),
  linkedin: z.string().url('Invalid URL').optional().or(z.literal('')),
  capital: z.number().min(5000, { message: 'Minimum capital is $5k' }),
  value: z.string().min(1, 'This field is required'),
  whyJoin: z.string().min(1, 'This field is required'),
  canPassKyc: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to pass KYC' }),
  }),
  indvOrOrg: z.enum(['Ind', 'Org'], {
    errorMap: () => ({ message: 'This field is required' }),
  }),
  confidentiality: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the confidentiality' }),
  }),
  acknowledgement: z.literal(true, {
    errorMap: () => ({ message: 'You must acknowledge the terms' }),
  }),
  disclosureTerm: z.literal(true, {
    errorMap: () => ({ message: 'You must agree disclosure terms' }),
  }),
  nonUsCitizen: z.literal(true, {
    errorMap: () => ({ message: 'You must be non US citizen' }),
  }),
});

export type PrivateSeedFormData = z.infer<typeof PrivateSeedSchema>;
