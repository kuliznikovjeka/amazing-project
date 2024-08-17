import webpack from 'webpack';

export function buildLoaders (): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const styleLoader = {
    test: /\.(s[ac]ss|css)$/i,
    use: [
      "style-loader",
      "css-loader",
      "sass-loader",
    ]
  }

  return [
    tsLoader,
    styleLoader
  ]
}