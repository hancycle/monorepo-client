/**
 * 환경 관련 유틸리티 함수
 */

import { EnvironmentConfig } from "./types";

/**
 * 현재 환경이 개발 환경인지 확인
 */
export const isDevelopment = (config: EnvironmentConfig): boolean => {
  return config.IS_DEVELOPMENT;
};

/**
 * 현재 환경이 스테이징 환경인지 확인
 */
export const isStaging = (config: EnvironmentConfig): boolean => {
  return config.IS_STAGING;
};

/**
 * 현재 환경이 운영 환경인지 확인
 */
export const isProduction = (config: EnvironmentConfig): boolean => {
  return config.IS_PRODUCTION;
};

/**
 * 현재 환경이 운영 환경이 아닌지 확인
 */
export const isNonProduction = (config: EnvironmentConfig): boolean => {
  return isDevelopment(config) || isStaging(config);
};
