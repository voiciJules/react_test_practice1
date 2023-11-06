import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("This counter starts at 0", () => {
  render(<App />);
  // screen object 를 이용해서 원하는 엘리멘트에 접근할 수 있다.
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(0);
});

test("minus button has correct text '-' ", () => {
  render(<App />);
  const minusElement = screen.getByTestId("minus-button");
  expect(minusElement).toHaveTextContent("-");
});

test("plus button has correct text '+' ", () => {
  render(<App />);
  const plusElement = screen.getByTestId("plus-button");
  expect(plusElement).toHaveTextContent("+");
});

test("when the - button is pressed, the counter changes to -1", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("minus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});

test("when the + button is pressed, the counter changes to 1", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("plus-button");
  fireEvent.click(buttonElement);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test("when the on/off button has blue color, ", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

test("prevent the -,+ buttons from being pressed when the on/off button is clicked", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  fireEvent.click(buttonElement);
  const plusElement = screen.getByTestId("plus-button");
  const minusElement = screen.getByTestId("minus-button");
  expect(plusElement).toBeDisabled();
  expect(minusElement).toBeDisabled();
});
