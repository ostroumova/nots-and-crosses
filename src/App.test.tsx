import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App.tsx";

describe("App", () => {
  test("renders App component", () => {
    // Arrange
    render(<App />);
    screen.debug();
  });
});
