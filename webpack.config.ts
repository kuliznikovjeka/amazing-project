
import webpack from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/build-webpack-config';
import { BuildEnv, BuildPaths, TBuildMode } from './config/build/types/config';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html'),
  src: path.resolve(__dirname, 'src'),
}

export default (env: BuildEnv) => {

  const port = env.port || '3000';
  const mode: TBuildMode = env.mode || 'development';

  const isDev = mode === 'development';

  const config: webpack.Configuration = buildWebpackConfig({
    mode: mode,
    paths: paths,
    isDev: isDev,
    port: port
  });

  return config
};