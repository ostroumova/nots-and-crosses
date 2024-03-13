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
    const footerElement = screen.getByRole("contentinfo", {
      name: "",
    });
    const footerText = screen.getByText("© Noughts And Crosses");
    expect(footerElement).toBeInTheDocument();
    expect(footerText).toBeInTheDocument();
  });
  test("renders game component", async () => {
    render(<App />);
    const buttons = await screen.findAllByRole("button");
    expect(buttons.length).toBe(9);
  });
});
