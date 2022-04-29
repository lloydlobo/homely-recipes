module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "plugin:jsx-a11y/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["jsx-a11y"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
  },
};

// https://eslint.org/docs/user-guide/getting-started
// https://www.npmjs.com/package/eslint-plugin-jsx-a11y
