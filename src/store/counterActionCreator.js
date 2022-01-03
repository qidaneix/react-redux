export const INCREMENT = "加1";
export const DECREMENT = "减1";

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}
