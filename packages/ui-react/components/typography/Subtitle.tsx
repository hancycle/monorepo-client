import styled from "styled-components";
import { TypographyProps } from "@hancycle/ui-react";
import { getTokenStyle } from "@hancycle/ui-react";

export type SubtitleProps = TypographyProps & {
  size: "1" | "2" | "3";
};

export function Subtitle({
  children,
  as = "h2",
  size,
  ...props
}: SubtitleProps) {
  return (
    <View as={as} size={size} {...props}>
      {children}
    </View>
  );
}

const View = styled.h2<SubtitleProps>`
  ${({ size }) => getTokenStyle(`--hc-typo-semantic-subtitle-${size}`)}
  margin: 0;
`;
