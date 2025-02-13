import { ColorSemanticKeys } from "./color";
import { SizeSemanticKeys } from "./size";
import { EffectSemanticKeys } from "./effect";
import { TypoSemanticStyle, TypoSemanticStyleKeys } from "./typography";

import { HancycleTokenKeys } from "@hancycle/ui/tokens";

export type GGoodyTokenKeys =
  | ColorSemanticKeys
  | SizeSemanticKeys
  | EffectSemanticKeys
  | HancycleTokenKeys;

export type GGoodyTokenStyleKeys = TypoSemanticStyleKeys;

// export const GGoodyTokenStyles = {
//   ...TypoSemanticStyle,
// };

export function getTokenKey(tokenKey: GGoodyTokenKeys): GGoodyTokenKeys {
  return tokenKey;
}

export function getTokenStyle(tokenKey: GGoodyTokenStyleKeys) {
  return TypoSemanticStyle[tokenKey];
}
