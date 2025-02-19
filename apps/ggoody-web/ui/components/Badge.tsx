import { ReactNode, HTMLAttributes } from "react";
import styled from "styled-components";
import { getTokenKey, Label } from "@ggoody-ui";

export type BadgeProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  size: "small" | "medium";
  color: "gray" | "gray-contrast" | "green" | "yellow" | "orange" | "red";
};

export function Badge({ children, size, color, ...props }: BadgeProps) {
  return (
    <View size={size} color={color} {...props}>
      <Label size="r-4">{children}</Label>
    </View>
  );
}

const View = styled.div<BadgeProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0
    var(
      ${({ size }) => {
        switch (size) {
          case "small":
            return getTokenKey("--hc-size-semantic-spacing-8");
          case "medium":
            return getTokenKey("--hc-size-semantic-spacing-10");
          default:
            return getTokenKey("--hc-size-semantic-spacing-10");
        }
      }}
    );
  height: ${({ size }) => {
    switch (size) {
      case "small":
        return "20px";
      case "medium":
        return "24px";
      default:
        return "20px";
    }
  }};
  border-radius: var(${getTokenKey("--hc-size-semantic-border-radius-full")});
  color: var(
    ${({ color }) => {
      switch (color) {
        case "gray":
          return getTokenKey("--hc-color-semantic-info-primary");
        case "gray-contrast":
          return getTokenKey("--hc-color-semantic-info-primary-contrast");
        case "green":
          return getTokenKey("--hc-color-semantic-info-primary-contrast");
        case "yellow":
          return getTokenKey("--hc-color-semantic-info-primary");
        case "orange":
          return getTokenKey("--hc-color-semantic-info-primary-contrast");
        case "red":
          return getTokenKey("--hc-color-semantic-info-primary-contrast");
        default:
          return getTokenKey("--hc-color-semantic-info-primary");
      }
    }}
  );
  background-color: var(
    ${({ color }) => {
      switch (color) {
        case "gray":
          return getTokenKey("--hc-color-semantic-surface-medium");
        case "gray-contrast":
          return getTokenKey("--hc-color-semantic-surface-medium-contrast");
        case "green":
          return getTokenKey("--hc-color-semantic-accent-green-medium");
        case "yellow":
          return getTokenKey("--hc-color-semantic-accent-yellow-medium");
        case "orange":
          return getTokenKey("--hc-color-semantic-accent-orange-medium");
        case "red":
          return getTokenKey("--hc-color-semantic-accent-red-medium");
        default:
          return getTokenKey("--hc-color-semantic-surface-medium");
      }
    }}
  );
`;
