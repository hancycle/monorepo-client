import { ColorScaleKeys, ColorSemanticKeys } from "./color";
import { SizeScaleKeys, SizeSemanticKeys } from "./size";
import {
  EffectScaleKeys,
  EffectSemanticKeys,
  EffectSemanticStyleKeys,
} from "./effect";
import {
  TypoSemanticStyle,
  TypoScaleKeys,
  TypoSemanticStyleKeys,
} from "./typography";

export type HancycleTokenKeys =
  | ColorScaleKeys
  | ColorSemanticKeys
  | SizeScaleKeys
  | SizeSemanticKeys
  | EffectScaleKeys
  | EffectSemanticKeys
  | TypoScaleKeys;

export type HancycleTokenStyleKeys =
  | EffectSemanticStyleKeys
  | TypoSemanticStyleKeys;

export function getTokenKey(tokenKey: HancycleTokenKeys): HancycleTokenKeys {
  return tokenKey;
}

export function getTokenStyle(tokenKey: HancycleTokenStyleKeys) {
  return TypoSemanticStyle[tokenKey];
}

export * from "./color";
export * from "./effect";
export * from "./size";
export * from "./typography";
