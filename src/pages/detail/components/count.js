import { useDebugValue, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AddItem } from "reducer/cart";
import { useNavigate } from "react-router-dom";

const Count = ({ targetItem }) => {
  //0을 적어줘야 함?
  const { id, name, price, image, company } = targetItem[0];
  console.log("targetItem", targetItem[0]);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const onClickIncreaseCount = () => {
    setCount((prev) => prev + 1);
  };
  const onClickDecreaseCount = () => {
    if (count < 2) return;
    setCount((prev) => prev - 1);
  };

  const convertedPrice = (price) => {
    return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  const onSubmitCart = (e) => {
    e.preventDefault();
    console.log(id, name, price, image, count);
    dispatch(AddItem({ id, name, price, image, count, company }));
    if (
      window.confirm(
        "장바구니에 해당 상품이 담겼습니다. 장바구니로 이동하시겠습니까?"
      )
    ) {
      //장바구니 추가 로직
      navigate("/cart");
    }
  };
  return (
    <>
      <CountContainer>
        <CountText>수량</CountText>
        <CountBottom>
          <CountChangeBox>
            <CountChangeButton onClick={onClickDecreaseCount}>
              -
            </CountChangeButton>
            <CountNumber>{count}</CountNumber>
            <CountChangeButton onClick={onClickIncreaseCount}>
              +
            </CountChangeButton>
          </CountChangeBox>
          {/* <CountPrice>{convertedPrice(count * price.price)}원</CountPrice> */}
          <CountPrice>{convertedPrice(price * count)}</CountPrice>
        </CountBottom>
      </CountContainer>
      <ButtonContainer>
        <CartButton onClick={onSubmitCart}>장바구니</CartButton>
        <BuyButton>구매하기</BuyButton>
      </ButtonContainer>
    </>
  );
};
export default Count;

const CountNumber = styled.div`
  margin-top: 10px;
  width: 50px;
  height: 30px;
  border: 1px solid black;
  background-color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CountContainer = styled.div`
  width: 400px;
  height: 100px;
  background-color: #f5f5f5;
`;
const CountText = styled.div`
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #888;
`;

const CountChangeButton = styled.button`
  border: 1px solid black;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  font-size: 30px;
  margin-top: 10px;
`;

const CountChangeBox = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
  justify-content: space-evenly;
`;

const CountPrice = styled.div`
  font-size: 30px;
  font-weight: 800;
  margin-left: 300px;
  position: absolute;
  top: 10px;
  right: 30px;
`;

const CountBottom = styled.div`
  position: relative;
`;

const CartButton = styled.button`
  width: 170px;
  height: 60px;
  font-size: 25px;
  border: 1px solid #777;
  color: black;
  background-color: white;
  border-radius: 10px;
  font-weight: 700;
`;

const BuyButton = styled.button`
  width: 170px;
  height: 60px;
  background-color: blue;
  font-size: 25px;
  border: none;
  color: white;
  border-radius: 10px;
  font-weight: 700;
`;

const ButtonContainer = styled.div`
  margin-top: 50px;
  display: flex;
  width: 400px;
  justify-content: space-between;
`;
