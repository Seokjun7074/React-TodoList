import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [
      {
        id: 0,
        title: "title 1",
        content: "content 1",
        isDone: false,
      },
      {
        id: 1,
        title: "title 2",
        content: "content 2",
        isDone: true,
      },
    ],
  },
  reducers: {
    createTodos: (state, action) => {
      state.list.push(action.payload);
    },
    deleteTodos: (state, action) => {
      const idx = action.payload;
      return {
        ...state,
        list: state.list.filter((e) => e.id !== idx),
      };
    },

    toggleTodos: (state, action) => {
      const idx = action.payload;
      return {
        ...state,
        list: state.list.map((e) => {
          return parseInt(e.id) === parseInt(idx)
            ? { ...e, isDone: !e.isDone }
            : e;
        }),
      };
    },
  },
});

export const { createTodos, deleteTodos, toggleTodos } = todoSlice.actions;
export default todoSlice.reducer;
