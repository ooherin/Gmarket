import styled from "styled-components";
// import ItemList from "./components/ItemList";
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
  height: 70px;
  font-size: 35px;
  display: inline;
`;

const BestTitle = styled.div`
  width: 400px;
  height: 70px;
  font-size: 35px;
  font-weight: 700;
  color: blue;
  display: inline;
`;

const TitleContainer = styled.div`
  margin-top: 30px;
  display: flex;
  width: 500px;
  padding-left: 200px;
`;

const Wrapper = styled.div``;
