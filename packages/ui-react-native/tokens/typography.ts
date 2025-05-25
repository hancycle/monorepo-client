import { StyleSheet } from "react-native";
import { fonts } from "../fonts";

// Line height multiplier (percentage)
const LINE_HEIGHT = {
  SMALL: 1.4, // 140%
  MEDIUM: 1.5, // 150%
  LARGE: 1.6, // 160%
} as const;

// Calculate line height based on font size
const getLineHeight = (fontSize: number, multiplier: number) => {
  return Math.round(fontSize * multiplier);
};

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
  lineHeightSmall: LINE_HEIGHT.SMALL,
  lineHeightMedium: LINE_HEIGHT.MEDIUM,
  lineHeightLarge: LINE_HEIGHT.LARGE,

  // Letter Spacing
  letterSpacingNarrow: -0.02,
  letterSpacingMedium: -0.01,
  letterSpacingWide: 0,
} as const;

const initialTypoSemanticStyle = {
  fontFamily: TypoScale.fontFamilySans,
  letterSpacing: TypoScale.letterSpacingWide,
};

export const TypoSemanticStyle = StyleSheet.create({
  title1: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize40,
    lineHeight: getLineHeight(TypoScale.fontSize40, LINE_HEIGHT.SMALL),
    fontWeight: TypoScale.fontWeightBold,
  },
  title2: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize32,
    lineHeight: getLineHeight(TypoScale.fontSize32, LINE_HEIGHT.SMALL),
    fontWeight: TypoScale.fontWeightBold,
  },
  subTitle1: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize28,
    lineHeight: getLineHeight(TypoScale.fontSize28, LINE_HEIGHT.SMALL),
    fontWeight: TypoScale.fontWeightSemibold,
  },
  subTitle2: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize24,
    lineHeight: getLineHeight(TypoScale.fontSize24, LINE_HEIGHT.SMALL),
    fontWeight: TypoScale.fontWeightSemibold,
  },
  subTitle3: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize20,
    lineHeight: getLineHeight(TypoScale.fontSize20, LINE_HEIGHT.SMALL),
    fontWeight: TypoScale.fontWeightSemibold,
  },
  bodyB1: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize18,
    lineHeight: getLineHeight(TypoScale.fontSize18, LINE_HEIGHT.MEDIUM),
    fontWeight: TypoScale.fontWeightSemibold,
  },
  bodyB2: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize16,
    lineHeight: getLineHeight(TypoScale.fontSize16, LINE_HEIGHT.MEDIUM),
    fontWeight: TypoScale.fontWeightSemibold,
  },
  bodyB3: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize15,
    lineHeight: getLineHeight(TypoScale.fontSize15, LINE_HEIGHT.MEDIUM),
    fontWeight: TypoScale.fontWeightSemibold,
  },
  bodyB4: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize14,
    lineHeight: getLineHeight(TypoScale.fontSize14, LINE_HEIGHT.MEDIUM),
    fontWeight: TypoScale.fontWeightSemibold,
  },
  bodyR1: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize18,
    lineHeight: getLineHeight(TypoScale.fontSize18, LINE_HEIGHT.MEDIUM),
    fontWeight: TypoScale.fontWeightMedium,
  },
  bodyR2: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize16,
    lineHeight: getLineHeight(TypoScale.fontSize16, LINE_HEIGHT.MEDIUM),
    fontWeight: TypoScale.fontWeightMedium,
  },
  bodyR3: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize15,
    lineHeight: getLineHeight(TypoScale.fontSize15, LINE_HEIGHT.MEDIUM),
    fontWeight: TypoScale.fontWeightMedium,
  },
  bodyR4: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize14,
    lineHeight: getLineHeight(TypoScale.fontSize14, LINE_HEIGHT.MEDIUM),
    fontWeight: TypoScale.fontWeightMedium,
  },
  captionB1: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize13,
    lineHeight: getLineHeight(TypoScale.fontSize13, LINE_HEIGHT.MEDIUM),
    fontWeight: TypoScale.fontWeightSemibold,
  },
  captionB2: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize12,
    lineHeight: getLineHeight(TypoScale.fontSize12, LINE_HEIGHT.MEDIUM),
    fontWeight: TypoScale.fontWeightSemibold,
  },
  captionR1: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize13,
    lineHeight: getLineHeight(TypoScale.fontSize13, LINE_HEIGHT.MEDIUM),
    fontWeight: TypoScale.fontWeightMedium,
  },
  captionR2: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize12,
    lineHeight: getLineHeight(TypoScale.fontSize12, LINE_HEIGHT.MEDIUM),
    fontWeight: TypoScale.fontWeightMedium,
  },
  labelB1: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize16,
    lineHeight: getLineHeight(TypoScale.fontSize16, LINE_HEIGHT.SMALL),
    fontWeight: TypoScale.fontWeightSemibold,
  },
  labelB2: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize15,
    lineHeight: getLineHeight(TypoScale.fontSize15, LINE_HEIGHT.SMALL),
    fontWeight: TypoScale.fontWeightSemibold,
  },
  labelB3: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize14,
    lineHeight: getLineHeight(TypoScale.fontSize14, LINE_HEIGHT.SMALL),
    fontWeight: TypoScale.fontWeightSemibold,
  },
  labelB4: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize13,
    lineHeight: getLineHeight(TypoScale.fontSize13, LINE_HEIGHT.SMALL),
    fontWeight: TypoScale.fontWeightSemibold,
  },
  labelB5: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize11,
    lineHeight: getLineHeight(TypoScale.fontSize11, LINE_HEIGHT.SMALL),
    fontWeight: TypoScale.fontWeightSemibold,
  },
  labelR1: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize16,
    lineHeight: getLineHeight(TypoScale.fontSize16, LINE_HEIGHT.SMALL),
    fontWeight: TypoScale.fontWeightMedium,
  },
  labelR2: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize15,
    lineHeight: getLineHeight(TypoScale.fontSize15, LINE_HEIGHT.SMALL),
    fontWeight: TypoScale.fontWeightMedium,
  },
  labelR3: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize14,
    lineHeight: getLineHeight(TypoScale.fontSize14, LINE_HEIGHT.SMALL),
    fontWeight: TypoScale.fontWeightMedium,
  },
  labelR4: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize13,
    lineHeight: getLineHeight(TypoScale.fontSize13, LINE_HEIGHT.SMALL),
    fontWeight: TypoScale.fontWeightMedium,
  },
  labelR5: {
    ...initialTypoSemanticStyle,
    fontSize: TypoScale.fontSize11,
    lineHeight: getLineHeight(TypoScale.fontSize11, LINE_HEIGHT.SMALL),
    fontWeight: TypoScale.fontWeightMedium,
  },
});

export type TypoSemanticStyleKeys = keyof typeof TypoSemanticStyle;
export type TypoScaleKeys = keyof typeof TypoScale;
