import { css } from "styled-components";
import { TypoScale } from "@hancycle/ui/tokens";

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
