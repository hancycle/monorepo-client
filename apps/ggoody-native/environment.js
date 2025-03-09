const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");

/**
 * 환경 변수 파일을 로드하는 함수
 * @param {string} env - 환경 이름 (dev, stg, prod)
 * @returns {Object} 로드된 환경 변수
 */
function getEnvVars(env = "dev") {
  // 환경 이름 정규화
  const normalizedEnv =
    env === "development"
      ? "dev"
      : env === "staging"
      ? "stg"
      : env === "production"
      ? "prod"
      : env;

  // 환경별 .env 파일 로드
  let envVars = {};
  const envPath = path.resolve(__dirname, `.env.${normalizedEnv}`);
  if (fs.existsSync(envPath)) {
    envVars = dotenv.parse(fs.readFileSync(envPath));
  }

  // 환경 이름 추가 (없는 경우)
  if (!envVars.APP_ENV) {
    envVars.APP_ENV = normalizedEnv;
  }

  return envVars;
}

module.exports = { getEnvVars };
