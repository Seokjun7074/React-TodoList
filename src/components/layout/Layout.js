import { useState } from "react";
import Form from "../form/Form";
import Header from "../header/Header";
import List from "../list/List";
import "./style.css";
const dummy = [
  {
    title: "제목입니다_1",
    content: "내용입니다_1.",
  },
  {
    title: "제목입니다_2",
    content: "내용입니다_2.",
  },
  {
    title: "제목입니다_3",
    content: "내용입니다_3.",
  },
  {
    title: "제목입니다_4",
    content: "내용입니다_4.",
  },

  {
    title: "제목입니다_3",
    content: "내용입니다_3.",
  },
  {
    title: "제목입니다_4",
    content: "내용입니다_4.",
  },
];

const Layout = () => {
  // console.log(dummy[0]);
  const [todo, setTodo] = useState([]);
  console.log("todo:", todo);
  return (
    <div className="Layout">
      <Header></Header>
      <Form todo={todo} setTodo={setTodo}></Form>
      <List todos={todo}></List>
    </div>
  );
};

export default Layout;
