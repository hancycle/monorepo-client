import { Image, StyleSheet, Platform, Text, View } from "react-native";
import { WebView } from "react-native-webview";

import Animated from "react-native-reanimated";
import Button from "@hancycle/ui/react/components/Button";

import ParallaxScrollView from "@/components/ParallaxScrollView";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Animated.ScrollView>
        <Animated.View>
          <Text>Home</Text>
          <Button>Button</Button>
          <WebView
            source={{ uri: "http://192.168.219.111:5173" }}
            style={styles.webview}
            userAgent={
              Platform.OS === "ios" ? "ggoody-app-ios" : "ggoody-app-android"
            }
            originWhitelist={["*"]} // 모든 도메인 허용
            javaScriptEnabled={true} // JavaScript 활성화
          />
        </Animated.View>
      </Animated.ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderStyle: "solid",
  },
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
