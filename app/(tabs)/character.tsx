import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { getPlayerStats } from "@lib/player/getPlayerStats";
import { PlayerStats } from "@models/playerStats";

export default function Character() {
  const [stats, setStats] = useState<PlayerStats | null>(null);

  useEffect(() => {
    async function loadData() {
      const stats = await getPlayerStats();
      setStats(stats);
    }

    loadData();
  }, []);

  if (!stats) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Mind: {stats.mind}</Text>
      <Text>Discipline: {stats.discipline}</Text>
      <Text>Focus: {stats.focus}</Text>
      <Text>Strength: {stats.strength}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
