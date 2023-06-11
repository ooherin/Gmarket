import { createSlice } from "@reduxjs/toolkit";

//로컬 스토리지에 cart 정보가 있으면 가져오고 없으면 빈배열
const initialState = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //카트에서 상품 추가하는 로직
    AddItem(state, action) {
      //paylod에 id값과 count를 받아와서
      //만약 현재 state에 해당 id의 품목이 있다면 {count}을 올려주고
      //만약 없다면 state에 {count}인 id 품목을 새로 생성함.
      let _state;
      const { id, count } = action.payload;
      const targetIndex = state.findIndex((item) => item.id === id);
      console.log("targetIndex", targetIndex);
      if (targetIndex < 0) {
        _state = [...state, action.payload];
        localStorage.setItem("cart", JSON.stringify(_state));
        return _state;
      }
      //불변성을 유지하는 코드를 작성해야 함.
      _state = state.map((item, index) => {
        if (index === targetIndex) {
          // 해당 품목의 count를 증가시킨 새로운 객체를 반환
          return { ...item, count: item.count + count };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(_state));
      return _state;
    },
    //카트에서 상품 개수 늘리는 로직
    IncreaseItem(state, action) {
      const { id, count } = action.payload;
      const increaseIndex = state.findIndex((item) => item.id === id);
      console.log(increaseIndex);
      const increaseState = [...state];
      increaseState[increaseIndex] = {
        ...increaseState[increaseIndex],
        count: count + 1,
      };
      localStorage.setItem("cart", JSON.stringify(increaseState));
      return increaseState;
    },
    //카트에서 상품 개수 줄이는 로직
    DecreaseItem(state, action) {
      const { id, count } = action.payload;
      const decreaseIndex = state.findIndex((item) => item.id === id);
      const decreaseState = [...state];
      if (decreaseState[decreaseIndex].count < 2) {
        return alert("최소 수량은 한개입니다.");
      }
      decreaseState[decreaseIndex] = {
        ...decreaseState[decreaseIndex],
        count: count - 1,
      };
      localStorage.setItem("cart", JSON.stringify(decreaseState));
      return decreaseState;
    },
    //카트에서 상품 삭제하는 로직
    DeleteItem(state, action) {
      const { id } = action.payload;
      const deleteState = state.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(deleteState));
      return deleteState;
    },
  },
});

//rtk는 action 자동 생성
//이렇게 바로 slice.actions에서 함수를 꺼내면 바로 import 해서 쓸 수 있다.
export const { AddItem, IncreaseItem, DecreaseItem, DeleteItem } =
  cartSlice.actions;
