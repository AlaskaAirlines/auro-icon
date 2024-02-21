import { nodeResolve } from '@rollup/plugin-node-resolve';
import serve from 'rollup-plugin-serve';

const production = !process.env.ROLLUP_WATCH;

const modernConfig = {
  input: {
    ['auro-icon__bundled']: './index.js',
  },
  output: {
    format: 'esm',
    dir: 'dist/'
  },
  plugins: [
    nodeResolve(),
    !production &&
      serve({
        open: true,
        openPage: '/docs/'
      })
  ]
};

const alaskaConfig = {
  input: {
    ['auro-alaska__bundled']: './src/auro-alaska.js',
  },
  output: {
    format: 'esm',
    dir: 'dist/'
  },
  plugins: [
    nodeResolve(),
    !production &&
      serve({
        open: true,
        openPage: '/docs/'
      })
  ]
};

export default [modernConfig, alaskaConfig];
