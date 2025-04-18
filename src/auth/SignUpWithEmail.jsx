import { supabase } from "./supabaseClient";
export const SignUpWithEmail = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({ email, password });
  return { data, error };
};

