export type Service = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price_from: number;
  duration_minutes: number;
  image_url: string | null;
  is_featured: boolean;
  created_at: string;
};

export type Booking = {
  id: string;
  user_id: string;
  service_id: string;
  scheduled_at: string;
  address: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  notes: string | null;
  created_at: string;
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  message: string;
  is_read: boolean;
  created_at: string;
};

export type Profile = {
  id: string;
  full_name: string | null;
  phone: string | null;
  avatar_url: string | null;
  updated_at: string;
};
