// Actions
const CREATE = "todo/CREATE";
const DELETE = "todo/DELETE";

// 초기설정값
// {
//   id: 1,
//   titile: "title",
//   content: "content",
//   isDone: false,
// },

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
  console.log(todos);
  return { type: DELETE, todos: todos };
}

// Reducer
export default function redcer(state = initialState, action = {}) {
  switch (action.type) {
    case "todo/CREATE": {
      const new_todo_list = [...state.list, action.todos];
      return { list: new_todo_list };
    }
    case "todo/DELETE": {
      return { list: [] };
    }
    // do reducer stuff
    default:
      return state;
  }
}
