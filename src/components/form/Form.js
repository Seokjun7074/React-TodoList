import "./style.css";
const Form = () => {
  return (
    <div className="Form">
      <div className="input_box">
        <label>제목</label>
        <input type="text"></input>
        <label>내용</label>
        <input type="text"></input>
      </div>
      <button className="add_button">추가하기</button>
    </div>
  );
};

export default Form;
