import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const onClickNavigateLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <Wrapper>
        <LogoContainer src="/images/logo.jpg" />
        <SearchBar>
          <Input />
          <SearchLogo src="/images/search.png" />
        </SearchBar>
        <AdContainer src="/images/HeaderAd.png" />
        <IconContainer>
          <Icon src="/images/mypage.png" onClick={onClickNavigateLogin} />
          <BoxIcon></BoxIcon>
          <Icon src="/images/cart.png" />
        </IconContainer>
      </Wrapper>
      <Outlet />
    </>
  );
};
export default Header;

const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;

const LogoContainer = styled.img`
  width: 230px;
  margin-left: 100px;
`;

const SearchBar = styled.div`
  width: 600px;
  height: 50px;
  border-radius: 25px;
  border: 2px solid #1b92fa;
  margin-left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchLogo = styled.img`
  width: 30px;
  height: 30px;
`;

const Input = styled.input`
  width: 530px;
  height: 40px;
  border: none;
  font-size: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  width: 300px;
  justify-content: space-around;
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
`;
const BoxIcon = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  width: 40px;
  height: 40px;
`;
const AdContainer = styled.img`
  height: 100px;
  margin-left: 10px;
  margin-right: 10px;
`;
