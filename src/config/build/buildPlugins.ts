import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import { BuildOptions } from './types/config';

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
  const { paths } = options;

  return [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
  ]
}