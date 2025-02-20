import styled from "styled-components";
import { TypographyProps } from "./index";
import { getTokenStyle } from "@hancycle/ui/tokens";

export type LabelProps = TypographyProps & {
  size:
    | "b-1"
    | "b-2"
    | "b-3"
    | "b-4"
    | "b-5"
    | "r-1"
    | "r-2"
    | "r-3"
    | "r-4"
    | "r-5";
};

export function Label({ children, as = "label", size, ...props }: LabelProps) {
  return (
    <View as={as} size={size} {...props}>
      {children}
    </View>
  );
}

const View = styled.label<LabelProps>`
  ${({ size }) => getTokenStyle(`--hc-typo-semantic-label-${size}`)}
  margin: 0;
`;
