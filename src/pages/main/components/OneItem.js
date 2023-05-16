import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const OneItem = ({ product, index }) => {
  const navigate = useNavigate();
  const onNavigateDetailPage = () => {
    navigate(`detail/${product.id}`);
  };
  return (
    <>
      <ItemContainer onClick={onNavigateDetailPage}>
        <Number>{index + 1}</Number>
        <ImgContainer>
          <ProductImg src={`${product.image}`} />
          {product.bigSmileDay && <BigSmileLogo src="/images/BigSmile.png" />}
        </ImgContainer>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.price}</ProductPrice>
        <ShippingContainer>
          {product.smileShipping && <img src="/images/Smile.png" />}
          {product.freeShipping && <img src="/images/free.png" />}
        </ShippingContainer>
      </ItemContainer>
    </>
  );
};

const ItemContainer = styled.div`
  width: 300px;
  height: 500px;
`;

const ImgContainer = styled.div`
  position: relative;
`;
const ProductImg = styled.img`
  width: 300px;
  height: 300px;
`;

const BigSmileLogo = styled.img`
  height: 80px;
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
`;
const Number = styled.div`
  width: 50px;
  height: 50px;
  border-bottom: 5px solid #06d47e;
  font-size: 30px;
  text-align: center;
  color: #06d47e;
`;

const ProductName = styled.div`
  width: 300px;
  height: 30px;
`;
const ProductPrice = styled.div`
  width: 300px;
  height: 30px;
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
`;
const ShippingContainer = styled.div`
  width: 300px;
  height: 50px;
`;

export default OneItem;
