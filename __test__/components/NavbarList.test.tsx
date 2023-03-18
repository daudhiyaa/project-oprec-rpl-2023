import React from "react";
import { render, screen } from "@testing-library/react";
import NavbarList from "@/components/link/NavbarList";
import "@testing-library/jest-dom";

describe("NavbarList Component", () => {
  it("should renders navbar list with title and link", () => {
    const ttl = "Example List";
    render(<NavbarList title={ttl} href="/" />);
    const buttonLinkElement = screen.getByRole("link");

    expect(buttonLinkElement).toBeInTheDocument();
    expect(buttonLinkElement).toHaveTextContent(ttl);
  });
});
