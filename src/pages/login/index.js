import styled from "styled-components";
import MemberForm from "./member";
import NonMemberForm from "./non-member";
import { useState } from "react";

const LoginPage = () => {
  const [isMember, setIsMember] = useState(true);

  const onClickHeader = (e) => {
    const { innerText } = e.target;
    innerText === "회원" ? setIsMember(true) : setIsMember(false);
  };

  return (
    <Wrapper>
      <LogoContainer src="/images/logo.jpg" />
      <Header>
        <MemberHeader isMember={isMember} onClick={onClickHeader}>
          회원
        </MemberHeader>
        <NonMemberHeader isMember={isMember} onClick={onClickHeader}>
          비회원
        </NonMemberHeader>
      </Header>
      {isMember ? <MemberForm /> : <NonMemberForm />}
    </Wrapper>
  );
};

export default LoginPage;

const Header = styled.div`
  width: 480px;
  height: 50px;
  display: flex;
  div {
    display: flex;
    justify-content: center;
    cursor: pointer;
  }
`;

const MemberHeader = styled.div`
  background-color: ${({ isMember }) => (isMember ? "white" : "#d4d4d4")};
  color: ${({ isMember }) => (isMember ? "black" : "gray")};
  width: 50%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
  font-size: 20px;
  border: ${({ isMember }) => (isMember ? "2px solid green" : "none")};
  border-bottom: none;
`;

const NonMemberHeader = styled.div`
  font-size: 20px;
  color: ${({ isMember }) => (isMember ? "gray" : "black")};
  background-color: ${({ isMember }) => (isMember ? "#d4d4d4" : "white")};
  border: ${({ isMember }) => (isMember ? "none" : "2px solid green")};
  border-bottom: none;
  width: 50%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
`;

const Wrapper = styled.div`
  width: 480px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  /* justify-content: center; */
  margin-top: 100px;
`;

const LogoContainer = styled.img`
  width: 200px;
  margin: 0 auto;
  margin-bottom: 30px;
`;
