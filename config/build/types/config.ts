export type TBuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string
  build: string
  html: string
}

export interface BuildOptions {
  paths: BuildPaths
  mode: TBuildMode
  isDev: boolean
}