import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'public',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MarkdownHandler',
      fileName: 'index',
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@mui/material',
        '@mui/icons-material',
        '@emotion/react',
        '@emotion/styled',
        'react-markdown',
        'remark-gfm',
        'react-syntax-highlighter',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
