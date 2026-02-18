import { render, screen } from "@testing-library/react";
import { MediaEmbed } from "@/components/comms/MediaEmbed";

describe("MediaEmbed", () => {
  it("renders embed placeholder and metadata badges", () => {
    render(
      <MediaEmbed
        title="Coalition X Space"
        description="Weekly discussion"
        href="#"
        kind="x_space"
        date="2026-02-14"
      />,
    );

    expect(screen.getByText("Embed Placeholder")).toBeInTheDocument();
    expect(screen.getByText("X Space")).toBeInTheDocument();
    expect(screen.getByText("2026-02-14")).toBeInTheDocument();
  });
});
