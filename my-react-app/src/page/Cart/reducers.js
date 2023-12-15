const defaultState = {
    stoneList: [],
};

const findIndexById = (arr, id) => {
    return arr.findIndex((item) => item.id === id);
  };
  

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ADD_STONE":
        const foundIndex = findIndexById(state.stoneList, action.payLoad.id);
        if (foundIndex === -1) {
          return { ...state, stoneList: [...state.stoneList, action.payLoad] };
        } else {
          const updatedStoneArr = [...state.stoneList];
          updatedStoneArr[foundIndex] = {
            ...updatedStoneArr[foundIndex],
            count: updatedStoneArr[foundIndex].count + action.payLoad.count,
          };
          console.log(state.stoneList[foundIndex].count);
          return { ...state, stoneList: updatedStoneArr };
        }
      case "INCREMENT_COUNT":
        return {
          ...state,
          stoneList: state.stoneList.map((stone) => {
            if (stone.id === action.payLoad.id) {
              return { ...stone, count: stone.count + 1 };
            }
            return stone;
          }),
        };
      case "DECREMENT_COUNT":
        return {
          ...state,
          stoneList: state.stoneList.map((stone) => {
            if (stone.id === action.payLoad.id && stone.count > 0) {
              return { ...stone, count: stone.count - 1 };
            }
            return stone;
          }),
        };
      case "DELETE_CART_ITEM":
      const itemIdToDelete = action.payload.itemId;
      const updatedStoneList = state.stoneList.filter(stone => stone.id !== itemIdToDelete);
      return {
        ...state,
        stoneList: updatedStoneList,
      };
        default:
            return state;
    }
};