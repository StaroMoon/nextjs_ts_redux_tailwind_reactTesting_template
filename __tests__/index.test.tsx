import { render, screen } from "@testing-library/react";
import Home from "../src/pages/index";
import "@testing-library/jest-dom";

it("renders the landing page", async () => {
  render(<Home />);

  const heading = screen.getByText("src/pages/index.tsx");

  expect(heading).toBeInTheDocument();
});
