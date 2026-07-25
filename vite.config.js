import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // The Claude Design kit syncs into ui_kits/marketing-site/.
      // Importing through this alias means the app code does not change
      // when the kit is re-synced.
      '@kit': fileURLToPath(new URL('./ui_kits/marketing-site', import.meta.url)),
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
