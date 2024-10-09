import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact us page test cases", () => {
    // we can also write it instead of test here
  test("should load the contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should load the button on contact  component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should load the button on contact  component", () => {
    render(<Contact />);
    const button = screen.getByText("Send Message");
    expect(button).toBeInTheDocument();
  });

  test("should load the input on contact  component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("Your name");
    expect(input).toBeInTheDocument();
  });

  test("should load all the input on contact component", () => {
    render(<Contact />);
    const allinput = screen.getAllByRole("textbox");
    expect(allinput.length).toBe(4);
  });
});
