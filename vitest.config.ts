import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/public/**',
      '**/e2e/**',
      '**/.{idea,git,cache,output,temp}/**',
      '**/playwright/**',
    ],
  },
});

