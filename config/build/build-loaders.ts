import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export const builLoaders = (buildOptions: BuildOptions): webpack.RuleSetRule[] => {
  const { isDev } = buildOptions;

  const cssLoader = {
    test: /\.(sa|sc|c)ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resourcePath: string) => resourcePath.includes('.module.'),
            localIdentName: isDev ? "[path][name]__[local]" : '[hash:base64:5]',
          },
        }
      },
      // Compiles Sass to CSS
      "sass-loader",
    ],

  };

  const typeScriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }

  const loaders = [
    typeScriptLoader,
    cssLoader
  ]

  return loaders;
}
