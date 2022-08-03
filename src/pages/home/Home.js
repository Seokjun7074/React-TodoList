import { useSelector } from "react-redux";
import Form from "../../components/form/Form";
import List from "../../components/list/List";
import Layout from "../../components/layout/Layout";
import "./style.css";

const Home = () => {
  // Redux store에서 데이터 가져오기
  const todoList = useSelector((state) => {
    return state.todo.list;
  });

  return (
    <Layout>
      <Form></Form>
      <List todos={todoList} check={false}></List>
      <List todos={todoList} check={true}></List>
    </Layout>
  );
};

export default Home;
