/** @type {import('jest').Config} */
export default {
  testEnvironment: "node",
  preset: "ts-jest",
  testMatch: [
    "**/__tests__/**/*.ts",
    "**/?(*.)+(spec|test).ts"
  ],
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/**/*.d.ts",
    "!src/index.ts",
    "!src/worker.ts"
  ],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov", "html"],
  setupFilesAfterEnv: ["<rootDir>/test/setup.ts"],
  moduleNameMapper: {
    "^@/features/(.*)$": "<rootDir>/src/features/$1",
    "^@/models/(.*)$": "<rootDir>/src/shared/data/models/$1",
    "^@/repositories/(.*)$": "<rootDir>/src/shared/data/repositories/$1",
    "^@/models$": "<rootDir>/src/shared/data/models",
    "^@/repositories$": "<rootDir>/src/shared/data/repositories",
    "^@/tools/(.*)$": "<rootDir>/src/shared/data/tools/$1",
    "^@/libraries/(.*)$": "<rootDir>/src/shared/adapter/libraries/$1",
    "^@/middleware/(.*)$": "<rootDir>/src/shared/adapter/middleware/$1",
    "^@/utils/(.*)$": "<rootDir>/src/shared/utils/$1",
  },
  testTimeout: 30000,
  forceExit: true,
  detectOpenHandles: true,
  clearMocks: true,
  restoreMocks: true,
  resetMocks: true,
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/"
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
