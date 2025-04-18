import styled from "styled-components";
import { TypographyProps } from "@hancycle/ui-react";
import { getTokenStyle } from "@hancycle/ui-react";

export type TitleProps = TypographyProps & {
  size: "1" | "2";
};

export function Title({ children, as = "h1", size, ...props }: TitleProps) {
  return (
    <View as={as} size={size} {...props}>
      {children}
    </View>
  );
}

const View = styled.h1<TitleProps>`
  ${({ size }) => getTokenStyle(`--hc-typo-semantic-title-${size}`)}
  margin: 0;
`;
