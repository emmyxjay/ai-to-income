import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
 plugins: [tailwindcss()],
 build: {
  outDir: 'dist/feedback', emptyOutDir: true,
  lib: {entry:'src/feedback/main.tsx',formats:['es'],fileName:()=> 'carousel.js',cssFileName:'carousel'},
  target:'es2020'
 },
 define:{'process.env.NODE_ENV':JSON.stringify('production')}
});
