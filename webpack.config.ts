import path from 'path';
import webpack from 'webpack';

import { buildWebpackConfig } from './src/config/build/buildWebpackConfig';
import { BuildMode, BuildPaths } from './src/config/build/types/config';

const paths: BuildPaths = {
  html: path.resolve(__dirname, 'public', 'index.html'),
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'dist'),
}

const mode: BuildMode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
  mode: 'development',
  paths: paths,
  isDev: isDev
});

export default config;
