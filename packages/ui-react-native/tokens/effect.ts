import { ColorScale } from "./color";

export const EffectScale = {
  opacity0: 0,
  opacity5: 0.05,
  opacity15: 0.15,
  opacity25: 0.25,
  opacity35: 0.35,
  opacity45: 0.45,
  opacity55: 0.55,
  opacity65: 0.65,
  opacity75: 0.75,
  opacity85: 0.85,
  opacity95: 0.95,
  opacity100: 1,
  blur2: 4,
  blur4: 8,
  blur8: 16,
  blur12: 24,
  blur16: 32,
  blur24: 48,
  blur32: 64,
  blur40: 80,
} as const;

export const EffectSemantic = {
  stateDefault: EffectScale.opacity100,
  stateHover: EffectScale.opacity85,
  statePressed: EffectScale.opacity75,
  stateDisabled: EffectScale.opacity35,
  blurLight: EffectScale.blur8,
  blurMedium: EffectScale.blur16,
  blurStrong: EffectScale.blur32,
} as const;

export const EffectSemanticStyle = {
  elevationLight: {
    shadowColor: ColorScale.commonBlack,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  elevationMedium: {
    shadowColor: ColorScale.commonBlack,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  elevationStrong: {
    shadowColor: ColorScale.commonBlack,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
} as const;

export type EffectSemanticKeys = keyof typeof EffectSemantic;
export type EffectSemanticStyleKeys = keyof typeof EffectSemanticStyle;
export type EffectScaleKeys = keyof typeof EffectScale;
