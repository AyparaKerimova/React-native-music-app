/** @format */

import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, View } from "react-native";
import { colors } from "./assets/theme/colors";
import { useFonts } from "expo-font";
import { HomeScreen } from "./screens/HomeScreen";
import { MusicScreen } from "./screens/MusicScreen";
import { Navbar } from "./components/Navbar";
import { LikeScreen } from "./screens/LikeScreen";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "nunito-semibold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "segoeui-bold": require("./assets/fonts/Segoe UI Bold.ttf"),
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <LikeScreen />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
});
