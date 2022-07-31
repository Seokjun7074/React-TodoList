import { useRef, useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { createTodos } from "../../redux/modules/todo_module";

const Form = () => {
  const nextId = useRef(2); // 고유아이디 useRef는 값이 변해도 리렌더 안함 initeState가 있어서 2부터 시작
  const dispatch = useDispatch(); // dispatch 불러오기
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
  // console.log(inputs);

  const onSubmitHandler = () => {
    // 새로 만들어줄 객체 생성
    const newData = {
      ...inputs,
    };
    // dispatch를 통해 todolist 작성
    dispatch(createTodos(newData));

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
