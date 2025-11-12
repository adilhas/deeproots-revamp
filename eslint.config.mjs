import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended'
  ),
  {
    ignores: [
      'node_modules',
      '.next',
      'out',
      'dist',
      'coverage',
      'reports',
      'public',
      'prisma',
      'src/generated/**',
    ],
  },
  {
    rules: {
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          printWidth: 80,
          tabWidth: 2,
          trailingComma: 'es5',
          endOfLine: 'auto',
        },
      ],
      // 🚫 Disable noisy TS rules causing 1400+ false positives
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-this-alias': 'off',

      // 🧹 Optional: Relax a few other common false positives
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'warn',

      // 🚦 Ensure build safety (fail on true issues)
      'no-undef': 'error',
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
];

export default eslintConfig;
