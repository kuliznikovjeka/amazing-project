import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolvers = (options: BuildOptions): ResolveOptions => {
  const resolvers: ResolveOptions = {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    preferAbsolute: true,
  };

  return resolvers;
};
