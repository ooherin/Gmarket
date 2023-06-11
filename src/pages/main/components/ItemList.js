import products from "data/data";
import styled from "styled-components";
import OneItem from "./OneItem";

const ItemList = () => {
  console.log(products);
  return (
    <Wrapper>
      <ProductContainer>
        {products.map((product, index) => {
          return <OneItem key={product.id} product={product} index={index} />;
        })}
      </ProductContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
`;

const ProductContainer = styled.div`
  width: 1000px;
  height: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 40px;
`;
export default ItemList;
