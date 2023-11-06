// import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     target: 'esnext'
//   }
// });

module.exports = {
  env: {
    PS_HOST: import.meta.env.env.PS_HOST,
    PS_USERNAME: import.meta.env.env.PS_USERNAME,
    PS_PASSWORD: import.meta.env.env.PS_PASSWORD,
    PS_DATABASE: import.meta.env.env.PS_DATABASE,
  },
  plugins: [react()],
  build: {
    target: 'esnext'
  }
}