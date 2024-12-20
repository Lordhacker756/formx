import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/**/*.ts', 'src/**/*.tsx', 'index.ts'],
      outDir: 'dist',
      rollupTypes: true
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      formats: ['es', 'umd'],
      name: 'FormX',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        assetFileNames: 'styles.css',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    },
    cssCodeSplit: false
  }
})




// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// import dts from 'vite-plugin-dts'
// import path from 'path'

// export default defineConfig({
//   plugins: [
//     react(),
//     dts({
//       include: ['src/**/*.ts', 'src/**/*.tsx', 'index.ts'],
//       beforeWriteFile: (filePath, content) => ({
//         filePath: filePath,
//         content: content
//       }),
//       outDir: 'dist',
//       insertTypesEntry: true,
//       rollupTypes: true
//     })
//   ],
//   build: {
//     lib: {
//       entry: path.resolve(__dirname, 'index.ts'),
//       formats: ['es', 'cjs'],
//       fileName: (format) => `index.${format}.js`
//     },
//     rollupOptions: {
//       external: ['react', 'react-dom'],
//     }
//   }
// })
