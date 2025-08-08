import { defineConfig } from 'tsdown';

function createConfig(format: 'cjs' | 'esm') {
  return defineConfig({
    entry: ['src/index.ts'],
    outDir: 'dist',
    platform: 'node',
    format: [format],
    clean: true,
    dts: format === 'esm',
    target: 'node18',
    minify: false,
  });
}

export default [createConfig('cjs'), createConfig('esm')];
