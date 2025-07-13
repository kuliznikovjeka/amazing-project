export type TBuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string
  build: string
  html: string
  src: string;
}

export interface BuildEnv {
  mode: TBuildMode
  port: string
}
export interface BuildOptions {
  port: string
  paths: BuildPaths
  mode: TBuildMode
  isDev: boolean
}