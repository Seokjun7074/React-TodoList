import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../components/layout/Layout";

const Detail = () => {
  const param = useParams().id;
  const navigate = useNavigate();

  const todoList = useSelector((state) => {
    return state.todo.list.filter((e) => e.id === param);
  })[0];
  // console.log(todoList);
  // 인덱스로 하는게 맞나..?

  return (
    <Layout>
      <Todo_container>
        <Todo_container_header>
          <span>id: {todoList.id}</span>
          <Back_button onClick={() => navigate(-1)}>뒤로가기</Back_button>
        </Todo_container_header>

        <Todo_container_body>
          <h2>Title: {todoList.title}</h2>
          <span>Content: {todoList.content}</span>
        </Todo_container_body>
      </Todo_container>
    </Layout>
  );
};

const Todo_container = styled.div`
  margin: 0 auto;
  padding: 10px;
  width: 400px;
  height: 300px;
  border: 2px solid teal;
  border-radius: 10px;
  font-weight: 600;
`;

const Todo_container_header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Todo_container_body = styled.div`
  margin-top: 20px;
  padding: 10px;
  text-align: start;
`;

const Back_button = styled.button`
  border: none;
  border-radius: 10px;
  padding: 3px;
  background-color: teal;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  align-items: center;
  color: white;
  width: 70px;
  cursor: pointer;
`;
export default Detail;
