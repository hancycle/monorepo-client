import { useEffect } from "react";
import { View, Text } from "react-native";
import { useRouter, useNavigation } from "expo-router";
import { Button } from "@hancycle/ui/components/expo/Button";

function HomeScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "홈",
    });
  }, [navigation]);

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title="회원가입으로 이동"
        onPress={() => router.push("/signup")}
      />
    </View>
  );
}

export default HomeScreen;
