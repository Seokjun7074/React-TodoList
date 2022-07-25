import { useState } from "react";
import "./style.css";
const Form = ({ todo, setTodo }) => {
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
  });
  const { title, content } = inputs;
  // console.log(title, content);
  const onChangeHandler = (e) => {
    // console.log(e.target.value, e.target.name);
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = () => {
    setTodo([...todo, inputs]);
    setInputs({
      title: "",
      content: "",
    });
  };
  // console.log(inputs);
  return (
    <div className="Form">
      <div className="input_box">
        <label>제목</label>
        <input type="text" name="title" onChange={onChangeHandler}></input>
        <label>내용</label>
        <input type="text" name="content" onChange={onChangeHandler}></input>
      </div>
      <button className="add_button" onClick={onSubmitHandler}>
        추가하기
      </button>
    </div>
  );
};

export default Form;
