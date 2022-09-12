/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        "tsconfig": "test/tsconfig.json"
      }
    ]
  }
};
