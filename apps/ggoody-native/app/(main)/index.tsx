import { useEffect, useRef, useState } from "react";
import { View, Text, Platform } from "react-native";
import { useRouter, useNavigation } from "expo-router";
import { Button } from "@hancycle/ui/components/expo/Button";
import { WebView } from "react-native-webview";

function HomeScreen() {
  const router = useRouter();
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
      console.log(
        "꾸디 네이티브앱 > 아이프레임 로드",
        iframeRef?.current?.contentWindow
      );
      setTimeout(() => {
        iframeRef?.current?.contentWindow?.postMessage(
          JSON.stringify({
            message: "Hello from React Native Web!",
            value: 42,
          }),
          "*"
        );
      }, 500);
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

  // useEffect(() => {
  //   if (isWebViewLoaded) {
  //     handleWebViewLoad();
  //   }
  // }, [isWebViewLoaded]);

  return (
    <View>
      <Text>HomeScreen</Text>
      {Platform.OS === "web" ? (
        <iframe
          ref={iframeRef}
          src="http://172.30.1.43:5173"
          onLoad={() => setIsIframeLoaded(true)}
        />
      ) : (
        <WebView
          ref={webViewRef}
          source={{ uri: "http://172.30.1.43:5173" }}
          javaScriptEnabled={true}
          originWhitelist={["*"]}
          onLoad={() => setIsWebViewLoaded(true)}
        />
      )}
      <Button title="회원가입으로 이동" onPress={handleIFrameLoad} />
    </View>
  );
}

export default HomeScreen;
