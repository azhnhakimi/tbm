import { getUser } from "../auth/getUser";
import { supabase } from "../supabase";

export async function getPlayer() {
  const user = await getUser();

  if (!user) return null;

  const { data, error } = await supabase
    .from("players")
    .select("*")
    .eq("user_id", user.id)
    .single();

  if (error) throw error;

  return data;
}
