import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginTailwindcss } from '@rsbuild/plugin-tailwindcss';

export default defineConfig({
  plugins: [pluginReact(), pluginTailwindcss()],
  source: {
    entry: { index: './src/main.tsx' },
  },
  html: {
    template: './index.html',
  },
  output: {
    distPath: { root: 'dist' },
    overrideBrowserslist: ['Firefox >= 140'],
  },
  server: {
    host: '127.0.0.1',
    port: 3000,
    strictPort: true,
    publicDir: { name: 'public' },
  },
});
