module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "plugin:jsx-a11y/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jsx-a11y", "jest"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
  },
};

// https://eslint.org/docs/user-guide/getting-started
// https://www.npmjs.com/package/eslint-plugin-jsx-a11y
