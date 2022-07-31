import "./style.css";

import { useDispatch } from "react-redux";
import { deleteTodos } from "../../redux/modules/todo_module";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const removeTodo = () => {
    dispatch(deleteTodos(todo.id));
  };
  const editIsDone = () => {
    // setTodo(
    //   todos.map((e) => (e.id === todo.id ? { ...e, isDone: !e.isDone } : e))
    // );
  };
  return (
    <div className="Todo">
      <h2 className="todo_title">{todo.title}</h2>
      <div>{todo.content}</div>
      <div className="button_container">
        <button onClick={removeTodo}>삭제하기</button>
        <button onClick={editIsDone}>{todo.isDone ? "취소" : "완료"}</button>
      </div>
    </div>
  );
};

export default Todo;
