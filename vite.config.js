import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext'
  }
});

module.exports = {
  env: {
    PS_HOST: process.env.PS_HOST,
    PS_USERNAME: process.env.PS_USERNAME,
    PS_PASSWORD: process.env.PS_PASSWORD,
    PS_DATABASE: process.env.PS_DATABASE,
  }
}