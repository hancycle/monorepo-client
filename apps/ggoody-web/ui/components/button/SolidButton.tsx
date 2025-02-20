import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { Label } from "@hancycle/ui/components/react/typography";
import { getTokenKey } from "@hancycle/ui/tokens";

export type SolidButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: "gray" | "gray-contrast" | "green" | "yellow" | "orange" | "red";
  status: "enabled" | "disabled" | "loading";
  size: "small" | "medium" | "large";
};

export function SolidButton({ children, ...props }: SolidButtonProps) {
  return (
    <View {...props}>
      <Label size="b-1">{children}</Label>
    </View>
  );
}

const View = styled.button<SolidButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  gap: var(${getTokenKey("--hc-size-semantic-spacing-6")});
  padding: 0
    var(
      ${({ size }) => {
        switch (size) {
          case "small":
            return getTokenKey("--hc-size-semantic-spacing-8");
          case "medium":
            return getTokenKey("--hc-size-semantic-spacing-12");
          case "large":
            return getTokenKey("--hc-size-semantic-spacing-12");
          default:
            return getTokenKey("--hc-size-semantic-spacing-12");
        }
      }}
    );
  border-radius: var(
    ${({ size }) => {
      switch (size) {
        case "small":
          return getTokenKey("--hc-size-semantic-border-radius-xs");
        case "medium":
          return getTokenKey("--hc-size-semantic-border-radius-s");
        case "large":
          return getTokenKey("--hc-size-semantic-border-radius-m");
        default:
          return getTokenKey("--hc-size-semantic-border-radius-s");
      }
    }}
  );
  height: ${({ size }) => {
    switch (size) {
      case "small":
        return "32px";
      case "medium":
        return "44px";
      case "large":
        return "56px";
      default:
        return "44px";
    }
  }};
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
