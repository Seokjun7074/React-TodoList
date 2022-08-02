import { useState } from "react";
import { useSelector } from "react-redux";
import Form from "../../components/form/Form";
import Header from "../../components/header/Header";
import List from "../../components/list/List";
import "./style.css";

const Home = () => {
  // Redux store에서 데이터 가져오기
  const todoList = useSelector((state) => {
    return state.todo.list;
  });
  // console.log(todoList);

  return (
    <div className="Home">
      <Header></Header>
      <Form></Form>
      <List todos={todoList} check={false}></List>
      <List todos={todoList} check={true}></List>
    </div>
  );
};

export default Home;
