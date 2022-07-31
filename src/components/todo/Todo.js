import "./style.css";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { deleteTodos, toggleTodos } from "../../redux/modules/todo_module";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const removeTodo = () => {
    dispatch(deleteTodos(todo.id));
  };
  const editIsDone = () => {
    dispatch(toggleTodos(todo.id));

    // setTodo(
    //   todos.map((e) => (e.id === todo.id ? { ...e, isDone: !e.isDone } : e))
    // );
  };
  return (
    <div className="Todo">
      <h2 className="todo_title">{todo.title}</h2>
      <div>{todo.content}</div>
      <div className="button_container">
        <Button onClick={editIsDone}>{todo.isDone ? "취소" : "완료"}</Button>
        <Button delete onClick={removeTodo}>
          삭제하기
        </Button>
      </div>
    </div>
  );
};

const Button = styled.button`
  margin-top: 20px;
  cursor: pointer;
  border: 2px solid;
  border-color: ${(props) => (props.delete ? "tomato" : "teal")};
  background-color: #fff;
  border-radius: 10px;
  padding: 5px;
  width: 50%;
  height: 40px;
`;

export default Todo;
