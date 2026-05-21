import { z } from 'zod'

export const LeadFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  phone: z.string().min(10, 'Enter a valid phone number').max(20),
  email: z.string().email('Enter a valid email address'),
  movingFrom: z.string().min(2, 'Enter a city and ZIP').max(200),
  movingTo: z.string().min(2, 'Enter a city and ZIP').max(200),
  moveDate: z.string().optional(),
  notes: z.string().max(1000).optional(),
  serviceType: z.enum(["moving", "junk-removal", "labor-only", "other"]).optional(),
  _honey: z.string().optional(),
})

export type LeadFormData = z.infer<typeof LeadFormSchema>
