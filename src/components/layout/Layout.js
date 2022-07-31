import { useState } from "react";
import { useSelector } from "react-redux";
import Form from "../form/Form";
import Header from "../header/Header";
import List from "../list/List";
import "./style.css";

const Layout = () => {
  // const [todo, setTodo] = useState([]);
  const todoList = useSelector((state) => {
    return state.todo_modules.list;
  });
  console.log(todoList);

  return (
    <div className="Layout">
      <Header></Header>
      {/* <Form todo={todo} setTodo={setTodo}></Form> */}
      <List todos={todoList} check={false}></List>
      <List todos={todoList} check={true}></List>
    </div>
  );
};

export default Layout;
