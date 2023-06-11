import { useSelector } from "react-redux";
import styled from "styled-components";

const SumPrice = () => {
  const cart = useSelector((state) => state.cart);
  const ItemCount = cart.length;

  console.log("cart", cart);

  //return 안에 return 문
  //최종적으로 반환하는것은 reduce
  const PriceSum = () => {
    return cart.reduce((acc, cur) => {
      console.log(cur.price);
      return acc + cur.price * cur.count;
    }, 0); // 초기값 0으로 설정
  };

  console.log(PriceSum());

  return (
    <Wrapper>
      <Title>결제정보</Title>
      <PriceContainer>
        <Item>
          <div>상품수</div>
          <div>{ItemCount}개</div>
        </Item>
        <Item>
          <div>상품금액</div>
          <div>{PriceSum()}원</div>{" "}
        </Item>
        <Item>배송비 3000원</Item>
        <Item>총 결제금액</Item>
        <TotalPrice>
          <div>{PriceSum() + 3000}원</div>
        </TotalPrice>
      </PriceContainer>
    </Wrapper>
  );
};
export default SumPrice;

const Wrapper = styled.div`
  width: 360px;
  height: 376px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid black;
  margin-left: 30px;
  margin-top: 20px;
  padding-left: 30px;
  position: sticky;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TotalPrice = styled.div`
  font-size: 25px;
  font-weight: 900;
  margin-top: 10px;
  display: flex;
`;
const Title = styled.div`
  font-size: 20px;
  height: 40px;
  width: 300px;
  font-weight: 600;
  border-bottom: 1px solid black;
  padding-top: 15px;
`;

const Item = styled.div`
  font-size: 16px;
  color: #777;
  font-weight: 500;
  margin-top: 10px;
  position: relative;
  display:flex;s
`;
