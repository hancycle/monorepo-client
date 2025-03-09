/**
 * 환경 설정 관련 타입 정의
 */

/**
 * 환경 설정 타입
 */
export type EnvironmentConfig = {
  /** 현재 환경 (development, staging, production) */
  ENV: string;
  /** 운영 환경 여부 */
  IS_PRODUCTION: boolean;
  /** 스테이징 환경 여부 */
  IS_STAGING: boolean;
  /** 개발 환경 여부 */
  IS_DEVELOPMENT: boolean;
};

/**
 * API 설정 타입
 */
export type ApiConfig = {
  /** API 기본 URL */
  BASE_URL: string;
  /** API 요청 타임아웃 (ms) */
  TIMEOUT: number;
};

/**
 * 앱 설정 타입
 */
export type AppConfig = {
  /** 앱 이름 */
  APP_NAME: string;
  /** 앱 버전 */
  VERSION: string;
  /** 번들 ID (iOS) - 네이티브 앱만 해당 */
  BUNDLE_ID?: string;
  /** 패키지 이름 (Android) - 네이티브 앱만 해당 */
  PACKAGE_NAME?: string;
};
