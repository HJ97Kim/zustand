import create from "zustand";
import { v4 as uuidv4 } from "uuid";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  todoList: [],

  addTodo: (text) => {
    set(
      (state) => ({
        todoList: [
          ...state.todoList,
          {
            id: uuidv4(),
            text,
          },
        ],
      }),
      false,
      "ADD"
    );
  },

  removeTodo: (id) => {
    set(
      (state) => ({
        todoList: state.todoList.filter((todo) => todo.id !== id),
      }),
      false,
      "REMOVE"
    );
  },
});

const useStore = create(devtools(store));

export default useStore;
