import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import * as reduxHooks from "react-redux";
import * as actions from "../../redux/actions/user";
import * as routerHooks from "react-router-dom";
import LoginForm from "./LoginForm";
import { act } from "react-dom/test-utils";

jest.mock("react-redux", () => {
  return {
    __esModule: true,
    ...jest.requireActual("react-redux"),
  };
});

jest.mock("react-router-dom", () => {
  return {
    __esModule: true,
    ...jest.requireActual("react-router-dom"),
  };
});

jest.mock("../../redux/actions/user", () => {
  return {
    __esModule: true,
    ...jest.requireActual("../../redux/actions/user"),
  };
});

const useDispatchSpy = jest.spyOn(reduxHooks, "useDispatch");
const useSelectorSpy = jest.spyOn(reduxHooks, "useSelector");
const setAuthErrorSpy = jest.spyOn(actions, "setAuthError");
const useNavigateSpy = jest.spyOn(routerHooks, "useNavigate");

describe("Render LoginForm", () => {
  it("should render", () => {
    const dispatch = jest.fn();
    const navigate = jest.fn();

    useDispatchSpy.mockReturnValue(dispatch);
    useSelectorSpy.mockReturnValueOnce({ authError: null });
    useNavigateSpy.mockReturnValue(navigate);

    render(<LoginForm />);
  });

  it("should render auth error", () => {
    const dispatch = jest.fn();
    const navigate = jest.fn();

    useDispatchSpy.mockReturnValue(dispatch);
    useSelectorSpy.mockReturnValueOnce({ authError: "Some error!" });
    useNavigateSpy.mockReturnValue(navigate);

    render(<LoginForm />);

    expect(screen.getByText("Some error!")).toBeInTheDocument();
  });

  // it("should dispatch action on sign in click", () => {
  //   const dispatch = jest.fn();
  //   const navigate = jest.fn();

  //   useDispatchSpy.mockReturnValue(dispatch);
  //   useSelectorSpy.mockReturnValue({ authError: null });
  //   useNavigateSpy.mockReturnValue(navigate);

  //   const signInSpy = jest.spyOn(actions, "signIn");

  //   const { debug } = render(<LoginForm />);

  //   const phoneInput = screen.getByDisplayValue("+1");
  //   const passwordInput = screen.getByTestId("password");

  //   act(() => {
  //     fireEvent.change(phoneInput, { target: { value: "380685931007" } });
  //     fireEvent.change(passwordInput, { target: { value: "d9j2f9jCEn" } });

  //     fireEvent.click(screen.getByTestId("signin-button"));
  //   });

  //   debug();

  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(signInSpy).toHaveBeenCalledTimes(1);
  // });
});
