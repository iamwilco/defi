import { render, screen } from "@testing-library/react";
import { CommsFeed } from "@/components/comms/CommsFeed";

describe("CommsFeed", () => {
  it("renders filter controls and feed items", () => {
    render(<CommsFeed />);

    expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "X Spaces" })).toBeInTheDocument();
    expect(screen.getByText("Mint to Fluid Walkthrough")).toBeInTheDocument();
  });
});
