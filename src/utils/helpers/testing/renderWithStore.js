import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../../redux/reducers";

const renderWithStore = (ui, { state } = {}) => {
  const store = createStore(rootReducer, state);
  return render(<Provider store={store}>{ui}</Provider>);
};

export default renderWithStore;
