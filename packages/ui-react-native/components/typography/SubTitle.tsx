import { Text, TextProps } from "react-native";
import { TypoSemanticStyle } from "../../tokens/typography";

export type SubTitleProps = TextProps & {
  size: "1" | "2" | "3";
};

export function SubTitle({ children, size, style, ...props }: SubTitleProps) {
  return (
    <Text style={[TypoSemanticStyle[`subTitle${size}`], style]} {...props}>
      {children}
    </Text>
  );
}
