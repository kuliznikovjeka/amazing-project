import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './build-plugins';
import { buildResolvers } from './build-resolvers';
import { builLoaders } from './build-loaders';
import { buildDevServer } from './build-dev-server';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths, isDev } = options;

  const config: webpack.Configuration = {
    mode: mode,
    entry: paths.entry,
    module: {
      rules: builLoaders(options)
    },
    devtool: isDev && 'inline-source-map',
    devServer: isDev && buildDevServer(options),
    resolve: buildResolvers(),
    output: {
      path: paths.build,
      filename: '[name].[contenthash].js',
      clean: true
    },
    plugins: buildPlugins(options)
  }

  return config
}
