import { useEffect } from "react";
import { Button } from "@ggoody-ui";

function HomePage() {
  useEffect(() => {
    // React Native에서 보낸 메시지 수신
    const handleMessage = (event: MessageEvent) => {
      const allowedOrigin = "http://localhost:8081"; // 허용할 출처
      if (event.origin !== allowedOrigin) {
        return;
      }

      try {
        const data = JSON.parse(event.data || "{}");
        console.log("2. 꾸디 웹앱 > 데이터 수신", data);
        sendMessageToNative();
        // data.setOptions();
      } catch (error) {
        console.error("데이터 파싱 오류:", error);
      }
    };

    window.addEventListener("message", handleMessage);

    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const sendMessageToNative = () => {
    console.log("3. 꾸디 웹앱 > 네이티브로 데이터 전송");
    window.parent.postMessage(
      JSON.stringify({ message: "웹앱 데이터", value: 42 }),
      "*"
    );
  };

  return (
    <div>
      HomePage
      <Button>보내기</Button>
      <button onClick={sendMessageToNative}>보내기</button>
    </div>
  );
}

export default HomePage;
