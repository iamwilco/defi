import { render, screen } from "@testing-library/react";
import { BlogList } from "@/components/blog/BlogList";

describe("BlogList", () => {
  it("renders search input and posts", () => {
    render(<BlogList />);

    expect(screen.getByLabelText("Search blog posts")).toBeInTheDocument();
    expect(screen.getByText("Month 1 Review: Coalition Momentum")).toBeInTheDocument();
  });
});
