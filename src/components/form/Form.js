import { useRef, useState } from "react";
import "./style.css";
const Form = ({ todo, setTodo }) => {
  const nextId = useRef(0); // 고유아이디 useRef는 값이 변해도 리렌더 안함
  const [inputs, setInputs] = useState({
    id: nextId.current,
    title: "",
    content: "",
    isDone: false,
  });
  const { title, content } = inputs;
  const onChangeHandler = (e) => {
    setInputs({
      id: nextId.current,
      ...inputs,
      [e.target.name]: e.target.value,
      isDone: false,
    });
  };

  const onSubmitHandler = () => {
    setTodo([...todo, inputs]);
    setInputs({
      title: "",
      content: "",
    });
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
