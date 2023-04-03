import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Slider from "./Slider";

describe("Render Slider", () => {
  it("should render and has classname", () => {
    render(<Slider data-testid="root" className="my-class" />);

    const slider = screen.getByTestId("root");

    expect(slider).toBeInTheDocument();
    expect(slider).toHaveClass("my-class");
  });

  it("variant default", () => {
    render(<Slider variant="default" data-testid="root" />);

    const slider = screen.getByTestId("root");

    expect(slider).toHaveClass("slider--default");
  });

  it("variant minimal", () => {
    render(<Slider variant="minimal" data-testid="root" />);

    const slider = screen.getByTestId("root");

    expect(slider).toHaveClass("slider--minimal");
  });

  it("should render children", () => {
    render(<Slider>Hello world!</Slider>);

    expect(screen.getByText("Hello world!")).toBeInTheDocument();
  });
});
