import Todo from "../todo/Todo";
import "./style.css";
const List = ({ todos, check }) => {
  // console.log(todos);
  return (
    <div className="List">
      <h2>{check ? "Done..! 🎉" : "Working.. 🔥"}</h2>
      <div className="list_container">
        {todos
          .filter((todo) => todo.isDone === check)
          .map((todo) => (
            <Todo key={todo.id} todo={todo}></Todo>
          ))}
      </div>
    </div>
  );
};
export default List;
