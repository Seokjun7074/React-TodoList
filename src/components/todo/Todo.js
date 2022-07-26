import "./style.css";
const Todo = ({ setTodo, todo, todos }) => {
  const removeTodo = () => {
    setTodo(todos.filter((e) => e.id !== todo.id));
  };
  const editIsDone = () => {
    setTodo(
      todos.map((e) => (e.id === todo.id ? { ...e, isDone: !e.isDone } : e))
    );
  };
  console.log(todo.title, todo.isDone);
  return (
    <div className="Todo">
      <h2 className="todo_title">{todo.title}</h2>
      <div>{todo.content}</div>
      <button onClick={removeTodo}>삭제하기</button>
      <button onClick={editIsDone}>{todo.isDone ? "취소" : "완료"}</button>
    </div>
  );
};

export default Todo;
