import { StyleSheet } from "react-native";
import { fonts } from "../fonts";

export const TypoScale = {
  // Font Family
  fontFamilySans: fonts.pretendard,
  fontFamilySerif: fonts.pretendard,
  fontFamilyMono: fonts.pretendard,

  // Font Size
  fontSize10: 10,
  fontSize11: 11,
  fontSize12: 12,
  fontSize13: 13,
  fontSize14: 14,
  fontSize15: 15,
  fontSize16: 16,
  fontSize18: 18,
  fontSize20: 20,
  fontSize24: 24,
  fontSize28: 28,
  fontSize32: 32,
  fontSize40: 40,

  // Font Weight
  fontWeightRegular: "400",
  fontWeightMedium: "500",
  fontWeightSemibold: "600",
  fontWeightBold: "700",

  // Line Height
  lineHeightSmall: 22,
  lineHeightMedium: 24,
  lineHeightLarge: 26,

  // Letter Spacing
  letterSpacingNarrow: -0.02,
  letterSpacingMedium: -0.01,
  letterSpacingWide: 0,
} as const;

const initialTypoSemanticStyle = {
  fontFamily: TypoScale.fontFamilySans,
  lineHeight: TypoScale.lineHeightSmall,
  letterSpacing: TypoScale.letterSpacingWide,
};

export const TypoSemanticStyle = StyleSheet.create({
  title1: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize40,
    fontWeight: TypoScale.fontWeightBold,
  },
  title2: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize32,
    fontWeight: TypoScale.fontWeightBold,
  },
  subTitle1: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize28,
    fontWeight: TypoScale.fontWeightSemibold,
  },
  subTitle2: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize24,
    fontWeight: TypoScale.fontWeightSemibold,
  },
  subTitle3: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize20,
    fontWeight: TypoScale.fontWeightSemibold,
  },
  bodyB1: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize18,
    fontWeight: TypoScale.fontWeightSemibold,
  },
  bodyB2: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize16,
    fontWeight: TypoScale.fontWeightSemibold,
  },
  bodyB3: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize15,
    fontWeight: TypoScale.fontWeightSemibold,
  },
  bodyB4: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize14,
    fontWeight: TypoScale.fontWeightSemibold,
  },
  bodyR1: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize18,
    fontWeight: TypoScale.fontWeightMedium,
  },
  bodyR2: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize16,
    fontWeight: TypoScale.fontWeightMedium,
  },
  bodyR3: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize15,
    fontWeight: TypoScale.fontWeightMedium,
  },
  bodyR4: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize14,
    fontWeight: TypoScale.fontWeightMedium,
  },
  captionB1: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize13,
    fontWeight: TypoScale.fontWeightSemibold,
  },
  captionB2: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize12,
    fontWeight: TypoScale.fontWeightSemibold,
  },
  captionR1: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize13,
    fontWeight: TypoScale.fontWeightMedium,
  },
  captionR2: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize12,
    fontWeight: TypoScale.fontWeightMedium,
  },
  labelB1: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize16,
    fontWeight: TypoScale.fontWeightSemibold,
  },
  labelB2: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize15,
    fontWeight: TypoScale.fontWeightSemibold,
  },
  labelB3: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize14,
    fontWeight: TypoScale.fontWeightSemibold,
  },
  labelB4: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize13,
    fontWeight: TypoScale.fontWeightSemibold,
  },
  labelB5: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize11,
    fontWeight: TypoScale.fontWeightSemibold,
  },
  labelR1: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize16,
    fontWeight: TypoScale.fontWeightMedium,
  },
  labelR2: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize15,
    fontWeight: TypoScale.fontWeightMedium,
  },
  labelR3: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize14,
    fontWeight: TypoScale.fontWeightMedium,
  },
  labelR4: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize13,
    fontWeight: TypoScale.fontWeightMedium,
  },
  labelR5: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize11,
    fontWeight: TypoScale.fontWeightMedium,
  },
});

export type TypoSemanticStyleKeys = keyof typeof TypoSemanticStyle;
export type TypoScaleKeys = keyof typeof TypoScale;
