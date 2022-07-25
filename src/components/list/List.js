import Todo from "../todo/Todo";
import "./style.css";
const List = ({ todos, setTodo }) => {
  return (
    <div className="List">
      {todos.map((todo, idx) => (
        <Todo key={idx} setTodo={setTodo} todo={todo} todos={todos}></Todo>
      ))}
    </div>
  );
};
export default List;
