import { useRef, useState } from "react";
import "./style.css";
const Form = ({ todo, setTodo }) => {
  const nextId = useRef(2); // 고유아이디 useRef는 값이 변해도 리렌더 안함

  // input에서 받는 값
  const [inputs, setInputs] = useState({
    id: nextId.current,
    title: "",
    content: "",
    isDone: false,
  });
  const { title, content } = inputs;
  const onChangeHandler = (e) => {
    setInputs({
      ...inputs,
      id: nextId.current,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitHandler = () => {
    // 새로 만들어줄 객체 생성
    const newData = {
      ...inputs,
    };
    // 투두리스트 목록에 넣어줌
    setTodo([...todo, newData]);
    // 빈칸으로 만들어주는 부분
    setInputs({ ...inputs, title: "", content: "" });
    // 고유 아이디 1증가
    nextId.current++;
  };
  return (
    <div className="Form">
      <div className="input_box">
        <label>제목</label>
        <input
          type="text"
          name="title"
          onChange={onChangeHandler}
          value={title}
        ></input>
        <label>내용</label>
        <input
          type="text"
          name="content"
          onChange={onChangeHandler}
          value={content}
        ></input>
      </div>
      <button className="add_button" onClick={onSubmitHandler}>
        추가하기
      </button>
    </div>
  );
};

export default Form;
