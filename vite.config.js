import {defineConfig, loadEnv} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     target: 'esnext'
//   },
//   const env = loadEnv(mode, process.cwd, '')
//   return {
//     define: {
//
//     }
// })

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd, '')
  return {
    plugins: [react()],
    build: {
      target: 'esnext'
    },
    define: {
      PLANETSCALE_DB_HOST: env.PLANETSCALE_DB_HOST,
      PLANETSCALE_DB_USERNAME: env.PLANETSCALE_DB_USERNAME,
      PLANETSCALE_DB_PASSWORD: env.PLANETSCALE_DB_PASSWORD,
      PLANETSCALE_DB: env.PLANETSCALE_DB,
      PLANETSCALE_SSL_CERT_PATH: env.PLANETSCALE_SSL_CERT_PATH
    }
  }
})