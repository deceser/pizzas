const initialState = {
  orders: {
    list: [],
    totalCount: 0,
  },
  pizzas: {
    list: [],
    totalCount: 0,
  },
  stockPizzas: {
    list: [],
    totalCount: 0,
  },
  pizzasSales: [],
  users: [],
  detailsOrderModal: {
    visibility: 0,
    products: [],
    shippingData: {},
  },
  callBacks: {},
  error: null,
};

const admin = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ORDERS":
      return {
        ...state,
        orders: action.payload,
      };
    case "RESET_ADMIN": {
      return initialState;
    }
    case "SET_ORDER_STATUS": {
      return {
        ...state,
        orders: {
          ...state,
          list: state.orders.list.map((order) =>
            order.id === action.payload.id
              ? { ...order, status: action.payload.status }
              : order
          ),
        },
      };
    }
    case "SET_ADMIN_PIZZAS": {
      return {
        ...state,
        pizzas: action.payload,
      };
    }
    case "SET_ADMIN_PIZZA_ITEM": {
      return {
        ...state,
        pizzas: {
          ...state.pizzas,
          list: state.pizzas.list.map((pizza) =>
            pizza.id === action.payload.id
              ? { id: action.payload.id, ...action.payload.item }
              : pizza
          ),
        },
      };
    }
    case "SET_ADMIN_ERROR": {
      return {
        ...state,
        error: action.payload,
      };
    }
    case "SET_ADMIN_STOCK_PIZZAS": {
      return {
        ...state,
        stockPizzas: action.payload,
      };
    }
    case "REMOVE_ADMIN_STOCK_PIZZA_SIZE": {
      return {
        ...state,
        stockPizzas: {
          ...state.stockPizzas,
          list: state.stockPizzas.list.map((pizza) =>
            action.payload.id === pizza.id
              ? {
                  ...pizza,
                  Sizes: pizza.Sizes.filter(
                    (size) => size.name !== action.payload.size
                  ),
                }
              : pizza
          ),
        },
      };
    }
    case "REMOVE_ADMIN_STOCK_PIZZA_TYPE": {
      return {
        ...state,
        stockPizzas: {
          ...state.stockPizzas,
          list: state.stockPizzas.list.map((pizza) =>
            action.payload.id === pizza.id
              ? {
                  ...pizza,
                  Types: pizza.Types.filter(
                    (type) => type.name !== action.payload.type
                  ),
                }
              : pizza
          ),
        },
      };
    }
    case "ADD_ADMIN_PIZZA_SIZE": {
      return {
        ...state,
        stockPizzas: {
          ...state.stockPizzas,
          list: state.stockPizzas.list.map((pizza) =>
            action.payload.id === pizza.id
              ? {
                  ...pizza,
                  Sizes: [...pizza.Sizes, { name: action.payload.size }],
                }
              : pizza
          ),
        },
      };
    }
    case "ADD_ADMIN_PIZZA_TYPE": {
      return {
        ...state,
        stockPizzas: {
          ...state.stockPizzas,
          list: state.stockPizzas.list.map((pizza) =>
            action.payload.id === pizza.id
              ? {
                  ...pizza,
                  Types: [...pizza.Types, { name: action.payload.type }],
                }
              : pizza
          ),
        },
      };
    }
    case "SET_ADMIN_PIZZA_TYPES_SIZES": {
      return {
        ...state,
        stockPizzas: {
          ...state.stockPizzas,
          list: state.stockPizzas.list.map((pizza) =>
            action.payload.id === pizza.id
              ? {
                  ...pizza,
                  Sizes: action.payload.sizes.filter(
                    (size) => size.name !== "none"
                  ),
                  Types: action.payload.types.filter(
                    (type) => type.name !== "none"
                  ),
                }
              : pizza
          ),
        },
      };
    }
    case "REMOVE_ADMIN_PIZZA_TYPES_SIZES": {
      return {
        ...state,
        stockPizzas: {
          ...state.stockPizzas,
          list: state.stockPizzas.list.map((pizza) =>
            action.payload === pizza.id
              ? {
                  ...pizza,
                  Sizes: [],
                  Types: [],
                }
              : pizza
          ),
        },
      };
    }
    case "ADD_ADMIN_PIZZA": {
      const firstPizzaItemId = state.pizzas.list[0];
      return {
        ...state,
        pizzas: {
          ...state.pizzas,
          list: [action.payload, ...state.pizzas.list],
        },
      };
    }
    case "DELETE_ADMIN_PIZZA": {
      return {
        ...state,
        pizzas: {
          ...state.pizzas,
          list: state.pizzas.list.filter(
            (pizza) => pizza.id !== action.payload
          ),
        },
      };
    }
    case "SET_PIZZAS_SALES": {
      return {
        ...state,
        pizzasSales: action.payload,
      };
    }
    case "SET_PIZZA_SALES_BY": {
      return {
        ...state,
        sales: action.payload,
      };
    }
    case "SET_ADMIN_USERS": {
      return {
        ...state,
        users: action.payload,
      };
    }
    case "SET_ADMIN_USER_ROLE": {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id
            ? { ...user, role: action.payload.role }
            : user
        ),
      };
    }
    case "SET_DETAILS_ORDER_MODAL": {
      return {
        ...state,
        detailsOrderModal: action.payload,
      };
    }
    case "RESET_DETAILS_ORDER_MODAL": {
      return {
        ...state,
        detailsOrderModal: initialState.detailsOrderModal,
      };
    }
    case "SET_CALL_BACKS": {
      return {
        ...state,
        callBacks: action.payload,
      };
    }
    case "DELETE_CALL_BACK": {
      return {
        ...state,
        callBacks: state.callBacks.filter((item) => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default admin;
