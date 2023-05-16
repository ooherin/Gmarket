import { useState } from "react";
import styled from "styled-components";

const Count = (price) => {
  const [count, setCount] = useState(1);

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

  return (
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
        <CountPrice>{convertedPrice(count * price.price)}원</CountPrice>
      </CountBottom>
    </CountContainer>
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
  width: 500px;
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
