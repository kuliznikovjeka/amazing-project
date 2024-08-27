import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers (options: BuildOptions): ResolveOptions  {
  const { paths } = options;
  return {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [paths.src, 'node_modules'],
    preferAbsolute: true,
    mainFiles: ['index'],
    alias: {}
  }
}