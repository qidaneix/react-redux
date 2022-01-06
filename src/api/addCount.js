export function addCount(number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(number);
    }, 1000);
  });
}
