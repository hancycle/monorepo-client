import { scaleSolid, scaleAlpha } from "../scale";

export enum semanticGgoody {
  "color-semantic-surface-low" = scaleSolid["color-scale-common-white"],
  "color-semantic-surface-medium" = scaleSolid["color-scale-gray-50"],
  "color-semantic-surface-high" = scaleSolid["color-scale-gray-100"],
  "color-semantic-surface-contrast" = scaleSolid["color-scale-common-black"],
  "color-semantic-divider-low" = scaleSolid["color-scale-gray-50"],
  "color-semantic-divider-medium" = scaleSolid["color-scale-gray-100"],
  "color-semantic-divider-high" = scaleSolid["color-scale-gray-200"],
  "color-semantic-divider-contrast" = scaleSolid["color-scale-gray-900"],
  "color-semantic-typo-primary" = scaleSolid["color-scale-gray-900"],
  "color-semantic-typo-secondary" = scaleSolid["color-scale-gray-700"],
  "color-semantic-typo-tertiary" = scaleSolid["color-scale-gray-500"],
  "color-semantic-typo-primary-contrast" = scaleSolid["color-scale-gray-50"],
  "color-semantic-typo-secondary-contrast" = scaleSolid["color-scale-gray-200"],
  "color-semantic-typo-tertiary-contrast" = scaleSolid["color-scale-gray-400"],
  "color-semantic-accent-green-low" = scaleSolid["color-scale-green-400"],
  "color-semantic-accent-green-medium" = scaleSolid["color-scale-green-600"],
  "color-semantic-accent-green-high" = scaleSolid["color-scale-green-800"],
  "color-semantic-accent-green-alpha-low" = scaleAlpha[
    "color-scale-green-alpha-50"
  ],
  "color-semantic-accent-green-alpha-high" = scaleAlpha[
    "color-scale-green-alpha-200"
  ],
  "color-semantic-accent-yellow-low" = scaleSolid["color-scale-yellow-400"],
  "color-semantic-accent-yellow-medium" = scaleSolid["color-scale-yellow-600"],
  "color-semantic-accent-yellow-high" = scaleSolid["color-scale-yellow-800"],
  "color-semantic-accent-yellow-alpha-low" = scaleAlpha[
    "color-scale-yellow-alpha-50"
  ],
  "color-semantic-accent-yellow-alpha-high" = scaleAlpha[
    "color-scale-yellow-alpha-200"
  ],
  "color-semantic-accent-orange-low" = scaleSolid["color-scale-orange-400"],
  "color-semantic-accent-orange-medium" = scaleSolid["color-scale-orange-600"],
  "color-semantic-accent-orange-high" = scaleSolid["color-scale-orange-800"],
  "color-semantic-accent-orange-alpha-low" = scaleAlpha[
    "color-scale-orange-alpha-50"
  ],
  "color-semantic-accent-orange-alpha-high" = scaleAlpha[
    "color-scale-orange-alpha-200"
  ],
  "color-semantic-accent-red-low" = scaleSolid["color-scale-red-400"],
  "color-semantic-accent-red-medium" = scaleSolid["color-scale-red-600"],
  "color-semantic-accent-red-high" = scaleSolid["color-scale-red-800"],
  "color-semantic-accent-red-alpha-low" = scaleAlpha[
    "color-scale-red-alpha-50"
  ],
  "color-semantic-accent-red-alpha-high" = scaleAlpha[
    "color-scale-red-alpha-200"
  ],
  "color-semantic-dim-low" = scaleAlpha["color-scale-common-black-alpha-100"],
  "color-semantic-dim-high" = scaleAlpha["color-scale-common-black-alpha-400"],
}
