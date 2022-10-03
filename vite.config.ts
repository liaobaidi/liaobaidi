import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { VantResolver } from 'unplugin-vue-components/resolvers'

import { resolve } from 'path'
const resolvePath = (dir: string) => {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver(), VantResolver()]
    })
  ],
  resolve: {
    alias: [
      {
        find: /\/@\//,
        replacement: resolvePath('src') + '/'
      },
      {
        find: /\/#\//,
        replacement: resolvePath('types') + '/'
      },
      {
        find: /~/,
        replacement: resolvePath('assets') + '/'
      }
    ],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  }
})
