import { EffectScale } from "../scale";
import { ColorScale } from "../../color";

export const EffectSemanticGgoody = {
  "effect-semantic-state-default": EffectScale["effect-scale-opacity-100"],
  "effect-semantic-state-hover": EffectScale["effect-scale-opacity-85"],
  "effect-semantic-state-pressed": EffectScale["effect-scale-opacity-75"],
  "effect-semantic-state-disabled": EffectScale["effect-scale-opacity-35"],
  "effect-semantic-blur-light": EffectScale["effect-scale-blur-8"],
  "effect-semantic-blur-medium": EffectScale["effect-scale-blur-16"],
  "effect-semantic-blur-strong": EffectScale["effect-scale-blur-32"],
  "effect-semantic-elevation-light": {
    color: ColorScale["effect-scale-opacity-100"],
  },
  "effect-semantic-elevation-medium": EffectScale["effect-scale-opacity-100"],
  "effect-semantic-elevation-strong": EffectScale["effect-scale-opacity-100"],
} as const;
