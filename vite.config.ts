import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoBasePath = '/mama-ya-v-polshe/';
// Update repoBasePath if the repository name changes or set it to '/' for a root deployment.

export default defineConfig({
  plugins: [react()],
  base: repoBasePath,
});
