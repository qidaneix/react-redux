import { getTodo as fetchTodo } from "../api/getTodo";

export const ADD_TODO = "添加 TODO";
export const EDIT_TODO = "修改 TODO";
export const DELETE_TODO = "删除 TODO";
export const GET_TODO_REQUEST = "开始请求 TODO";
export const GET_TODO_SUCCESS = "请求成功 TODO";

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

/**
 * get todo request action creator
 * @returns
 */
export function getTodoRequest() {
  return {
    type: GET_TODO_REQUEST,
  };
}

/**
 * get todo success action creator
 * @returns
 */
export function getTodoSuccess(list) {
  return {
    type: GET_TODO_SUCCESS,
    list,
  };
}

/**
 * get todos action creator
 * @param
 * @returns
 */
export function getTodo(page) {
  return (dispatch) => {
    dispatch(getTodoRequest(page));
    return fetchTodo(page).then((res) => {
      dispatch(getTodoSuccess(res, page));
    });
  };
}
