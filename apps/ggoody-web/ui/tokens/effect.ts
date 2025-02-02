import { EffectScale, ColorScale } from "@hancycle/ui/tokens";

export const EffectSemantic = {
  "hc-effect-semantic-state-default":
    EffectScale["hc-effect-scale-opacity-100"],
  "hc-effect-semantic-state-hover": EffectScale["hc-effect-scale-opacity-85"],
  "hc-effect-semantic-state-pressed": EffectScale["hc-effect-scale-opacity-75"],
  "hc-effect-semantic-state-disabled":
    EffectScale["hc-effect-scale-opacity-35"],
  "hc-effect-semantic-blur-light": EffectScale["hc-effect-scale-blur-8"],
  "hc-effect-semantic-blur-medium": EffectScale["hc-effect-scale-blur-16"],
  "hc-effect-semantic-blur-strong": EffectScale["hc-effect-scale-blur-32"],
  "hc-effect-semantic-elevation-light": {
    color: ColorScale["hc-color-scale-common-alpha-50"],
  },
  "hc-effect-semantic-elevation-medium": {
    color: ColorScale["hc-color-scale-common-alpha-100"],
  },
  "hc-effect-semantic-elevation-strong": {
    color: ColorScale["hc-color-scale-common-alpha-200"],
  },
} as const;
