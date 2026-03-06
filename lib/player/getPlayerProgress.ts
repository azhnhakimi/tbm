import { supabase } from "../supabase";
import { getPlayer } from "./getPlayer";

export async function getPlayerProgress() {
  const player = await getPlayer();

  if (!player) return null;

  const { data, error } = await supabase
    .from("player_progress")
    .select("*")
    .eq("player_id", player.id)
    .single();

  if (error) throw error;

  return data;
}
