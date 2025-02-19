import styled from "styled-components";
import { TypographyProps } from "./index";
import { getTokenStyle } from "@ggoody-web/ui";

export type BodyProps = TypographyProps & {
  size: "b-1" | "b-2" | "b-3" | "b-4" | "r-1" | "r-2" | "r-3" | "r-4";
};

export function Body({ children, as = "p", size, ...props }: BodyProps) {
  return (
    <View as={as} size={size} {...props}>
      {children}
    </View>
  );
}

const View = styled.p<BodyProps>`
  ${({ size }) => getTokenStyle(`--hc-typo-semantic-body-${size}`)}
  margin: 0;
`;
