import styled from "styled-components";
import { flexCenter } from "styles/common";
import { useNavigate } from "react-router-dom";
const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Img src="/images/bigcart.png" />
      <Text> 장바구니에 담긴 상품이 없습니다.</Text>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        홈으로 가기
      </Button>
    </Wrapper>
  );
};
export default EmptyCart;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.PALLETE.lightGrey};
  width: 100%;
  height: 100vh;
  ${flexCenter}
  flex-direction:column;
`;
const Text = styled.div`
  color: ${({ theme }) => theme.PALLETE.darkGrey};
  font-weight: 500;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 300px;
  height: 50px;
  background-color: white;
  border: 1px solid ${({ theme }) => theme.PALLETE.borderGrey};
  color: ${({ theme }) => theme.PALLETE.darkGrey};
  cursor: pointer;
`;

const Img = styled.img`
  width: 15%;
  margin-bottom: 10px;
`;
