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

function createExampleConfig(entryPoint) {
  return {
    input: {
      [`${entryPoint}.min`]: `./demo/${entryPoint}.js`,
    },
    output: {
      format: 'esm',
      dir: 'demo/'
    },
    plugins: [nodeResolve()],
  };
}


export default [modernConfig, createExampleConfig('index'), createExampleConfig('api'), createExampleConfig('alaska')];
