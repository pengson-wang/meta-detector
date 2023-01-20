import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/background.ts'),
      name: 'background',
      fileName: (format) => {
        if (format === 'umd') {
          return `background.js`
        }
          return `background.${format}.js`
      },
    }
  },
  plugins: [vue()]
})
