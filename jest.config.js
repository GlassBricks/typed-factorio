/** @type {Partial<import("@jest/types").Config.DefaultOptions>} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/test/tsconfig.json",
    },
  },
}
