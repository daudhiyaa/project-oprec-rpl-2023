import React from "react";
import { render, screen } from "@testing-library/react";
import FooterList from "@/components/link/FooterList";
import "@testing-library/jest-dom";

describe("FooterList Component", () => {
  it("should renders footer list with hyperlink in title", () => {
    const ttl = "Example List";
    render(<FooterList title={ttl} />);
    const buttonLinkElement = screen.getByRole("link");

    expect(buttonLinkElement).toBeInTheDocument();
    expect(buttonLinkElement).toHaveTextContent(ttl);
  });
});
