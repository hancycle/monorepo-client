import { Text, TextProps } from "react-native";
import { TypoSemanticStyle } from "../../tokens/typography";

export type LabelProps = TextProps & {
  size: "B1" | "B2" | "B3" | "B4" | "B5" | "R1" | "R2" | "R3" | "R4" | "R5";
};

export function Label({ children, size, style, ...props }: LabelProps) {
  return (
    <Text style={[TypoSemanticStyle[`label${size}`], style]} {...props}>
      {children}
    </Text>
  );
}
