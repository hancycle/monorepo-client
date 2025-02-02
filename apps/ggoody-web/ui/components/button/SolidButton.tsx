import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export type SolidButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  theme: "gray" | "gray-contrast" | "green" | "yellow" | "orange" | "red";
  status: "enabled" | "disabled" | "loading";
  size: "small" | "medium" | "large";
};

export function SolidButton(props: SolidButtonProps) {
  return <View {...props}>{props.children}</View>;
}

const View = styled.button`
  background: #000;
  color: #fff;
`;
