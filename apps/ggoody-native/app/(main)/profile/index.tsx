import { useEffect } from "react";
import { View, Text } from "react-native";
import { useRouter, useNavigation } from "expo-router";
import { SolidButton } from "@hancycle/ui-react-native";

function ProfileScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "프로필",
    });
  }, [navigation]);

  return (
    <View>
      <Text>ProfileScreen</Text>
      <SolidButton title="홈으로 이동" onPress={() => router.push("/")} />
    </View>
  );
}

export default ProfileScreen;
