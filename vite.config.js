import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import useVue from '@vitejs/plugin-vue'
import { viteSingleFile as useSingleFile } from 'vite-plugin-singlefile'
import useMarkdown from 'unplugin-vue-markdown/vite'
import useEslint from 'vite-plugin-eslint'
import useUnoCSS from 'unocss/vite'
import postcssConfig from './postcss.config.js'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve('src'),
    },
  },
  plugins: [
    useEslint(),
    useUnoCSS(),
    useVue({ include: [/\.vue$/, /\.md$/] }),
    useMarkdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
    }),
    useSingleFile(),
  ],
  css: {
    postcss: postcssConfig,
  },
})
