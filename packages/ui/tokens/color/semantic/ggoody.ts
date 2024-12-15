import { solid } from "../scale/solid";
import { alpha } from "../scale/alpha";

export enum semanticGgoody {
  "color-semantic-surface-low" = solid["color-scale-common-white"],
  "color-semantic-surface-medium" = solid["color-scale-gray-50"],
  "color-semantic-surface-high" = solid["color-scale-gray-100"],
  "color-semantic-surface-contrast" = solid["color-scale-common-black"],
  "color-semantic-divider-low" = solid["color-scale-gray-50"],
  "color-semantic-divider-medium" = solid["color-scale-gray-100"],
  "color-semantic-divider-high" = solid["color-scale-gray-200"],
  "color-semantic-divider-contrast" = solid["color-scale-gray-900"],
  "color-semantic-typo-primary" = solid["color-scale-gray-900"],
  "color-semantic-typo-secondary" = solid["color-scale-gray-700"],
  "color-semantic-typo-tertiary" = solid["color-scale-gray-500"],
  "color-semantic-typo-primary-contrast" = solid["color-scale-gray-50"],
  "color-semantic-typo-secondary-contrast" = solid["color-scale-gray-200"],
  "color-semantic-typo-tertiary-contrast" = solid["color-scale-gray-400"],
  "color-semantic-accent-green-low" = solid["color-scale-green-400"],
  "color-semantic-accent-green-medium" = solid["color-scale-green-600"],
  "color-semantic-accent-green-high" = solid["color-scale-green-800"],
  "color-semantic-accent-green-alpha-low" = alpha["color-scale-green-alpha-50"],
  "color-semantic-accent-green-alpha-high" = alpha[
    "color-scale-green-alpha-200"
  ],
  "color-semantic-accent-yellow-low" = solid["color-scale-yellow-400"],
  "color-semantic-accent-yellow-medium" = solid["color-scale-yellow-600"],
  "color-semantic-accent-yellow-high" = solid["color-scale-yellow-800"],
  "color-semantic-accent-yellow-alpha-low" = alpha[
    "color-scale-yellow-alpha-50"
  ],
  "color-semantic-accent-yellow-alpha-high" = alpha[
    "color-scale-yellow-alpha-200"
  ],
  "color-semantic-accent-orange-low" = solid["color-scale-orange-400"],
  "color-semantic-accent-orange-medium" = solid["color-scale-orange-600"],
  "color-semantic-accent-orange-high" = solid["color-scale-orange-800"],
  "color-semantic-accent-orange-alpha-low" = alpha[
    "color-scale-orange-alpha-50"
  ],
  "color-semantic-accent-orange-alpha-high" = alpha[
    "color-scale-orange-alpha-200"
  ],
  "color-semantic-accent-red-low" = solid["color-scale-red-400"],
  "color-semantic-accent-red-medium" = solid["color-scale-red-600"],
  "color-semantic-accent-red-high" = solid["color-scale-red-800"],
  "color-semantic-accent-red-alpha-low" = alpha["color-scale-red-alpha-50"],
  "color-semantic-accent-red-alpha-high" = alpha["color-scale-red-alpha-200"],
  "color-semantic-dim-low" = alpha["color-scale-common-black-alpha-100"],
  "color-semantic-dim-high" = alpha["color-scale-common-black-alpha-400"],
}
