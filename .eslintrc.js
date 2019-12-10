module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "plugin:prettier/recommended",
    "@vue/prettier"
  ],
  rules: {
    "no-console": "off",
    "no-debugger": 0
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
