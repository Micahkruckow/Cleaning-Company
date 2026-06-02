-- =============================================================================
-- PROFILES
-- =============================================================================
create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  phone text,
  avatar_url text,
  updated_at timestamptz default now()
);

alter table public.profiles enable row level security;

create policy "Users can view their own profile"
  on public.profiles for select using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update using (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id) values (new.id);
  return new;
end;
$$;

create or replace trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- =============================================================================
-- SERVICES
-- =============================================================================
create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  price_from numeric(10, 2) not null default 0,
  duration_minutes int not null default 60,
  image_url text,
  is_featured boolean not null default false,
  created_at timestamptz default now()
);

alter table public.services enable row level security;

create policy "Services are publicly readable"
  on public.services for select using (true);

-- Seed default services
insert into public.services (name, slug, description, price_from, duration_minutes, is_featured)
values
  ('Residential Cleaning',  'residential', 'Regular home cleaning — weekly or bi-weekly.',       499, 120, true),
  ('Commercial Cleaning',   'commercial',  'Office and business cleaning contracts.',              799, 180, true),
  ('Deep Cleaning',         'deep',        'Thorough top-to-bottom clean for any space.',          999, 240, true),
  ('Move-In / Move-Out',    'move',        'Full property clean before or after a move.',         1299, 300, false)
on conflict (slug) do nothing;

-- =============================================================================
-- BOOKINGS
-- =============================================================================
create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users on delete cascade not null,
  service_id uuid references public.services on delete restrict not null,
  scheduled_at timestamptz not null,
  address text not null,
  status text not null default 'pending' check (status in ('pending','confirmed','completed','cancelled')),
  notes text,
  created_at timestamptz default now()
);

alter table public.bookings enable row level security;

create policy "Users can view their own bookings"
  on public.bookings for select using (auth.uid() = user_id);

create policy "Users can create their own bookings"
  on public.bookings for insert with check (auth.uid() = user_id);

create policy "Users can cancel their own bookings"
  on public.bookings for update using (auth.uid() = user_id);

-- =============================================================================
-- CONTACT MESSAGES
-- =============================================================================
create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  message text not null,
  is_read boolean not null default false,
  created_at timestamptz default now()
);

alter table public.contact_messages enable row level security;

-- Only admins (service role) can read messages; anonymous users can insert
create policy "Anyone can submit a contact message"
  on public.contact_messages for insert with check (true);
