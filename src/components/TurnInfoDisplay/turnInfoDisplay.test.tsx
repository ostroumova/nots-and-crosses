import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TurnInfoDisplay from ".";

describe("TurnInfoDisplay", () => {
  test("renders TurnInfoDisplay component", () => {
    render(<TurnInfoDisplay />);
    const playerIndication = screen.getByText("Player One: X");
    expect(playerIndication).toBeInTheDocument();
  });
});
