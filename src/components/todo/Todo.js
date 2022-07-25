import "./style.css";
const Todo = ({ title, content }) => {
  return (
    <div className="Todo">
      <h2 className="todo_title">{title}</h2>
      <div>{content}</div>
      <button>삭제하기</button>
      <button>완료/취소</button>
    </div>
  );
};

export default Todo;
