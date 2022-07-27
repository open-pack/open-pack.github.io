module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },

  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],

  plugins: [],

  rules: {
    "object-shorthand": [0, "never"],
    'vue/no-v-html': 'off',
  },

  overrides: [
    {
      files: ['pages/**/*.vue', 'layouts/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
}
