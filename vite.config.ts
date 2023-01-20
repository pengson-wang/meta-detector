import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  define: { 'process.env.NODE_ENV': '"production"' },
  build: {
    emptyOutDir: false,
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'content-script',
      fileName: (format) => {
        if (format === 'umd') {
          return `content-script.js`
        }
          return `content-script.${format}.js`
      },
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name == 'style.css')
            return 'meta-detector.css';
          return assetInfo.name;
        }
      }
    }
  },
  plugins: [vue()]
})
