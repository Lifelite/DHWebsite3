import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext'
  },
  __APP_ENV__: process.env.VITE_VERCEL_ENV,
  __PS_HOST__: process.env.VITE_PLANETSCALE_DB_HOST,
  __PS_USER__: process.env.VITE_PLANETSCALE_DB_USERNAME,
  __PS_PASS__: process.env.VITE_PLANETSCALE_DB_PASSWORD,
  __PS_DB__: process.env.VITE_PLANETSCALE_DB,
  __PS_SSL__: process.env.VITE_PLANETSCALE_SSL_CERT_PATH
});
