import { defineConfig, globalIgnores } from 'eslint/config'

import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'
import globals from 'globals'
import autoImport from './.eslintrc-auto-import.json' with { type: 'json' }

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['src/**/*.{cjs,mjs,js,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...autoImport.globals,
      },
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  ...pluginVue.configs['flat/recommended'].map((config) => ({
    ...config,
    name: 'app/vue-files-to-lint',
    files: ['src/**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  })),

  {
    name: 'app/vitest-files-to-lint',
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  skipFormatting,
])
