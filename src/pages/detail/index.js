import { useParams } from "react-router-dom";
import products from "../main/components/data";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Count from "./components/count";
const DetailPage = () => {
  const [data, setData] = useState();
  let params = useParams();
  //params의 형태는 string임
  const targetItem = products.filter((product) => product.id === params.id / 1);
  console.log(targetItem);
  useEffect(() => {
    setData(targetItem[0]);
  }, [params]);

  return (
    <Wrapper>
      {data && <ImgContainer src={`${data.image}`} />}
      <TextContainer>
        {data && <Title>{data.name}</Title>}
        {data && (
          <Price>
            {data.price
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
          </Price>
        )}
        {data && <Count price={data.price} />}
        <ButtonContainer>
          <CartButton>장바구니</CartButton>
          <BuyButton>구매하기</BuyButton>
        </ButtonContainer>
      </TextContainer>
    </Wrapper>
  );
};

export default DetailPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1250px;
  margin: 0 auto;
`;

const ImgContainer = styled.img`
  height: 600px;
  width: 600px;
  background-color: skyblue;
`;
const TextContainer = styled.div`
  height: 600px;
  width: 600px;
  margin-top: 70px;
`;
const Title = styled.div`
  font-size: 33px;
  font-weight: 600;
  display: block;
`;

const Price = styled.div`
  font-size: 36px;
  font-weight: 800;
  color: green;
`;

const CartButton = styled.button`
  width: 230px;
  height: 60px;
  font-size: 25px;
  border: 1px solid #777;
  color: black;
  background-color: white;
  border-radius: 10px;
  font-weight: 700;
`;

const BuyButton = styled.button`
  width: 230px;
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
  width: 500px;
  justify-content: space-between;
`;
