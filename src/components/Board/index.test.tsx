import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Board from ".";

describe("Board component", async () => {
  test("renders Board component", async () => {
    render(<Board />);
    const buttons = await screen.findAllByRole("button");
    expect(buttons).toHaveLength(9);
  });
  test("places a piece on the board when a square is clicked", async () => {
    render(<Board />);
    const buttons = await screen.findAllByRole("button");
    fireEvent.click(buttons[0]);
    expect(buttons[0]).toHaveTextContent("X");
  });
});
