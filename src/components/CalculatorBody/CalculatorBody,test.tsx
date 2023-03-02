import { render, screen } from "@testing-library/react";
import CalculatorBody from "./CalculatorBody";

describe("Given a Keyboard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the value 'CE'", () => {
      const buttonText = "CE";

      render(<CalculatorBody />);

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
