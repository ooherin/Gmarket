import styled from "styled-components";
import products from "./components/data";
import ItemList from "./components/ItemList";
const MainPage = (products) => {
  return (
    <Wrapper>
      <TitleContainer>
        <GmarketTitle>G마켓</GmarketTitle>
        <BestTitle>BEST</BestTitle>
      </TitleContainer>
      <ItemList />
    </Wrapper>
  );
};

export default MainPage;

const GmarketTitle = styled.div`
  width: 400px;
  height: 70px;
  font-size: 45px;
  display: inline;
`;

const BestTitle = styled.div`
  width: 400px;
  height: 70px;
  font-size: 45px;
  font-weight: 700;
  color: blue;
  display: inline;
`;

const TitleContainer = styled.div`
  margin-top: 30px;
  margin-left: 120px;
`;

const Wrapper = styled.div``;
