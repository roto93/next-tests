import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: { extends: [] },
})

// 載入原始配置
const originalConfig = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: '.',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'next/core-web-vitals',
    'prettier',
  ],
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-var': 'off',
    'no-unused-vars': 'off',
    'no-useless-escape': 'off',
    'no-undef': 'off',
    'prefer-const': 'off',
    'no-redeclare': 'off',
    'no-fallthrough': 'off',
    'comma-spacing': 'warn',
    'no-empty-pattern': 'off',
    eqeqeq: 'error',
    '@next/next/no-img-element': 'warn',
    '@next/next/no-html-link-for-pages': 'error',
  },
  env: { browser: true, node: true, es2021: true },
}

// 使用 FlatCompat 轉換整個配置對象
const eslintConfig = [...compat.config(originalConfig)]

export default eslintConfig
