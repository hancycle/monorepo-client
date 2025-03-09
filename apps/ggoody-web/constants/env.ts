/**
 * 환경 관련 유틸리티 함수
 */

import { ENV_CONFIG } from "./config";
import {
  isDevelopment as _isDevelopment,
  isStaging as _isStaging,
  isProduction as _isProduction,
  isNonProduction as _isNonProduction,
} from "@hancycle/constants";
/**
 * 현재 환경이 개발 환경인지 확인
 */
export const isDevelopment = (): boolean => {
  return _isDevelopment(ENV_CONFIG);
};

/**
 * 현재 환경이 스테이징 환경인지 확인
 */
export const isStaging = (): boolean => {
  return _isStaging(ENV_CONFIG);
};

/**
 * 현재 환경이 운영 환경인지 확인
 */
export const isProduction = (): boolean => {
  return _isProduction(ENV_CONFIG);
};

/**
 * 현재 환경이 운영 환경이 아닌지 확인
 */
export const isNonProduction = (): boolean => {
  return _isNonProduction(ENV_CONFIG);
};
