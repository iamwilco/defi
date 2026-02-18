import { render, screen } from "@testing-library/react";
import { DeFiPulseTimeline } from "@/components/blog/DeFiPulseTimeline";

describe("DeFiPulseTimeline", () => {
  it("renders date controls and at least one phase item", () => {
    render(<DeFiPulseTimeline />);

    expect(screen.getByLabelText("Since")).toBeInTheDocument();
    expect(screen.getByLabelText("Until")).toBeInTheDocument();
    expect(screen.getByText(/Phase 1: Foundation/i)).toBeInTheDocument();
  });
});
