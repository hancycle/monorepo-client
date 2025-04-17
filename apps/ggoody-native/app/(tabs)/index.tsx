import { Image, StyleSheet, Platform, Text, View } from "react-native";
import { WebView } from "react-native-webview";
import { useRef, RefObject } from "react";
import Animated from "react-native-reanimated";
import {
  Button,
  BottomSheet,
  BottomSheetModal,
} from "@hancycle/ui-react-native";

export default function HomeScreen() {
  const bottomSheetRef = useRef<BottomSheetModal>(null as any);

  return (
    <View style={styles.container}>
      <Animated.ScrollView>
        <Animated.View>
          <Text>Home</Text>
          <Button
            title="바텀시트 버튼"
            onPress={() => {
              bottomSheetRef.current?.present();
            }}
          />
          <BottomSheet bottomSheetRef={bottomSheetRef}>
            <View style={{ flex: 1, alignItems: "center", height: 400 }}>
              <Text>BottomSheet</Text>
            </View>
          </BottomSheet>
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
  webview: {
    borderStyle: "solid",
    borderWidth: 1,
    height: 400,
  },
});
