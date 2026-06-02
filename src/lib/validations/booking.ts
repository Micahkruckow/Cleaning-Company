import { z } from "zod";

export const bookingSchema = z.object({
  service_id: z.string().uuid("Please select a service"),
  scheduled_at: z.string().min(1, "Please choose a date and time"),
  address: z.string().min(5, "Please enter your full address"),
  notes: z.string().optional(),
});

export type BookingFormValues = z.infer<typeof bookingSchema>;
