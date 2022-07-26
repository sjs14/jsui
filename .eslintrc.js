module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off', // 允许any
    '@typescript-eslint/no-non-null-assertion': 'off', // 允许非空断言
    'vue/max-attributes-per-line': 'off', // 不强制换行
    'vue/multi-word-component-names': 'off', // 允许单个单词的文件
    'vue/singleline-html-element-content-newline': 'off'
  },
  globals: {
    defineOptions: 'readonly',
    defineProps: 'readonly'
  }
}
