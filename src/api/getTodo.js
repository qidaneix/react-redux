export function getTodo(nums) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Array(nums).fill(true).map(() => Math.random().toString()));
    }, 2000);
  });
}
