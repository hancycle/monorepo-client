import { Text, TextProps } from "react-native";
import { TypoSemanticStyle } from "../../tokens/typography";

export type TitleProps = TextProps & {
  size: "1" | "2";
};

export function Title({ children, size, style, ...props }: TitleProps) {
  return (
    <Text style={[TypoSemanticStyle[`title${size}`], style]} {...props}>
      {children}
    </Text>
  );
}
