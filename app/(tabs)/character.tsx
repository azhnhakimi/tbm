import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { getFullPlayer } from "@lib/player/getFullPlayer";

export default function Character() {
  useEffect(() => {
    async function loadPlayerData() {
      const { player, stats, progress } = await getFullPlayer();
      console.log(player);
      console.log(stats);
      console.log(progress);
    }

    loadPlayerData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Character</Text>
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
