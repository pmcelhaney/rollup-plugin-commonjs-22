/* eslint sonarjs/no-duplicate-string: "off" */
"use strict";

const typescriptParserOptions = {
  project: "tsconfig.json",
  tsconfigRootDir: __dirname,
};

module.exports = {
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },

  extends: ["plugin:@walgreenshealth/recommended"],

  ignorePatterns: [
    "**/node_modules/**",
    "**/*.min.js",
    "**/dist/**",
    "**/coverage/**",
    "**/reports/**",
    "**/.stryker-tmp/**",
    "**/_templates/**",
  ],

  overrides: [
    {
      files: ["*.ts"],

      extends: [
        "plugin:@walgreenshealth/recommended",
        "plugin:@walgreenshealth/typescript",
      ],

      parserOptions: typescriptParserOptions,
    },

    {
      files: ["**/*.stories.ts"],

      extends: [
        "plugin:@walgreenshealth/recommended",
        "plugin:@walgreenshealth/typescript",
        "plugin:@walgreenshealth/storybook",
      ],

      parserOptions: typescriptParserOptions,
    },

    {
      files: ["**/*.test.ts"],

      extends: [
        "plugin:@walgreenshealth/recommended",
        "plugin:@walgreenshealth/typescript",
        "plugin:@walgreenshealth/jest",
      ],

      parserOptions: typescriptParserOptions,
    },
    {
      files: ["**/*.cjs"],

      parserOptions: {
        sourceType: "script",
      },

      env: {
        node: true,
      },

      extends: ["plugin:@walgreenshealth/recommended"],

      rules: {
        "import/no-commonjs": "off",
      },
    },
  ],

  plugins: ["@walgreenshealth/eslint-plugin"],
};
