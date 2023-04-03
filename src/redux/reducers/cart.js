const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
  checkoutMessenge: null,
  orderId: null,
  isCheckouting: false,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM": {
      const totalItemPrice =
        action.payload.item.price +
        action.payload.selectedProps.additionalPrice;
      const currentId =
        action.payload.item.id +
        "_" +
        action.payload.selectedProps.type.id +
        "_" +
        action.payload.selectedProps.size.id;
      const currentPizzaItem = !state.items[currentId]
        ? {
            item: action.payload.item,
            selectedProps: action.payload.selectedProps,
            count: action.payload.count,
            totalPrice: totalItemPrice,
          }
        : {
            ...state.items[currentId],
            count: state.items[currentId].count + 1,
            totalPrice: totalItemPrice * (state.items[currentId].count + 1),
          };
      const newItems = {
        ...state.items,
        [currentId]: currentPizzaItem,
      };

      return {
        ...state,
        items: newItems,
        totalPrice:
          state.totalPrice +
          (currentPizzaItem.item.price +
            currentPizzaItem.selectedProps.additionalPrice),
        totalCount: state.totalCount + 1,
      };
    }
    case "REMOVE_CART_ITEM": {
      const currentItem = state.items[action.payload];
      const newItems = Object.assign({}, state.items);

      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalCount: state.totalCount - currentItem.count,
        totalPrice:
          state.totalPrice -
          (currentItem.totalPrice + currentItem.selectedProps.additionalPrice),
      };
    }
    case "RESET_CART": {
      return initialState;
    }
    case "CART_ITEM_COUNT_INC": {
      const currentPizzaItem = state.items[action.payload];

      const itemPrice =
        currentPizzaItem.item.price +
        currentPizzaItem.selectedProps.additionalPrice;

      const newItems = {
        ...state.items,
        [action.payload]: {
          ...currentPizzaItem,
          count: currentPizzaItem.count + 1,
          totalPrice: currentPizzaItem.totalPrice + itemPrice,
        },
      };

      return {
        ...state,
        items: newItems,
        totalCount: state.totalCount + 1,
        totalPrice: state.totalPrice + itemPrice,
      };
    }
    case "CART_ITEM_COUNT_DEC": {
      const currentPizzaItem = state.items[action.payload];

      const itemPrice =
        currentPizzaItem.item.price +
        currentPizzaItem.selectedProps.additionalPrice;

      const newItems = {
        ...state.items,
        [action.payload]: {
          ...currentPizzaItem,
          count: currentPizzaItem.count - 1,
          totalPrice: currentPizzaItem.totalPrice - itemPrice,
        },
      };

      if (currentPizzaItem.count <= 1) {
        delete newItems[action.payload];
      }

      return {
        ...state,
        items: newItems,
        totalCount: state.totalCount - 1,
        totalPrice: state.totalPrice - itemPrice,
      };
    }
    case "SET_CHECKOUT_CART_MESSENGE": {
      return {
        ...state,
        checkoutMessenge: action.payload,
      };
    }
    case "SET_ORDER_ID": {
      return {
        ...state,
        orderId: action.payload,
      };
    }
    case "SET_CHECKOUTING": {
      return {
        ...state,
        isCheckouting: action.payload,
      };
    }
    default:
      return state;
  }
};

export default cart;
