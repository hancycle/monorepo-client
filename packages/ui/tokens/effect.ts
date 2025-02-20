import { css } from "styled-components";
import { ColorScale } from "./color";

export const EffectScale = {
  "--hc-effect-scale-opacity-0": 0,
  "--hc-effect-scale-opacity-5": 0.05,
  "--hc-effect-scale-opacity-15": 0.15,
  "--hc-effect-scale-opacity-25": 0.25,
  "--hc-effect-scale-opacity-35": 0.35,
  "--hc-effect-scale-opacity-45": 0.45,
  "--hc-effect-scale-opacity-55": 0.55,
  "--hc-effect-scale-opacity-65": 0.65,
  "--hc-effect-scale-opacity-75": 0.75,
  "--hc-effect-scale-opacity-85": 0.85,
  "--hc-effect-scale-opacity-95": 0.95,
  "--hc-effect-scale-opacity-100": 1,
  "--hc-effect-scale-blur-2": "4px",
  "--hc-effect-scale-blur-4": "8px",
  "--hc-effect-scale-blur-8": "16px",
  "--hc-effect-scale-blur-12": "24px",
  "--hc-effect-scale-blur-16": "32px",
  "--hc-effect-scale-blur-24": "48px",
  "--hc-effect-scale-blur-32": "64px",
  "--hc-effect-scale-blur-40": "80px",
} as const;

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
export type EffectScaleKeys = keyof typeof EffectScale;
