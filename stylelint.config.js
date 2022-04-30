module.exports = {
  extends: [
    "stylelint-config-prettier-scss",
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
  ],

  plugins: ["stylelint-scss", "stylelint-order"],
  rules: {
    // recommended rules
    "at-rule-no-unknown": null,
    "scss/at-rule-no-unknown": true,

    // "scss/dollar-variable-pattern": "^foo",
    // " stylelint scss/dollar-variable-pattern": "/[a-z][a-zA-Z]+/",
    "scss/selector-no-redundant-nesting-selector": true,

    // https://github.com/hudochenkov/stylelint-order
    "order/order": ["custom-properties", "declarations"],
    "order/properties-order": ["width", "height"],
  },
  // ignoreFunctions: ["/rem/", "/em/", "/f.em/", "/f.rem/"],
};
