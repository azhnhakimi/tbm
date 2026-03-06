import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { getPlayerProgress } from "@lib/player/getPlayerProgress";
import { playerProgress } from "@models/playerProgress";

export default function Stats() {
  const [progress, setProgress] = useState<playerProgress | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const data = await getPlayerProgress();
      setProgress(data);
    };

    loadData();
  }, []);

  if (!progress) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Floors Cleared {progress.floors_cleared}</Text>
      <Text>Rooms Cleared {progress.rooms_cleared}</Text>
      <Text>Longest Resolve {progress.longest_resolve}</Text>
      <Text>Focus Minutes {progress.focus_minutes}</Text>
      <Text>Bosses Defeated {progress.bosses_defeated}</Text>
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
