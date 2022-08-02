import "./style.css";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import { deleteTodos, toggleTodos } from "../../redux/modules/todo_slice";
import { useParams, Link } from "react-router-dom";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const removeTodo = () => {
    dispatch(deleteTodos(todo.id));
  };
  const editIsDone = () => {
    dispatch(toggleTodos(todo.id));
  };

  return (
    <div className="Todo">
      <div className="todo_container">
        <h2 className="todo_title">{todo.title}</h2>
        <Link className="link_text" to={`/detail/${todo.id}`}>
          상세정보
        </Link>
      </div>
      <div>{todo.content}</div>
      <div className="todo_container">
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
