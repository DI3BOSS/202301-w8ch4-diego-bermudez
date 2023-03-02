import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is call with the operator '+'", () => {
    test("Then it should show a button with the value '+'", () => {
      const buttonText = "+";

      render(<Button value={buttonText} />);

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
