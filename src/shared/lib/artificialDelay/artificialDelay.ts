export function artificialDelay<T>(promise: Promise<T>): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  }).then(() => promise);
}