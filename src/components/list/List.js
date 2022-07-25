import Todo from "../todo/Todo";
import "./style.css";
const List = ({ todos }) => {
  // console.log(todos[0].title);
  return (
    <div className="List">
      {todos.map((todo, idx) => (
        <Todo key={idx} title={todo.title} content={todo.content}></Todo>
      ))}
    </div>
  );
};
export default List;
