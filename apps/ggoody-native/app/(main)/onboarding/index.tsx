import { useEffect } from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import { useRouter, useNavigation } from "expo-router";
import { Label, SubTitle, Body, SolidButton } from "@hancycle/ui-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const onboardingBackground = require("./images/onboarding_background.png");

function OnboardingScreen() {
  const navigation = useNavigation();

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
        <Label style={styles.title} size="B1">
          GGOODY
        </Label>
      </View>
      <Image
        style={[styles.background, { resizeMode: "cover" }]}
        source={onboardingBackground}
      />
      <View style={styles.main}>
        <View style={styles.contents}>
          <SubTitle size="3">우리집 반려견의 알러지 정보 등록</SubTitle>
          <Body size="R4">
            매번 찾아봐야하는 우리집 반려견의 알러지 성분, 손쉽게 등록하고
            편하게 확인하세요.
          </Body>
        </View>
        <View style={styles.buttons}>
          <SolidButton title="건너뛰기" color="gray-contrast" size="large" />
          <SolidButton
            style={styles.nextButton}
            title="다음"
            color="red"
            size="large"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 3,
    borderColor: "green",
    backgroundColor: "black",
  },
  head: {
    height: 52,
    borderColor: "green",
    backgroundColor: "black",
    justifyContent: "center",
    paddingHorizontal: 12,
  },
  title: {
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
  },
  buttons: {
    paddingVertical: 8,
    gap: 8,
    flexDirection: "row",
  },
  nextButton: {
    flex: 1,
  },
});

export default OnboardingScreen;
