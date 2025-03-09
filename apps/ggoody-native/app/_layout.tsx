import "react-native-gesture-handler";
import "react-native-reanimated";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  BottomSheetModalProvider,
  GestureHandlerRootView,
} from "@hancycle/ui/components/expo/BottomSheet";
import { View, StyleSheet } from "react-native";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <BottomSheetModalProvider>
          <View style={styles.container}>
            <View style={styles.screen}>
              <Stack
                screenOptions={{
                  headerShown: true,
                  headerTitleAlign: "center",
                  headerBackButtonDisplayMode: "generic",
                  headerTintColor: "black",
                }}
              />
            </View>
          </View>
        </BottomSheetModalProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  screen: {
    flex: 1,
    maxWidth: 468,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 2,
    borderColor: "blue",
  },
});
