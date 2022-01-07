export async function getTodo(number) {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Array(number).fill(true).map(() => Math.random().toString()));
    }, 2000);
  });
}
