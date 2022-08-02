// Actions
const CREATE = "todo/CREATE";
const DELETE = "todo/DELETE";
const TOGGLE = "todo/TOGGLE";

// 초기설정값
const initialState = {
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
};

// Action Creators
export function createTodos(todos) {
  return { type: CREATE, todos: todos };
}
export function deleteTodos(todos) {
  //   console.log(todos);
  return { type: DELETE, todos: todos };
}
export function toggleTodos(todos) {
  return { type: TOGGLE, todos: todos };
}

// Reducer
export default function redcer(state = initialState, action = {}) {
  switch (action.type) {
    case "todo/CREATE": {
      const new_todo_list = [...state.list, action.todos];
      return { list: new_todo_list };
    }
    case "todo/DELETE": {
      const idx = action.todos;
      const new_todo_list = [...state.list].filter((e) => {
        return parseInt(e.id) !== parseInt(idx);
      });
      return { list: [...new_todo_list] };
    }
    case "todo/TOGGLE": {
      const idx = action.todos;
      const new_todo_list = [...state.list].map((e) => {
        return parseInt(e.id) === parseInt(idx)
          ? { ...e, isDone: !e.isDone }
          : e;
      });
      return { list: [...new_todo_list] };
    }
    // do reducer stuff
    default:
      return state;
  }
}
