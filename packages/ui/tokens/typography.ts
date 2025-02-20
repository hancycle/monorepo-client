import { css } from "styled-components";

export const TypoScale = {
  // Font Family
  "--hc-typo-scale-font-family-sans": "Pretendard Variable",
  "--hc-typo-scale-font-family-serif": "Pretendard Variable",
  "--hc-typo-scale-font-family-mono": "Pretendard Variable",

  // Font Size
  "--hc-typo-scale-font-size-10": "10px",
  "--hc-typo-scale-font-size-11": "11px",
  "--hc-typo-scale-font-size-12": "12px",
  "--hc-typo-scale-font-size-13": "13px",
  "--hc-typo-scale-font-size-14": "14px",
  "--hc-typo-scale-font-size-15": "15px",
  "--hc-typo-scale-font-size-16": "16px",
  "--hc-typo-scale-font-size-18": "18px",
  "--hc-typo-scale-font-size-20": "20px",
  "--hc-typo-scale-font-size-24": "24px",
  "--hc-typo-scale-font-size-28": "28px",
  "--hc-typo-scale-font-size-32": "32px",
  "--hc-typo-scale-font-size-40": "40px",

  // Font Weight
  "--hc-typo-scale-font-weight-regular": 400,
  "--hc-typo-scale-font-weight-medium": 500,
  "--hc-typo-scale-font-weight-semibold": 600,
  "--hc-typo-scale-font-weight-bold": 700,

  // Line Height
  "--hc-typo-scale-line-height-small": "140%",
  "--hc-typo-scale-line-height-medium": "150%",
  "--hc-typo-scale-line-height-large": "160%",

  // Letter Spacing
  "--hc-typo-scale-letter-spacing-narrow": "-0.02em",
  "--hc-typo-scale-letter-spacing-medium": "-0.01em",
  "--hc-typo-scale-letter-spacing-wide": "0",
} as const;

const initialTypoSemanticStyle = css`
  font-family: ${TypoScale["--hc-typo-scale-font-family-sans"]};
  line-height: ${TypoScale["--hc-typo-scale-line-height-small"]};
  letter-spacing: ${TypoScale["--hc-typo-scale-letter-spacing-wide"]};
`;

export const TypoSemanticStyle = {
  "--hc-typo-semantic-title-1": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-40"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-bold"]};
  `,
  "--hc-typo-semantic-title-2": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-32"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-bold"]};
  `,
  "--hc-typo-semantic-subtitle-1": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-28"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-semibold"]};
  `,
  "--hc-typo-semantic-subtitle-2": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-24"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-semibold"]};
  `,
  "--hc-typo-semantic-subtitle-3": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-20"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-semibold"]};
  `,
  "--hc-typo-semantic-body-b-1": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-18"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-semibold"]};
  `,
  "--hc-typo-semantic-body-b-2": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-16"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-semibold"]};
  `,
  "--hc-typo-semantic-body-b-3": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-15"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-semibold"]};
  `,
  "--hc-typo-semantic-body-b-4": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-14"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-semibold"]};
  `,
  "--hc-typo-semantic-body-r-1": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-18"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-medium"]};
  `,
  "--hc-typo-semantic-body-r-2": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-16"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-medium"]};
  `,
  "--hc-typo-semantic-body-r-3": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-15"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-medium"]};
  `,
  "--hc-typo-semantic-body-r-4": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-14"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-medium"]};
  `,
  "--hc-typo-semantic-caption-b-1": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-13"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-semibold"]};
  `,
  "--hc-typo-semantic-caption-b-2": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-12"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-semibold"]};
  `,
  "--hc-typo-semantic-caption-r-1": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-13"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-medium"]};
  `,
  "--hc-typo-semantic-caption-r-2": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-12"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-medium"]};
  `,
  "--hc-typo-semantic-label-b-1": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-16"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-semibold"]};
  `,
  "--hc-typo-semantic-label-b-2": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-15"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-semibold"]};
  `,
  "--hc-typo-semantic-label-b-3": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-14"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-semibold"]};
  `,
  "--hc-typo-semantic-label-b-4": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-13"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-semibold"]};
  `,
  "--hc-typo-semantic-label-b-5": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-11"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-semibold"]};
  `,
  "--hc-typo-semantic-label-r-1": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-16"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-medium"]};
  `,
  "--hc-typo-semantic-label-r-2": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-15"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-medium"]};
  `,
  "--hc-typo-semantic-label-r-3": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-14"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-medium"]};
  `,
  "--hc-typo-semantic-label-r-4": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-13"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-medium"]};
  `,
  "--hc-typo-semantic-label-r-5": css`
    ${initialTypoSemanticStyle}
    font-size: ${TypoScale["--hc-typo-scale-font-size-11"]};
    font-weight: ${TypoScale["--hc-typo-scale-font-weight-medium"]};
  `,
} as const;

export type TypoSemanticStyleKeys = keyof typeof TypoSemanticStyle;
export type TypoScaleKeys = keyof typeof TypoScale;
