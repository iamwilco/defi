import { render, screen } from "@testing-library/react";
import { BlogList } from "@/components/blog/BlogList";
import { blogPosts } from "@/lib/mockData";

describe("BlogList", () => {
  it("renders search input and posts", () => {
    render(<BlogList posts={blogPosts} />);

    expect(screen.getByLabelText("Search blog posts")).toBeInTheDocument();
    expect(screen.getByText("Month 1 Review: Coalition Momentum")).toBeInTheDocument();
  });
});
