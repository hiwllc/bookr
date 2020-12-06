module.exports = {
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", "/build/"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.ts", "!src/{server,index}.ts"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"],
};
