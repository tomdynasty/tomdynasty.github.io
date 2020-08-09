module.exports = {
  "env": {
      "browser": true,
      "es6": true
  },
  "extends": [
      "airbnb-base",
      "plugin:react/recommended"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parser": "babel-eslint",
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 6,
      "sourceType": "module"
  },
  "settings": {
      "import/resolver": {
          "node": {
              "extensions": [".js", ".jsx"]
          }
      }
  },
  "plugins": [
      "react"
  ],
  "rules": {
      "class-methods-use-this": ["error", {
          exceptMethods: [
              "render",
              "getInitialState",
              "getDefaultProps",
              "componentWillMount",
              "componentDidMount",
              "componentWillReceiveProps",
              "shouldComponentUpdate",
              "componentWillUpdate",
              "componentDidUpdate",
              "componentWillUnmount",
          ],
      }],
      "no-control-regex": 0,
      "import/no-named-as-default": 0,
      "max-len" : ["error", {code : 120}],
  }
};
