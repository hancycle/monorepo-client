import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

// import { ColorSemantic } from "../../tokens/color";
// import { SizeSemantic } from "../../tokens/size";
// import { TypoSemanticStyle } from "../../tokens/typography";

export type SolidButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color: "gray" | "gray-contrast" | "green" | "yellow" | "orange" | "red";
  status: "enabled" | "disabled" | "loading";
  size: "small" | "medium" | "large";
};

export function SolidButton({ children, ...props }: SolidButtonProps) {
  return <View {...props}>{children}</View>;
}

const View = styled.button<SolidButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  outline: none;
  gap: var(--hc-size-semantic-spacing-6);
  color: var(
    ${({ color }) => {
      switch (color) {
        case "gray":
          return "--hc-color-semantic-info-primary";
        case "gray-contrast":
          return "--hc-color-semantic-info-primary-contrast";
        case "green":
          return "--hc-color-semantic-info-primary-contrast";
        case "yellow":
          return "--hc-color-semantic-info-primary";
        case "orange":
          return "--hc-color-semantic-info-primary-contrast";
        case "red":
          return "--hc-color-semantic-info-primary-contrast";
        default:
          return "--hc-color-semantic-info-primary";
      }
    }}
  );
`;

// gap: ${({ theme }) => theme.size["--hc-size-semantic-spacing-6"]};
// color: ${({ color, theme }) => {
//   switch (color) {
//     case "gray":
//       return var("--hc-color-semantic-info-primary")
//     case "gray-contrast":
//       return theme.color["--hc-color-semantic-info-primary-contrast"];
//     case "green":
//       return theme.color["--hc-color-semantic-info-primary-contrast"];
//     case "yellow":
//       return theme.color["--hc-color-semantic-info-primary"];
//     case "orange":
//       return theme.color["--hc-color-semantic-info-primary-contrast"];
//     case "red":
//       return theme.color["--hc-color-semantic-info-primary-contrast"];
//     default:
//       return theme.color["--hc-color-semantic-info-primary"];
//   }
// }};
// height: ${({ size, theme }) => {
//   switch (size) {
//     case "small":
//       return theme.size["--hc-size-semantic-spacing-8"];
//     case "medium":
//       return theme.size["--hc-size-semantic-spacing-16"];
//     case "large":
//       return theme.size["--hc-size-semantic-spacing-24"];
//     default:
//       return theme.size["--hc-size-semantic-spacing-16"];
//   }
// }};
// padding-left: ${({ theme }) => theme.size["--hc-size-semantic-spacing-8"]};
// padding-right: ${({ theme }) => theme.size["--hc-size-semantic-spacing-8"]};
// border-radius: ${({ theme }) =>
//   theme.size["--hc-size-semantic-border-radius-xs"]};
