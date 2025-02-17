export * from "./Title";
export * from "./Subtitle";
export * from "./Body";
export * from "./Caption";
export * from "./Label";

import { HTMLAttributes } from "react";

export type TypographyProps = HTMLAttributes<HTMLElement> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label";
};
