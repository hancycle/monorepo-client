import { css } from "styled-components";
import { EffectScale, ColorScale } from "@hancycle/ui/tokens";

export const EffectSemantic = {
  "--hc-effect-semantic-state-default":
    EffectScale["--hc-effect-scale-opacity-100"],
  "--hc-effect-semantic-state-hover":
    EffectScale["--hc-effect-scale-opacity-85"],
  "--hc-effect-semantic-state-pressed":
    EffectScale["--hc-effect-scale-opacity-75"],
  "--hc-effect-semantic-state-disabled":
    EffectScale["--hc-effect-scale-opacity-35"],
  "--hc-effect-semantic-blur-light": EffectScale["--hc-effect-scale-blur-8"],
  "--hc-effect-semantic-blur-medium": EffectScale["--hc-effect-scale-blur-16"],
  "--hc-effect-semantic-blur-strong": EffectScale["--hc-effect-scale-blur-32"],
} as const;

export const EffectSemanticStyle = {
  "--hc-effect-semantic-elevation-light": css`
    color: ${ColorScale["--hc-color-scale-common-alpha-50"]};
  `,
  "--hc-effect-semantic-elevation-medium": css`
    color: ${ColorScale["--hc-color-scale-common-alpha-100"]};
  `,
  "--hc-effect-semantic-elevation-strong": css`
    color: ${ColorScale["--hc-color-scale-common-alpha-200"]};
  `,
};

export type EffectSemanticKeys = keyof typeof EffectSemantic;
export type EffectSemanticStyleKeys = keyof typeof EffectSemanticStyle;
