export const SizeScale = {
  "--hc-size-scale-0": "0px",
  "--hc-size-scale-2": "2px",
  "--hc-size-scale-4": "4px",
  "--hc-size-scale-6": "6px",
  "--hc-size-scale-8": "8px",
  "--hc-size-scale-10": "10px",
  "--hc-size-scale-12": "12px",
  "--hc-size-scale-14": "14px",
  "--hc-size-scale-16": "16px",
  "--hc-size-scale-18": "18px",
  "--hc-size-scale-20": "20px",
  "--hc-size-scale-24": "24px",
  "--hc-size-scale-28": "28px",
  "--hc-size-scale-32": "32px",
  "--hc-size-scale-36": "36px",
  "--hc-size-scale-40": "40px",
  "--hc-size-scale-44": "44px",
  "--hc-size-scale-48": "48px",
  "--hc-size-scale-56": "56px",
  "--hc-size-scale-64": "64px",
  "--hc-size-scale-72": "72px",
  "--hc-size-scale-80": "80px",
  "--hc-size-scale-96": "96px",
  "--hc-size-scale-120": "120px",
  "--hc-size-scale-160": "160px",
  "--hc-size-scale-9999": "9999px",
} as const;

export const SizeSemantic = {
  "--hc-size-semantic-border-radius-none": SizeScale["--hc-size-scale-0"],
  "--hc-size-semantic-border-radius-xs": SizeScale["--hc-size-scale-10"],
  "--hc-size-semantic-border-radius-s": SizeScale["--hc-size-scale-14"],
  "--hc-size-semantic-border-radius-m": SizeScale["--hc-size-scale-16"],
  "--hc-size-semantic-border-radius-l": SizeScale["--hc-size-scale-20"],
  "--hc-size-semantic-border-radius-xl": SizeScale["--hc-size-scale-24"],
  "--hc-size-semantic-border-radius-full": SizeScale["--hc-size-scale-9999"],
  "--hc-size-semantic-icon-xxs": SizeScale["--hc-size-scale-12"],
  "--hc-size-semantic-icon-xs": SizeScale["--hc-size-scale-16"],
  "--hc-size-semantic-icon-s": SizeScale["--hc-size-scale-20"],
  "--hc-size-semantic-icon-m": SizeScale["--hc-size-scale-24"],
  "--hc-size-semantic-icon-l": SizeScale["--hc-size-scale-32"],
  "--hc-size-semantic-icon-xl": SizeScale["--hc-size-scale-40"],
  "--hc-size-semantic-icon-xxl": SizeScale["--hc-size-scale-48"],
  "--hc-size-semantic-spacing-none": SizeScale["--hc-size-scale-0"],
  "--hc-size-semantic-spacing-2": SizeScale["--hc-size-scale-2"],
  "--hc-size-semantic-spacing-4": SizeScale["--hc-size-scale-4"],
  "--hc-size-semantic-spacing-6": SizeScale["--hc-size-scale-6"],
  "--hc-size-semantic-spacing-8": SizeScale["--hc-size-scale-8"],
  "--hc-size-semantic-spacing-10": SizeScale["--hc-size-scale-10"],
  "--hc-size-semantic-spacing-12": SizeScale["--hc-size-scale-12"],
  "--hc-size-semantic-spacing-14": SizeScale["--hc-size-scale-14"],
  "--hc-size-semantic-spacing-16": SizeScale["--hc-size-scale-16"],
  "--hc-size-semantic-spacing-18": SizeScale["--hc-size-scale-18"],
  "--hc-size-semantic-spacing-20": SizeScale["--hc-size-scale-20"],
  "--hc-size-semantic-spacing-24": SizeScale["--hc-size-scale-24"],
  "--hc-size-semantic-spacing-32": SizeScale["--hc-size-scale-32"],
  "--hc-size-semantic-spacing-36": SizeScale["--hc-size-scale-36"],
  "--hc-size-semantic-spacing-40": SizeScale["--hc-size-scale-40"],
  "--hc-size-semantic-spacing-44": SizeScale["--hc-size-scale-44"],
  "--hc-size-semantic-spacing-48": SizeScale["--hc-size-scale-48"],
  "--hc-size-semantic-spacing-56": SizeScale["--hc-size-scale-56"],
  "--hc-size-semantic-spacing-64": SizeScale["--hc-size-scale-64"],
  "--hc-size-semantic-spacing-72": SizeScale["--hc-size-scale-72"],
  "--hc-size-semantic-spacing-80": SizeScale["--hc-size-scale-80"],
  "--hc-size-semantic-spacing-96": SizeScale["--hc-size-scale-96"],
  "--hc-size-semantic-spacing-120": SizeScale["--hc-size-scale-120"],
  "--hc-size-semantic-spacing-160": SizeScale["--hc-size-scale-160"],
} as const;

export type SizeSemanticKeys = keyof typeof SizeSemantic;
export type SizeScaleKeys = keyof typeof SizeScale;
