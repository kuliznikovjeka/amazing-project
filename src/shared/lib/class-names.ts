type TModes = Record<string, boolean | string>;

export const classNames = (cls: string, modes: TModes, additionalClasses: string[]): string => {
  return [
    cls,
    ...additionalClasses,
    ...Object.entries(modes)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(" ");
};
