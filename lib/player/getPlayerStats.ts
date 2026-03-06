import { supabase } from "../supabase";
import { getPlayer } from "./getPlayer";

export async function getPlayerStats() {
  const player = await getPlayer();

  if (!player) return null;

  const { data, error } = await supabase
    .from("player_stats")
    .select("*")
    .eq("player_id", player.id)
    .single();

  if (error) throw error;

  return data;
}
