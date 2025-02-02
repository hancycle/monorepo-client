import { useEffect, useRef, useState } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { useRouter, useNavigation } from "expo-router";
import { WebView } from "react-native-webview";

function HomeScreen() {
  // const router = useRouter();
  const navigation = useNavigation();
  const webViewRef = useRef<WebView>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [isWebViewLoaded, setIsWebViewLoaded] = useState(false);
  // 웹 페이지로 데이터 전송 (postMessage 사용)
  const sendMessageToWeb = () => {
    webViewRef?.current?.postMessage(
      JSON.stringify({ message: "Hello from React Native!", value: 42 })
    );
  };

  // 웹 페이지로 JavaScript 실행 (injectJavaScript 사용)
  const executeJS = () => {
    webViewRef?.current?.injectJavaScript(`
      window.postMessage({ message: "Data from React Native", value: 100 }, "*");
    `);
  };

  const handleIFrameLoad = () => {
    if (Platform.OS === "web" && iframeRef.current) {
      console.log("1. 꾸디 네이티브앱 > 웹앱으로 데이터 전송(iframe)");
      iframeRef?.current?.contentWindow?.postMessage(
        JSON.stringify({
          message: "네이티브 앱 데이터",
          value: 42,
        }),
        "*"
      );
    }
  };

  const handleWebViewLoad = () => {
    sendMessageToWeb();
    executeJS();
  };

  useEffect(() => {
    navigation.setOptions({
      title: "홈",
    });
  }, [navigation]);

  useEffect(() => {
    if (isIframeLoaded) {
      handleIFrameLoad();
    }
  }, [isIframeLoaded]);

  useEffect(() => {
    if (Platform.OS === "web") {
      // React Native에서 보낸 메시지 수신
      const handleMessage = (event: MessageEvent) => {
        const allowedOrigin = "http://192.168.14.57:5173"; // 허용할 출처
        if (event.origin !== allowedOrigin) {
          return;
        }

        try {
          const data = JSON.parse(event.data || "{}");
          console.log("4. 꾸디 네이티브앱 > 웹앱 데이터 수신", data);
          // data.setOptions();
          navigation.setOptions({
            title: data.message,
          });
        } catch (error) {
          console.error("데이터 파싱 오류:", error);
        }
      };

      window.addEventListener("message", handleMessage);

      // 컴포넌트 언마운트 시 이벤트 리스너 제거
      return () => {
        window.removeEventListener("message", handleMessage);
      };
    }
  }, []);

  useEffect(() => {
    if (isWebViewLoaded) {
      handleWebViewLoad();
    }
  }, [isWebViewLoaded]);

  return (
    <View style={styles.container}>
      {Platform.OS === "web" && (
        <iframe
          style={{ flex: 1, border: 0 }}
          ref={iframeRef}
          src="http://192.168.14.57:5173"
          onLoad={() => setIsIframeLoaded(true)}
        />
      )}
      {(Platform.OS === "ios" || Platform.OS === "android") && (
        <WebView
          style={{ flex: 1, height: 300, borderWidth: 1, borderColor: "red" }}
          ref={webViewRef}
          source={{ uri: "http://192.168.14.57:5173" }}
          javaScriptEnabled={true}
          originWhitelist={["*"]}
          onLoad={() => {
            setIsWebViewLoaded(true);
          }}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});

export default HomeScreen;
