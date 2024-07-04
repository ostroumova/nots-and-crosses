import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Board from ".";

describe("Board component", async () => {
  test("renders Board component", async () => {
    render(<Board setWinner={() => {}} />);
    const buttons = await screen.findAllByRole("button");
    expect(buttons).toHaveLength(9);
  });
  test("places a piece on the board when a square is clicked", async () => {
    render(<Board setWinner={() => {}} />);
    const buttons = await screen.findAllByRole("button");
    fireEvent.click(buttons[0]);
    expect(buttons[0]).toHaveTextContent("X");
  });
  test("places a noughts or cross on the board one after the other", async () => {
    render(<Board setWinner={() => {}} />);
    const buttons = await screen.findAllByRole("button");
    fireEvent.click(buttons[0]);
    expect(buttons[0]).toHaveTextContent("X");
    fireEvent.click(buttons[1]);
    expect(buttons[1]).toHaveTextContent("O");
  });
});
