import { useEffect } from "react";
import { View, Text } from "react-native";
import { useRouter, useNavigation } from "expo-router";
import { SolidButton } from "@hancycle/ui-react-native";

function SignUpScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "회원가입",
    });
  }, [navigation]);

  return (
    <View>
      <Text>SignUpScreen</Text>
      <SolidButton
        title="로그인으로 이동"
        onPress={() => router.push("/signin")}
      />
    </View>
  );
}

export default SignUpScreen;
