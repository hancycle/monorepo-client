import styled from "styled-components";
import { TypographyProps } from "./index";
import { getTokenStyle } from "@ggoody-ui";

export type CaptionProps = TypographyProps & {
  size: "b-1" | "b-2" | "r-1" | "r-2";
};

export function Caption({
  children,
  as = "span",
  size,
  ...props
}: CaptionProps) {
  return (
    <View as={as} size={size} {...props}>
      {children}
    </View>
  );
}

const View = styled.span<CaptionProps>`
  ${({ size }) => getTokenStyle(`--hc-typo-semantic-caption-${size}`)}
  margin: 0;
`;
