// import { useEffect } from "react";

function HomePage() {
  //   useEffect(() => {
  //     // React Native에서 보낸 메시지 수신
  //     const handleMessage = (event: MessageEvent) => {
  //       const allowedOrigin = "http://172.30.1.43:5173"; // 허용할 출처
  //       console.warn(event.origin);
  //       if (event.origin !== allowedOrigin) {
  //         console.warn("허용되지 않은 출처에서 메시지 수신:", event.origin);
  //         return;
  //       }

  //       try {
  //         // const data = JSON.parse(event.data || "{}");
  //         console.log("꾸디 웹앱 > 데이터 수신", event.data);
  //       } catch (error) {
  //         // console.error("데이터 파싱 오류:", error);
  //       }
  //     };

  //     window.addEventListener("message", handleMessage);

  //     // 컴포넌트 언마운트 시 이벤트 리스너 제거
  //     return () => {
  //       window.removeEventListener("message", handleMessage);
  //     };
  //   }, []);
  return <div>HomePage</div>;
}

export default HomePage;
