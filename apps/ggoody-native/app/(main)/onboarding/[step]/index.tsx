import { Fragment, useEffect, useState } from "react";
import { View, StyleSheet, Image, StatusBar } from "react-native";
import { useRouter, useNavigation, useLocalSearchParams } from "expo-router";
import {
  Label,
  SubTitle,
  Body,
  SolidButton,
  KakaoButton,
  BottomSheet,
  SizeSemantic,
} from "@hancycle/ui-react-native";
import { Badge } from "@ggoody-native/ui";
import { SafeAreaView } from "react-native-safe-area-context";

const onboardingBackground1 = require("./images/onboarding_background1.png");
const onboardingBackground2 = require("./images/onboarding_background2.png");
const onboardingBackground3 = require("./images/onboarding_background3.png");

function OnboardingScreen() {
  const { step } = useLocalSearchParams();
  const { push } = useRouter();
  const [bottomSheet, setBottomSheet] = useState(false);
  const navigation = useNavigation();

  const handleNext = () => {
    push(`/onboarding/${Number(step) + 1}`);
  };

  const handleKakaoLogin = () => {
    setBottomSheet(true);
  };

  useEffect(() => {
    navigation.setOptions({
      title: "온보딩",
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.head}>
        <Label style={styles.label} size="B1">
          GGOODY
        </Label>
      </View>
      <Image
        style={[styles.background, { resizeMode: "cover" }]}
        source={
          step === "1"
            ? onboardingBackground1
            : step === "2"
            ? onboardingBackground2
            : step === "3"
            ? onboardingBackground3
            : onboardingBackground1
        }
      />
      <View style={styles.main}>
        <View style={styles.contents}>
          {step === "1" && (
            <Fragment>
              <Badge size="small" theme="gray-contrast">
                Step 1
              </Badge>
              <SubTitle size="3" style={styles.title}>
                우리집 반려견의{`\n`}알러지 정보 등록
              </SubTitle>
              <Body size="R4" style={styles.description}>
                매번 찾아봐야하는 우리집 반려견의 알러지 성분,{`\n`}손쉽게
                등록하고 편하게 확인하세요.
              </Body>
            </Fragment>
          )}
          {step === "2" && (
            <Fragment>
              <Badge size="small" theme="gray-contrast">
                Step 2
              </Badge>
              <SubTitle size="3" style={styles.title}>
                원하는 사료, 간식의{`\n`}성분표를 촬영
              </SubTitle>
              <Body size="R4" style={styles.description}>
                검사하고 싶은 사료, 간식이 있나요?{`\n`}포장지 뒤의 식품
                성분표를 촬영하세요!
              </Body>
            </Fragment>
          )}
          {step === "3" && (
            <Fragment>
              <Badge size="small" theme="gray-contrast">
                Step 3
              </Badge>
              <SubTitle size="3" style={styles.title}>
                꾸디의 알러지{`\n`}검사결과 확인
              </SubTitle>
              <Body size="R4" style={styles.description}>
                반려견의 알러지 정보를 바탕으로{`\n`}식품의 성분표의 검사결과를
                알려드려요.
              </Body>
            </Fragment>
          )}
        </View>
        <View style={[styles.buttons]}>
          {step === "3" ? (
            <KakaoButton title="카카오로 시작하기" onPress={handleKakaoLogin} />
          ) : (
            <Fragment>
              <SolidButton
                title="건너뛰기"
                color="gray-contrast"
                size="large"
              />
              <SolidButton
                style={styles.nextButton}
                title="다음"
                color="red"
                size="large"
                onPress={handleNext}
              />
            </Fragment>
          )}
        </View>
      </View>
      <BottomSheet title="약관 동의" isOpen={bottomSheet}>
        <View style={styles.terms}>
          <SubTitle size="3">
            꾸디를 시작하면{`\n`}아래 약관에 동의하게 됩니다.
          </SubTitle>
          <SolidButton
            style={styles.termsButton}
            title="개인정보 처리방침"
            color="gray"
            size="medium"
          />
          <SolidButton
            style={styles.termsButton}
            title="서비스 이용정책"
            color="gray"
            size="medium"
          />
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  head: {
    height: 52,
    borderColor: "green",
    backgroundColor: "black",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  label: {
    color: "red",
  },
  background: {
    flex: 1,
    width: "100%",
  },
  main: {
    borderWidth: 1,
  },
  contents: {
    backgroundColor: "white",
    borderRadius: 24,
    paddingVertical: 40,
    paddingHorizontal: 12,
    gap: 10,
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
  description: {
    textAlign: "center",
  },
  buttons: {
    paddingVertical: 8,
    gap: 8,
    flexDirection: "row",
  },
  nextButton: {
    flex: 1,
  },
  terms: {
    flexDirection: "column",
    gap: SizeSemantic.spacing16,
  },
  termsButton: {
    alignSelf: "flex-start",
  },
});

export default OnboardingScreen;
