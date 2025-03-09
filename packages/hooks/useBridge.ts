import { useEffect, useRef } from "react";
import { Platform } from "react-native";
import { WebView } from "react-native-webview";

type BridgeMessage = {
  type: string;
  payload: any;
};

type BridgeConfig = {
  webOrigin: string;
  nativeOrigin: string;
};

type UseBridgeResult = {
  sendMessage: (message: BridgeMessage) => void;
  webViewRef: React.RefObject<WebView>;
  iframeRef: React.RefObject<HTMLIFrameElement>;
  handleWebViewLoad: () => void;
  handleIframeLoad: () => void;
};

export const useBridge = (
  config: BridgeConfig,
  onMessage: (message: BridgeMessage) => void
): UseBridgeResult => {
  const webViewRef = useRef<WebView>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // 메시지 전송 함수
  const sendMessage = (message: BridgeMessage) => {
    const messageString = JSON.stringify(message);

    if (Platform.OS === "web") {
      // 웹에서 네이티브로 전송
      window.parent.postMessage(messageString, "*");
    } else {
      // 네이티브에서 웹으로 전송
      webViewRef.current?.postMessage(messageString);
    }
  };

  // 웹뷰 로드 완료 핸들러
  const handleWebViewLoad = () => {
    if (Platform.OS !== "web" && webViewRef.current) {
      // 네이티브에서 웹으로 초기 메시지 전송
      sendMessage({ type: "NATIVE_READY", payload: null });
    }
  };

  // iframe 로드 완료 핸들러
  const handleIframeLoad = () => {
    if (Platform.OS === "web" && iframeRef.current) {
      // 웹에서 네이티브로 초기 메시지 전송
      sendMessage({ type: "WEB_READY", payload: null });
    }
  };

  useEffect(() => {
    if (Platform.OS === "web") {
      // 웹에서 메시지 수신
      const handleWebMessage = (event: MessageEvent) => {
        // 허용된 출처 확인
        if (event.origin !== config.nativeOrigin) {
          return;
        }

        try {
          const message = JSON.parse(event.data);
          onMessage(message);
        } catch (error) {
          console.error("Bridge message parsing error:", error);
        }
      };

      window.addEventListener("message", handleWebMessage);
      return () => window.removeEventListener("message", handleWebMessage);
    }
  }, [config.nativeOrigin, onMessage]);

  return {
    sendMessage,
    webViewRef,
    iframeRef,
    handleWebViewLoad,
    handleIframeLoad,
  };
};
