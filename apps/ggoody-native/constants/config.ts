/**
 * 앱 전체에서 사용되는 환경 설정 값들
 *
 * 이 파일은 환경 변수를 타입 안전한 객체로 제공합니다.
 */

import Constants from "expo-constants";
import { ApiConfig, AppConfig, EnvironmentConfig } from "@hancycle/constants";

// 환경 변수 가져오기
const env = Constants.expoConfig?.extra || {};

// API 설정
export const API_CONFIG: ApiConfig = {
  BASE_URL: env.API_URL,
  TIMEOUT: 10000,
};

// 환경 설정
export const ENV_CONFIG: EnvironmentConfig = {
  ENV: env.APP_ENV,
  IS_PRODUCTION: env.APP_ENV === "prod",
  IS_STAGING: env.APP_ENV === "stg",
  IS_DEVELOPMENT: env.APP_ENV === "dev" || !env.APP_ENV,
};

// 앱 설정
export const APP_CONFIG: AppConfig = {
  APP_NAME: "Ggoody Native",
  VERSION: env.APP_VERSION || Constants.expoConfig?.version || "1.0.0",
  BUNDLE_ID: env.BUNDLE_ID,
  PACKAGE_NAME: env.PACKAGE_NAME,
};

// 개발 모드에서만 환경 변수 로깅
if (__DEV__ && (ENV_CONFIG.IS_DEVELOPMENT || ENV_CONFIG.IS_STAGING)) {
  console.log("[Config] Environment:", ENV_CONFIG.ENV);
  console.log("[Config] API URL:", API_CONFIG.BASE_URL);
}
