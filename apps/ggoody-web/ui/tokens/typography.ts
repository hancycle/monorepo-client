import { TypoScale } from "@hancycle/ui/tokens";

const initialTypoScale = {
  fontFamily: TypoScale["hc-typo-scale-font-family-sans"],
  lineHeight: TypoScale["hc-typo-scale-line-height-small"],
  letterSpacing: TypoScale["hc-typo-scale-letter-spacing-wide"],
};

export const TypoSemantic = {
  "hc-typo-semantic-title-1": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-40"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-bold"],
  },
  "hc-typo-semantic-title-2": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-32"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-bold"],
  },
  "hc-typo-semantic-subtitle-1": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-28"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-semibold"],
  },
  "hc-typo-semantic-subtitle-2": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-24"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-semibold"],
  },
  "hc-typo-semantic-subtitle-3": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-20"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-semibold"],
  },
  "hc-typo-semantic-body-b-1": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-18"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-semibold"],
  },
  "hc-typo-semantic-body-b-2": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-16"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-semibold"],
  },
  "hc-typo-semantic-body-b-3": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-15"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-semibold"],
  },
  "hc-typo-semantic-body-b-4": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-14"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-semibold"],
  },
  "hc-typo-semantic-body-r-1": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-18"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-medium"],
  },
  "hc-typo-semantic-body-r-2": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-16"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-medium"],
  },
  "hc-typo-semantic-body-r-3": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-15"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-medium"],
  },
  "hc-typo-semantic-body-r-4": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-14"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-medium"],
  },
  "hc-typo-semantic-caption-b-1": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-13"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-semibold"],
  },
  "hc-typo-semantic-caption-b-2": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-12"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-semibold"],
  },
  "hc-typo-semantic-caption-r-1": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-13"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-medium"],
  },
  "hc-typo-semantic-caption-r-2": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-12"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-medium"],
  },
  "hc-typo-semantic-label-b-1": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-16"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-semibold"],
  },
  "hc-typo-semantic-label-b-2": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-15"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-semibold"],
  },
  "hc-typo-semantic-label-b-3": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-14"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-semibold"],
  },
  "hc-typo-semantic-label-b-4": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-13"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-semibold"],
  },
  "hc-typo-semantic-label-b-5": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-11"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-semibold"],
  },
  "hc-typo-semantic-label-r-1": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-16"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-medium"],
  },
  "hc-typo-semantic-label-r-2": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-15"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-medium"],
  },
  "hc-typo-semantic-label-r-3": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-14"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-medium"],
  },
  "hc-typo-semantic-label-r-4": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-13"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-medium"],
  },
  "hc-typo-semantic-label-r-5": {
    ...initialTypoScale,
    fontSize: TypoScale["hc-typo-scale-font-size-11"],
    fontWeight: TypoScale["hc-typo-scale-font-weight-medium"],
  },
} as const;
