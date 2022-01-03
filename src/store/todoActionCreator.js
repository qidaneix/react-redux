export const ADD_TODO = "添加 TODO";
export const EDIT_TODO = "修改 TODO";
export const DELETE_TODO = "删除 TODO";

/**
 * add todo action creator
 * @param text
 * @returns
 */
export function addTodo(text) {
  return {
    type: ADD_TODO,
    text,
  };
}

/**
 * edit todo action creator
 * @param text
 * @returns
 */
export function editTodo(index, text) {
  return {
    type: EDIT_TODO,
    index,
    text,
  };
}

/**
 * delete todo action creator
 * @param text
 * @returns
 */
export function deleteTodo(index) {
  return {
    type: DELETE_TODO,
    index,
  };
}
