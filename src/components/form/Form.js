import { useRef, useState } from "react";
import "./style.css";
const Form = ({ todo, setTodo }) => {
  const nextId = useRef(0); // 고유아이디 useRef는 값이 변해도 리렌더 안함
  const ref_title = useRef();
  const ref_content = useRef();
  // const [inputs, setInputs] = useState({
  //   id: nextId.current,
  //   title: "",
  //   content: "",
  //   isDone: false,
  // });
  // const { title, content } = inputs;
  // const onChangeHandler = (e) => {
  //   console.log(e.target.name);
  //   setInputs({
  //     id: nextId.current,
  //     ...inputs,
  //     [e.target.name]: e.target.value,
  //     isDone: false,
  //   });
  // };

  const onSubmitHandler = () => {
    // 현재 input에 있는 값 가지고 오는 부분
    let titleValue = ref_title.current.value;
    let contentValue = ref_content.current.value;
    // 새로 만들어줄 객체 생성
    const newData = {
      id: nextId.current,
      title: titleValue,
      content: contentValue,
      isDone: false,
    };
    // 투두리스트 목록에 넣어줌
    setTodo([...todo, newData]);

    // 빈칸으로 만들어주는 부분
    ref_title.current.value = "";
    ref_content.current.value = "";
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
          // onChange={onChangeHandler}
          // value={title}
          ref={ref_title}
        ></input>
        <label>내용</label>
        <input
          type="text"
          name="content"
          // onChange={onChangeHandler}
          // value={content}
          ref={ref_content}
        ></input>
      </div>
      <button className="add_button" onClick={onSubmitHandler}>
        추가하기
      </button>
    </div>
  );
};

export default Form;
