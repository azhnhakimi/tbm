import { getPlayer } from "./getPlayer";
import { getPlayerProgress } from "./getPlayerProgress";
import { getPlayerStats } from "./getPlayerStats";

export async function getFullPlayer() {
  const player = await getPlayer();
  const stats = await getPlayerStats();
  const progress = await getPlayerProgress();

  return {
    player,
    stats,
    progress,
  };
}
