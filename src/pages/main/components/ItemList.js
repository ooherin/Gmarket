import products from "./data";
import styled from "styled-components";
import OneItem from "./OneItem";

const ItemList = () => {
  console.log(products);
  return (
    <Wrapper>
      <ProductContainer>
        {products.map((product, index) => {
          return <OneItem product={product} index={index} />;
        })}
      </ProductContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const ProductContainer = styled.div`
  width: 1380px;
  height: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 40px;
`;
export default ItemList;
