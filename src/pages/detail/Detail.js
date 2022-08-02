import { useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/header/Header";

const Detail = () => {
  const param = useParams().id;
  const navigate = useNavigate();

  const todoList = useSelector((state) => {
    return state.todo.list.filter((e) => {
      return parseInt(e.id) === parseInt(param);
    });
  })[0];
  // 인덱스로 하는게 맞나..?

  console.log(todoList.title);
  console.log(todoList.content);

  return (
    <div className="Detail">
      <Detail_container>
        <Header></Header>
        <Todo_container>
          <Todo_container_header>
            <span>id: {todoList.id}</span>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
          </Todo_container_header>
          <Todo_container_body>
            <h2>Title: {todoList.title}</h2>
            <span>Content: {todoList.content}</span>
          </Todo_container_body>
        </Todo_container>
      </Detail_container>
    </div>
  );
};

const Detail_container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  min-height: 100vh;
  height: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
`;
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
  /* display: flex; */
  /* justify-content: start; */
  margin-top: 20px;
  padding: 10px;
  text-align: start;
`;
export default Detail;
