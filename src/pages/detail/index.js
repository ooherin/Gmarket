import { useParams } from "react-router-dom";
// import products from "../main/components/data";
import products from "data/data";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Count from "./components/count";

const DetailPage = () => {
  const [data, setData] = useState();
  let params = useParams();
  //params의 형태는 string임
  const targetItem = products.filter((product) => product.id === params.id / 1);
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
        {data && <Count targetItem={targetItem} />}
      </TextContainer>
    </Wrapper>
  );
};

export default DetailPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 900px;
  margin: 0 auto;
`;

const ImgContainer = styled.img`
  height: 400px;
  width: 400px;
  background-color: skyblue;
`;
const TextContainer = styled.div`
  height: 400px;
  width: 400px;
  margin-top: 70px;
`;
const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
  display: block;
`;

const Price = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: green;
`;
