import { HTMLAttributes } from "react";
import { Loader as HancycleLoader } from "@hancycle/ui/components/react";
import { getTokenKey } from "@ggoody-web/ui";

import styled from "styled-components";

export type LoaderProps = HTMLAttributes<HTMLDivElement> & {
  size: "small" | "medium" | "large";
  color: "primary" | "tertiary" | "primary-contrast";
};

export const Loader = ({
  size = "medium",
  color = "primary",
  ...props
}: LoaderProps) => {
  return <View color={color} {...props} />;
};

const View = styled(HancycleLoader)`
  width: var(
    ${({ size }) => {
      switch (size) {
        case "small":
          return getTokenKey("--hc-size-semantic-icon-s");
        case "medium":
          return getTokenKey("--hc-size-semantic-icon-m");
        case "large":
          return getTokenKey("--hc-size-semantic-icon-l");
        default:
          return getTokenKey("--hc-size-semantic-icon-m");
      }
    }}
  );
  height: var(
    ${({ size }) => {
      switch (size) {
        case "small":
          return getTokenKey("--hc-size-semantic-icon-s");
        case "medium":
          return getTokenKey("--hc-size-semantic-icon-m");
        case "large":
          return getTokenKey("--hc-size-semantic-icon-l");
        default:
          return getTokenKey("--hc-size-semantic-icon-m");
      }
    }}
  );
  border: solid 2px
    var(
      ${({ color }) => {
        switch (color) {
          case "primary":
            return getTokenKey("--hc-color-semantic-info-primary");
          case "tertiary":
            return getTokenKey("--hc-color-semantic-info-tertiary");
          case "primary-contrast":
            return getTokenKey("--hc-color-semantic-info-primary-contrast");
          default:
            return getTokenKey("--hc-color-semantic-info-primary");
        }
      }}
    );
  border-top: 2px solid transparent;
`;
