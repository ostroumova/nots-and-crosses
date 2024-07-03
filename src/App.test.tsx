import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App.tsx";

describe("App", () => {
  test("renders header component", () => {
    render(<App />);

    const mainHeaderElement = screen.getByRole("heading", {
      name: "Noughts And Crosses",
    });
    const secondaryHeaderElement = screen.getByRole("heading", {
      name: "Use your brain",
    });

    expect(mainHeaderElement).toBeInTheDocument();
    expect(secondaryHeaderElement).toBeInTheDocument();
  });
  test("renders footer component", () => {
    render(<App />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toHaveTextContent("© Noughts And Crosses");
  });
  test("renders game component", () => {
    render(<App />);
    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(9);
  });
});
