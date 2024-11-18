import { Image, StyleSheet, Platform } from "react-native";
import { WebView } from "react-native-webview";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <WebView
        source={{ uri: "http://192.168.219.105:3000" }}
        style={styles.webview}
        userAgent={
          Platform.OS === "ios" ? "ggoody-app-ios" : "ggoody-app-android"
        }
        originWhitelist={["*"]} // 모든 도메인 허용
        javaScriptEnabled={true} // JavaScript 활성화
      />
      <WebView
        source={{ uri: "http://192.168.219.105:5173" }}
        style={styles.webview}
        userAgent={
          Platform.OS === "ios" ? "ggoody-app-ios" : "ggoody-app-android"
        }
        originWhitelist={["*"]} // 모든 도메인 허용
        javaScriptEnabled={true} // JavaScript 활성화
      />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  webview: {
    borderStyle: "solid",
    borderWidth: 1,
    height: 400,
  },
});
