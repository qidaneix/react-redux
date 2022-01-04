export function getTodo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Array(10).fill(true).map((_) => Math.random().toString()));
    }, 2000);
  });
}
