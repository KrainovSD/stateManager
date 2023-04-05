import { createStore } from "../../KRStore";
export const genID = () =>
  "x"
    .repeat(15)
    .replace(
      /./g,
      (c) =>
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[
          Math.floor(Math.random() * 62)
        ]
    );

export interface IInitialTodo {
  todo: ITodo[];
}
export interface ITodo {
  title: string;
  finish: boolean;
  id: string;
}

export interface IReducersList {
  addTodo: TReducerWithPayload<string>;
  updateTodoFinish: TReducerWithPayload<string>;
  updateTodoFinishAll: TReducerWithOutPayload;
  updateTodoTitle: TReducerWithPayload<{ id: string; title: string }>;
  deleteTodo: TReducerWithPayload<string>;
  clearFinished: TReducerWithOutPayload;
}
type TReducerWithOutPayload = () => void;
type TReducerWithPayload<T> = (payload: T) => void;

const initialState: IInitialTodo = {
  todo: [],
};
const store = createStore({
  initialState: initialState,
  reducers: {
    addTodo: (state: IInitialTodo, payload: string) => {
      const id = genID();
      const todo: ITodo = {
        id: id,
        finish: false,
        title: payload,
      };
      state.todo = [...state.todo, todo];
      return state;
    },
    updateTodoFinish: (state: IInitialTodo, payload: string) => {
      state.todo = state.todo.map((item) => {
        if (item.id === payload) item.finish = item.finish ? false : true;
        return item;
      });

      return state;
    },
    updateTodoFinishAll: (state: IInitialTodo) => {
      state.todo = state.todo.map((item) => {
        item.finish = true;
        return item;
      });
      return state;
    },
    updateTodoTitle: (
      state: IInitialTodo,
      payload: { id: string; title: string }
    ) => {
      state.todo = state.todo.map((item) => {
        if (item.id === payload.id) item.title = payload.title;
        return item;
      });
      return state;
    },
    deleteTodo: (state: IInitialTodo, payload: string) => {
      state.todo = state.todo.filter((item) => item.id !== payload);
      return state;
    },
    clearFinished: (state: IInitialTodo) => {
      state.todo = state.todo.filter((item) => item.finish !== true);
      return state;
    },
  },
});
export default store;
