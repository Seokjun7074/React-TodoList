import Todo from "../todo/Todo";
import "./style.css";
const List = ({ todos, setTodo, check }) => {
  return (
    <div className="List">
      <h2>{check ? "Done..! 🎉" : "Working.. 🔥"}</h2>
      <div className="list_container">
        {todos
          .filter((todo) => todo.isDone === check)
          .map((todo, idx) => (
            <Todo key={idx} setTodo={setTodo} todo={todo} todos={todos}></Todo>
          ))}
      </div>
    </div>
  );
};
export default List;
