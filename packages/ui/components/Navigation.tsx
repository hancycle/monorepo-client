// import { createDrawerNavigator } from "@react-navigation/drawer";
// import { NavigationContainer } from "@react-navigation/native";
// import { View, Text, Button, StyleSheet } from "react-native";

// const Drawer = createDrawerNavigator();

// const HomeScreen = ({ navigation }) => (
//   <View style={styles.container}>
//     <Text>Home Screen</Text>
//     <Button title="Open Drawer" onPress={() => navigation.openDrawer()} />
//   </View>
// );

// const CustomDrawerContent = () => (
//   <View style={styles.drawerContainer}>
//     <Text style={styles.drawerText}>Custom Drawer Content</Text>
//   </View>
// );

// function Navigation() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         drawerContent={() => <CustomDrawerContent />}
//         screenOptions={{
//           drawerStyle: {
//             width: 250,
//             backgroundColor: "#f8f8f8",
//           },
//         }}
//       >
//         <Drawer.Screen name="Home" component={HomeScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// export { NavigationContainer };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   drawerContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f8f8f8",
//   },
//   drawerText: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

// export default Navigation;

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button, StyleSheet } from "react-native";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }: { navigation: any }) => (
  <View style={styles.container}>
    <Text>Home Screen</Text>
    <Button title="Show Popup" onPress={() => navigation.navigate("Popup")} />
  </View>
);

const PopupScreen = () => (
  <View style={[styles.container, styles.popup]}>
    <Text style={styles.popupText}>This is a Popup</Text>
  </View>
);

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Popup"
          component={PopupScreen}
          options={{
            presentation: "modal", // 모달 스타일
            animationTypeForReplace: "push", // 슬라이드 애니메이션
            cardStyle: { backgroundColor: "transparent" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    position: "absolute",
    bottom: 0,
    height: "50%",
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  popupText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export { Stack };

export default Navigation;
