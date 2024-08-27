import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './src/shared/config/build/buildWebpackConfig';
import { BuildEnv, BuildMode, BuildPaths } from './src/shared/config/build/types/config';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src'),
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

