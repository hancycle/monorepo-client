import { Text, TextProps } from "react-native";

import { TypoSemanticStyle } from "../../tokens/typography";

export type BodyProps = TextProps & {
  size: "B1" | "B2" | "B3" | "B4" | "R1" | "R2" | "R3" | "R4";
};

export function Body({ children, size, style, ...props }: BodyProps) {
  return (
    <Text style={[TypoSemanticStyle[`body${size}`], style]} {...props}>
      {children}
    </Text>
  );
}
