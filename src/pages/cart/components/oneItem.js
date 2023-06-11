import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { DecreaseItem, IncreaseItem, DeleteItem } from "reducer/cart";
import { BiCheckCircle } from "react-icons/bi";

const OneItem = ({ item }) => {
  const { id, count, image, name, price, company } = item;
  const [isCheck, setIsCheck] = useState(true);

  const dispatch = useDispatch();

  const countPrice = price * count;

  const convertedPrice = (c) => {
    return countPrice
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  };

  //장바구니에 들어갔음.
  const onClickDelete = () => {};

  const increaseItemCount = () => {
    dispatch(IncreaseItem({ id, count }));
  };

  const decreaseItemCount = () => {
    dispatch(DecreaseItem({ id, count }));
  };

  const deleteItem = () => {
    dispatch(DeleteItem({ id }));
  };

  const onClickCheck = () => {
    setIsCheck((prev) => !prev);
  };

  return (
    item && (
      <Wrapper>
        <CompanyContainer>
          {isCheck ? (
            <BiCheckCircle
              onClick={onClickCheck}
              size={24}
              style={{ color: "blue" }}
            />
          ) : (
            <BiCheckCircle
              onClick={onClickCheck}
              size={24}
              style={{ color: "#777" }}
            />
          )}
          <Company>{company}</Company>
        </CompanyContainer>
        <Title>{name}</Title>
        <Flex>
          <Img src={`${image}`} />
          <CountChangeBox>
            <CountChangeButton onClick={decreaseItemCount}>-</CountChangeButton>
            <CountNumber>{count}</CountNumber>
            <CountChangeButton onClick={increaseItemCount}>+</CountChangeButton>
          </CountChangeBox>
          <Price>{convertedPrice(price)}</Price>
          <Button onClick={deleteItem}>삭제</Button>
        </Flex>
      </Wrapper>
    )
  );
};
export default OneItem;

const Wrapper = styled.div`
  width: 500px;
  height: 200px;
  background-color: white;
  border-radius: 20px;
  margin-top: 20px;
  border: 0.1rem solid #d7d7d7;
  padding: 30px;
  position: relative;
`;

const Img = styled.img`
  height: 80px;
  width: 80px;
`;

const Button = styled.button`
  width: 70px;
  height: 30px;
  font-size: 15px;
  position: absolute;
  right: 30px;
`;

const Company = styled.div`
  font-size: 23px;
  font-weight: 600;
  width: 100%;
  padding-left: 10px;
`;

const Title = styled.div`
  border-top: 0.09rem solid black;
  font-size: 17px;
  font-weight: 500;
`;

const Price = styled.div`
  font-size: 23px;
  font-weight: 800;
  color: green;
`;

const CountNumber = styled.div`
  width: 50px;
  height: 30px;
  border: 1px solid black;
  background-color: white;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CountChangeButton = styled.button`
  border: 1px solid black;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  font-size: 20px;
`;

const CountChangeBox = styled.div`
  display: flex;
  align-items: center;
  width: 130px;
  justify-content: space-evenly;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;
const CompanyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
