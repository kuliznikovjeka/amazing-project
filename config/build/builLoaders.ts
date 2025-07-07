import webpack from "webpack";

export const builLoaders = (): webpack.RuleSetRule[] => {
  const typeScriptLoader = {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }

  const loaders = [
    typeScriptLoader
  ]

  return loaders;
}
