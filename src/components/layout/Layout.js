import { useState } from "react";
import Form from "../form/Form";
import Header from "../header/Header";
import List from "../list/List";
import "./style.css";

const Layout = () => {
  const [todo, setTodo] = useState([]);
  return (
    <div className="Layout">
      <Header></Header>
      <Form todo={todo} setTodo={setTodo}></Form>
      <List todos={todo} setTodo={setTodo} check={false}></List>
      <List todos={todo} setTodo={setTodo} check={true}></List>
    </div>
  );
};

export default Layout;
