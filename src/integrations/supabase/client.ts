// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://fgdppxrkjonraqivgpau.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZnZHBweHJram9ucmFxaXZncGF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0NTczMjEsImV4cCI6MjA1NjAzMzMyMX0.mWaSOZJVL1je6BO9sXdH5_5RPC1prmjJyR8sjmqw5ds";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);