import styled from "styled-components";
import { useSelector } from "react-redux";
import OneItem from "./components/oneItem";
import SumPrice from "./components/sum";
import { BiCheckCircle } from "react-icons/bi";
const CartPage = () => {
  const cart = useSelector((state) => state.cart);

  return (
    <Wrapper>
      <Header>
        <Title>장바구니</Title>
        <TotalCount>전체 {cart.length}</TotalCount>
        <NavBar>
          <div>
            <BiCheckCircle />
            전체선택
          </div>
          <div>선택삭제</div>
        </NavBar>
      </Header>
      <Flex>
        <ItemContainer>
          {cart.map((item) => (
            <OneItem key={item.id} item={item} />
          ))}
        </ItemContainer>
        <SumPrice />
      </Flex>
    </Wrapper>
  );
};
export default CartPage;

const NavBar = styled.div`
  height: 30px;
  background-color: #f3f3f3;
  display: flex;
  padding-left: 40px;
  padding-top: 10px;
  div {
    padding-left: 20px;
  }
`;
const Wrapper = styled.div`
  color: #363636;
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  width: 100%;
`;

const Flex = styled.div`
  display: flex;
  background-color: #f3f3f3;
  width: 100%;
`;

const Title = styled.div`
  width: 100%;
  padding-left: 30px;
  font-size: 40px;
  font-weight: 500;
  height: 95px;
  display: flex;
  align-items: center;
  border-top: 0.1rem solid #d7d7d7;
`;

const TotalCount = styled.div`
  width: 100%;
  padding-left: 30px;
  font-size: 24px;
  height: 60px;
  display: flex;
  align-items: center;
  border: 0.1rem solid #d7d7d7;
`;

const ItemContainer = styled.div`
  padding-left: 50px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
`;
