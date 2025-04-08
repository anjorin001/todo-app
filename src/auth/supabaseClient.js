
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gkdhpnjyovhlgsstukpt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrZGhwbmp5b3ZobGdzc3R1a3B0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQwOTQ0MDYsImV4cCI6MjA1OTY3MDQwNn0.Ilcc_1fp5LBFygSzbYCwNS9NAJdNeq2WAzPSgQN9dLQ';

export const supabase = createClient(supabaseUrl, supabaseKey);
