import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { builLoaders } from './builLoaders';

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
  const { mode, paths } = options;

  const config = {
    mode: mode,
    entry: paths.entry,
    module: {
      rules: builLoaders()
    },
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
