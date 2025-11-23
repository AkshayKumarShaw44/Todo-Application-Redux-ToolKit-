import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || []
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        todo: action.payload.todo,
        completed: false,
      };
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));

    },
    UpdateTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.todo = action.payload.todo;
      }
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      localStorage.setItem("todos", JSON.stringify(state.todos));

    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload.id);
      if (todo) {
        todo.completed = !(todo.completed);
      }
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export const { addTodo, UpdateTodo, deleteTodo, toggleComplete } =
  todoSlice.actions;

export default todoSlice.reducer;



