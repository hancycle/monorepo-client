import { ColorScaleKeys } from "./color";
import { SizeScaleKeys } from "./size";
import { EffectScaleKeys } from "./effect";
import { TypoScaleKeys } from "./typography";

export type HancycleTokenKeys =
  | ColorScaleKeys
  | SizeScaleKeys
  | EffectScaleKeys
  | TypoScaleKeys;

export function getHcTokenKey(tokenKey: HancycleTokenKeys): HancycleTokenKeys {
  return tokenKey;
}

export * from "./color";
export * from "./effect";
export * from "./size";
export * from "./typography";
