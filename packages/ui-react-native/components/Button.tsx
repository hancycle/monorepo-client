import { TouchableOpacity, Text, StyleSheet } from "react-native";

export type ButtonProps = {
  title: string;
  onPress?: () => void;
};

export const Button = ({ title, onPress }: ButtonProps) => (
  <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#2563eb",
    padding: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Button;
