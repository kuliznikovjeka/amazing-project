import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from './types/config';

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
  const { paths, isDev } = options;

  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
  ].concat(isDev ? [] : [
      new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }
  )])

  return plugins;
}

