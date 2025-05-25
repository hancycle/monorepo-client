const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

// 모노레포 루트 경로 찾기
const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, "../..");

// 기본 Metro 설정 가져오기
const config = getDefaultConfig(projectRoot);

// 워치 폴더에 packages 디렉토리 추가
config.watchFolders = [
  ...(config.watchFolders || []),
  path.resolve(monorepoRoot, "packages"),
];

// 모듈 해석 설정
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(monorepoRoot, "node_modules"),
];

// SVG 트랜스포머 설정
const { transformer, resolver } = config;

config.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

config.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
  sourceExts: [...resolver.sourceExts, "svg"],
};

module.exports = config;
