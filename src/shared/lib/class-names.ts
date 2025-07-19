type TModes = Record<string, boolean | string>;

export const classNames = (
  cls: string,
  modes: TModes = {},
  additionalClasses: string[] = [],
): string => [
  cls,
  ...additionalClasses.filter(Boolean),
  ...Object.entries(modes)
    .filter(([_, value]) => Boolean(value))
    .map(([className]) => className),
].join(' ');
