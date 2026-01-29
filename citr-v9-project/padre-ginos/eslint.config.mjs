import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  {
    ...reachPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactPlugin.configs.flat["jsx-runtime"],
  {
    files: ["**/*.jsx", "**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      "react/no-unescaped-entities": "off", // Allows for single quotes in your strings
      "react/prop-types": "off",
    },
  },
  prettier,
];
