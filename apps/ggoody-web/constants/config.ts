/**
 * 앱 전체에서 사용되는 환경 설정 값들
 *
 * 이 파일은 환경 변수를 타입 안전한 객체로 제공합니다.
 */

import { ApiConfig, AppConfig, EnvironmentConfig } from "@hancycle/constants";

// 환경 변수 가져오기
const env = import.meta.env;

// API 설정
export const API_CONFIG: ApiConfig = {
  BASE_URL: env.VITE_API_URL,
  TIMEOUT: 10000,
};

// 환경 설정
export const ENV_CONFIG: EnvironmentConfig = {
  ENV: env.VITE_APP_ENV,
  IS_PRODUCTION: env.VITE_APP_ENV === "prod",
  IS_STAGING: env.VITE_APP_ENV === "stg",
  IS_DEVELOPMENT: env.VITE_APP_ENV === "dev" || !env.VITE_APP_ENV,
};

// 앱 설정
export const APP_CONFIG: AppConfig = {
  APP_NAME: "Ggoody Web",
  VERSION: env.VITE_APP_VERSION,
};

// 개발 모드에서만 환경 변수 로깅
if (ENV_CONFIG.IS_DEVELOPMENT || ENV_CONFIG.IS_STAGING) {
  console.log("[Config] Environment:", ENV_CONFIG.ENV);
  console.log("[Config] API URL:", API_CONFIG.BASE_URL);
}
