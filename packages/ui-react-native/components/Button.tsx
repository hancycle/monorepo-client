import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from "react-native";

export type ButtonProps = TouchableOpacityProps & {
  title: string;
};

export const Button = ({ title, style, ...props }: ButtonProps) => (
  <TouchableOpacity style={[styles.container, style]} {...props}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2563eb",
    padding: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Button;
