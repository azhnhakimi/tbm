import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "You stand at the entrance\nof the Dungeon of Self",
  },
  {
    id: "2",
    title: "Every task is a chamber\nEvery focus session is a battle",
  },
  {
    id: "3",
    title: "Descend\nSurvive\nAscend",
  },
];

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  const handleEnter = async () => {
    await AsyncStorage.setItem("onboarding_done", "true");
    router.replace("/(onboarding)/register");
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        onScroll={handleScroll}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        )}
      />

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[styles.dot, i === currentIndex && styles.activeDot]}
          />
        ))}
      </View>

      {/* Button only on last page */}
      {currentIndex === slides.length - 1 && (
        <TouchableOpacity style={styles.button} onPress={handleEnter}>
          <Text style={styles.buttonText}>Enter the Dungeon</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0000",
    justifyContent: "center",
    alignItems: "center",
  },

  slide: {
    width,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 40,
  },

  text: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    lineHeight: 36,
  },

  dotsContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 120,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#555",
    marginHorizontal: 5,
  },

  activeDot: {
    backgroundColor: "#fff",
  },

  button: {
    position: "absolute",
    bottom: 60,
    backgroundColor: "#8B0000",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 6,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});
