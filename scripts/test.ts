import { resolve } from 'node:path';
import { build } from 'rolldown';

import solidPlugin from '../src';

const TESTS = resolve('tests');

build({
  platform: 'browser',
  input: resolve(TESTS, 'index.tsx'),
  plugins: [solidPlugin()],
  output: {
    file: resolve(TESTS, 'index.js'),
    format: 'esm',
  },
}).catch(() => process.exit(1));

build({
  platform: 'node',
  input: [resolve(TESTS, 'ssr.tsx')],
  plugins: [solidPlugin({ solid: { generate: 'ssr' } })],
  output: {
    file: resolve(TESTS, 'ssr.js'),
    format: 'esm',
  },
}).catch(() => process.exit(1));

build({
  platform: 'browser',
  input: [resolve(TESTS, 'index.tsx')],
  plugins: [solidPlugin({ solid: { hydratable: true } })],
  output: {
    file: resolve(TESTS, 'hydratable.js'),
    format: 'esm',
  },
}).catch(() => process.exit(1));

build({
  platform: 'node',
  input: [resolve(TESTS, 'ssr.tsx')],
  plugins: [solidPlugin({ solid: { generate: 'ssr', hydratable: true } })],
  output: {
    format: 'esm',
    file: resolve(TESTS, 'ssr-hydratable.js'),
  },
}).catch(() => process.exit(1));
