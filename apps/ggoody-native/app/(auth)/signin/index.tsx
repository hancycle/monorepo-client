import { useEffect } from "react";
import { View, Text } from "react-native";
import { useRouter, useNavigation } from "expo-router";
import { SolidButton } from "@hancycle/ui-react-native";

function SignInScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "로그인",
    });
  }, [navigation]);

  return (
    <View>
      <Text>SignInScreen</Text>
      <SolidButton
        title="프로필로 이동"
        onPress={() => router.push("/profile")}
      />
    </View>
  );
}

export default SignInScreen;
