import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => ({
  open: true,
  hot: true,
  port: options.port,
  historyApiFallback: true,
});
