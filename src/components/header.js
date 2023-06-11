import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const onClickNavigateLogin = () => {
    navigate("/login");
  };
  const onClickNavigateHome = () => {
    navigate("/");
  };

  const onClickNavigateCart = () => {
    navigate("/cart");
  };
  return (
    <>
      <Wrapper>
        <LogoContainer src="/images/logo.jpg" onClick={onClickNavigateHome} />
        <SearchBar>
          <Input />
          <SearchLogo src="/images/search.png" />
        </SearchBar>
        {/* <AdContainer src="/images/HeaderAd.png" /> */}
        <IconContainer>
          <Icon src="/images/mypage.png" onClick={onClickNavigateLogin} />
          <BoxIcon></BoxIcon>
          <Icon src="/images/cart.png" onClick={onClickNavigateCart} />
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
  height: 60px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

const LogoContainer = styled.img`
  width: 128px;
  margin-left: 30px;
  cursor: pointer;
`;

const SearchBar = styled.div`
  width: 550px;
  height: 44px;
  border-radius: 25px;
  border: 2px solid #1b92fa;
  margin-left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SearchLogo = styled.img`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 20px;
`;

const Input = styled.input`
  width: 70%;
  height: 25px;
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
  width: 40px;
  height: 40px;
`;
const BoxIcon = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  width: 30px;
  height: 30px;
`;
const AdContainer = styled.img`
  height: 100px;
  margin-left: 10px;
  margin-right: 10px;
`;
