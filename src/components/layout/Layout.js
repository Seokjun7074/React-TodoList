import styled from "styled-components";

const Layout = (props) => {
  return (
    <Layout_div>
      <Header_div>
        <span>Seokjun's Todo List</span>
        <span>React</span>
      </Header_div>
      {props.children}
    </Layout_div>
  );
};

export default Layout;

const Layout_div = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  min-height: 100vh;
  height: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  background-color: white;
`;

const Header_div = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  font-weight: 700;
  color: teal;
`;
