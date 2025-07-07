import { ResolveOptions } from "webpack"

export const buildResolvers = (): ResolveOptions => {
  const resolvers = {
    extensions: ['.tsx', '.ts', '.js'],
  }

  return resolvers
}