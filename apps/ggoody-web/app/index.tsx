import { useEffect } from "react";
import {
  SolidButton,
  Title,
  Subtitle,
  Body,
  Caption,
  Label,
  Badge,
  AddOutlinedIcon,
  AddFilledIcon,
  CheckCircleFilledIcon,
  CheckCircleOutlinedIcon,
  CloseFilledIcon,
  CloseOutlinedIcon,
  EmphasisCircleFilledIcon,
  EmphasisCircleOutlinedIcon,
  InfoCircleFilledIcon,
  InfoCircleOutlinedIcon,
  MeatballFilledIcon,
  MeatballOutlinedIcon,
} from "@ggoody-web/ui";

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
      <Title size="1">Title-1</Title>
      <Title size="2">Title-2</Title>
      <Subtitle size="1">Subtitle-1</Subtitle>
      <Subtitle size="2">Subtitle-2</Subtitle>
      <Subtitle size="3">Subtitle-3</Subtitle>
      <Body size="b-1">Body-b-1</Body>
      <Body size="b-2">Body-b-2</Body>
      <Body size="b-3">Body-b-3</Body>
      <Body size="b-4">Body-b-4</Body>
      <Body size="r-1">Body-r-1</Body>
      <Body size="r-2">Body-r-2</Body>
      <Body size="r-3">Body-r-3</Body>
      <Body size="r-4">Body-r-4</Body>
      <Caption size="b-1">Caption-b-1</Caption>
      <Caption size="b-2">Caption-b-2</Caption>
      <Caption size="r-1">Caption-r-1</Caption>
      <Caption size="r-2">Caption-r-2</Caption>
      <Label size="b-1">Label-b-1</Label>
      <Label size="b-2">Label-b-2</Label>
      <Label size="b-3">Label-b-3</Label>
      <Label size="b-4">Label-b-4</Label>
      <Label size="b-5">Label-b-5</Label>
      <Label size="r-1">Label-r-1</Label>
      <Label size="r-2">Label-r-2</Label>
      <Label size="r-3">Label-r-3</Label>
      <Label size="r-4">Label-r-4</Label>
      <Label size="r-5">Label-r-5</Label>
      <SolidButton
        onClick={sendMessageToNative}
        size="large"
        color="gray"
        status="enabled"
      >
        Button
      </SolidButton>
      <Badge size="small" color="gray">
        Badge
      </Badge>
      <AddOutlinedIcon width={24} height={24} />
      <AddFilledIcon width={24} height={24} />
      <CheckCircleOutlinedIcon width={24} height={24} />
      <CheckCircleFilledIcon width={24} height={24} />
      <CloseOutlinedIcon width={24} height={24} />
      <CloseFilledIcon width={24} height={24} />
      <EmphasisCircleOutlinedIcon width={24} height={24} />
      <EmphasisCircleFilledIcon width={24} height={24} />
      <InfoCircleOutlinedIcon width={24} height={24} />
      <InfoCircleFilledIcon width={24} height={24} />
      <MeatballOutlinedIcon width={24} height={24} />
      <MeatballFilledIcon width={24} height={24} />
    </div>
  );
}

export default HomePage;
