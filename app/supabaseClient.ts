import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,      // your project URL
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY! // publishable key for client
);
