import { addons } from "@storybook/manager-api";
import { create } from "@storybook/theming/create";

const theme = create({
  base: "light",

  // 브랜드
  brandTitle: "Hancycle Design System",
  //   brandImage: "./assets/hancycle-logo.png", // 로고 이미지 경로
  brandTarget: "_self",

  //   // UI
  //   appBg: "#ffffff",
  //   appContentBg: "#ffffff",
  //   appBorderColor: "#E6E6E6",
  //   appBorderRadius: 4,

  //   // 텍스트 색상
  //   textColor: "#333333",
  //   textInverseColor: "#ffffff",

  //   // Toolbar 색상
  //   barTextColor: "#666666",
  //   barSelectedColor: "#0066FF",
  //   barBg: "#ffffff",

  //   // Form 색상
  //   inputBg: "#ffffff",
  //   inputBorder: "#E6E6E6",
  //   inputTextColor: "#333333",
  //   inputBorderRadius: 4,
});

addons.setConfig({
  theme,
  sidebar: {
    showRoots: true,
  },
});
