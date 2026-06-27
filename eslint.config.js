import js from "@eslint/js"
import tseslint from "typescript-eslint"
import eslintConfigPrettier from "eslint-config-prettier"

export default tseslint.config(
  {
    ignores: [
      "**/*.d.ts",
      "**/*.js",
      "generator/input/**",
      "scripts/**",
      "test/**",
      "runtime/*.ts",
      ".yarn/**",
      "**/index-template.ts",
      "**/globals-template.ts",
    ],
  },
  {
    files: ["**/*.ts"],
    extends: [js.configs.recommended, tseslint.configs.recommendedTypeChecked, eslintConfigPrettier],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "eqeqeq": "error",
      "no-useless-constructor": "off",
      "@typescript-eslint/no-useless-constructor": "error",
      "no-inner-declarations": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/restrict-plus-operands": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/unbound-method": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-inferrable-types": ["warn", { ignoreProperties: true, ignoreParameters: true }],
      "no-constant-condition": ["error", { checkLoops: false }],
      "no-template-curly-in-string": "error",
      "no-lonely-if": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
    },
  },
)
