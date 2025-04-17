import { HTMLAttributes } from "react";
import { getTokenKey } from "@hancycle/ui-react";

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
  return <View size={size} color={color} {...props} />;
};

const View = styled.div<LoaderProps>`
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
  border-radius: 50%;
  border-top: 2px solid transparent;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
