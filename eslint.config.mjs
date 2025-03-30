import eslint from '@eslint/js'
import eslintPluginSortKeysFix from 'eslint-plugin-sort-keys-fix'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    ignores: ['dist/**', 'node_modules/**'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
      },
    },
    plugins: {
      'sort-keys-fix': eslintPluginSortKeysFix,
    },
    rules: {
      'sort-keys-fix/sort-keys-fix': [
        'error',
        'asc',
        {
          caseSensitive: true,
          natural: true,
        },
      ],
    },
  }
)
