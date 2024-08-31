import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  }

  const cssLoader = {
    test: /\.(s[ac]ss|css)$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: /\.module\./,
            localIdentName: isDev
            ? '[path][name]__[local]--[hash:base64:5]'
            : '[hash:base64:5]'
          },
        },
      },
      "sass-loader",
    ]
  }

  return [
    tsLoader,
    svgLoader,
    fileLoader,
    cssLoader,
  ]
}