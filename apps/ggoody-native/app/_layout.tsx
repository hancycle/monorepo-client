import "react-native-gesture-handler";
import "react-native-reanimated";
import { useFonts } from "expo-font";
import { Stack, Redirect } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import {
  BottomSheetModalProvider,
  GestureHandlerRootView,
} from "@hancycle/ui-react-native";
import { View, StyleSheet } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

// 사용자 인증 상태를 확인하는 함수 (예시)
const useIsAuthenticated = () => {
  // 여기에 실제 인증 상태 확인 로직 구현
  // 예: AsyncStorage에서 토큰 확인 등
  return true; // 예시: 인증되지 않은 상태
};

export default function RootLayout() {
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
            {/* 인증 상태에 따라 조건부 리다이렉션 */}
            <Redirect href="/onboarding" />
          </View>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screen: {
    flex: 1,
    maxWidth: 468,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: 3,
    borderColor: "blue",
  },
});
