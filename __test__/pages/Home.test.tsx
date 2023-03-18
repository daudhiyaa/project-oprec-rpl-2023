import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  it("should render the Hero section", () => {
    render(<Home />);
    const heroSection = screen.getByTestId("hero-section");
    expect(heroSection).toBeInTheDocument();
    expect(heroSection).toHaveTextContent(/hi, i'm daud/i);
  });

  it("should render the Playground section", () => {
    render(<Home />);
    const playgroundSection = screen.getByText(/playground/i);
    expect(playgroundSection).toBeInTheDocument();
  });
});
