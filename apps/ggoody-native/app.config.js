const { getEnvVars } = require("./environment");

// 환경 변수 가져오기
const envVars = getEnvVars(process.env.APP_ENV || "dev");

module.exports = {
  owner: "sungjinmoon",
  name: "ggoody-native",
  slug: "ggoody",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/splash-ggagga.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/images/splash-ggagga.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: envVars.BUNDLE_ID,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/splash-ggagga.png",
      backgroundColor: "#ffffff",
    },
    package: envVars.PACKAGE_NAME,
  },
  web: {
    favicon: "./assets/images/splash-ggagga.png",
  },
  extra: {
    ...envVars,
    eas: {
      projectId: envVars.EAS_PROJECT_ID,
    },
  },
};
