import { HTMLAttributes } from "react";
import styled from "styled-components";
import { getHcTokenKey } from "../../tokens";

export type LoaderProps = HTMLAttributes<HTMLDivElement> & {
  size?: string;
  color?: string;
};

export const Loader = styled.div<LoaderProps>`
  border: solid 2px var(${getHcTokenKey("--hc-color-scale-blue-100")});
  border-top: 2px solid transparent;
  border-radius: 50%;
  width: ${({ size = "24px" }) => size};
  height: ${({ size = "24px" }) => size};
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
