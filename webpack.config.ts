import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './src/config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './src/config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'dist'),
  }

  const mode: BuildMode = env.mode || 'development';
  const PORT = env.port || 3000;

  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode: env.mode,
    paths: paths,
    isDev: isDev,
    port: PORT
  });

  return config
}
