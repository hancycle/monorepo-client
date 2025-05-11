import { Text, TextProps } from "react-native";

import { TypoSemanticStyle } from "../../tokens/typography";

export type CaptionProps = TextProps & {
  size: "B1" | "B2" | "R1" | "R2";
};

export function Caption({ children, size, style, ...props }: CaptionProps) {
  return (
    <Text style={[TypoSemanticStyle[`caption${size}`], style]} {...props}>
      {children}
    </Text>
  );
}
