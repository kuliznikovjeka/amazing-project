export type BuildMode = 'development' | 'production';

export interface BuildPaths {
  build: string;
  entry: string;
  html: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  paths: BuildPaths;
  mode: BuildMode;
  isDev: boolean;
  port: number;
}