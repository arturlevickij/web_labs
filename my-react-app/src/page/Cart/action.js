export const action = { type: "", payLoad: {} };

export const incrementCount = (id) => {
    return {
      type: "INCREMENT_COUNT",
      payLoad: { id },
    };
  };
  
  export const decrementCount = (id) => {
    return {
      type: "DECREMENT_COUNT",
      payLoad: { id },
    };
  };

  export const deleteCartItem = (itemId) => {
    return {
      type: "DELETE_CART_ITEM",
      payload: {
        itemId,
      },
    };
  };

  export const clearCart = () => ({
    type: 'CLEAR_CART',
  });
