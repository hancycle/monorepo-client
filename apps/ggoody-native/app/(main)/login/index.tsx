import { useEffect, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRouter, useNavigation } from "expo-router";
import { Button } from "@hancycle/ui/components/expo/Button";
import BottomSheet from "@hancycle/ui/components/expo/BottomSheet";

function LoginScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "온보딩",
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LoginScreen</Text>
      <Button title="바텀시트 열기" />

      <BottomSheet>
        {/* <View style={styles.bottomSheetContent}>
          <Text style={styles.bottomSheetTitle}>바텀시트 내용</Text>
          <Button title="닫기" style={styles.closeButton} />
        </View> */}
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  bottomSheetContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  bottomSheetTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  closeButton: {
    marginTop: 20,
  },
});

export default LoginScreen;
