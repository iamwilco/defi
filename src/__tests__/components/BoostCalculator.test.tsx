import { fireEvent, render, screen } from "@testing-library/react";
import { BoostCalculator } from "@/components/incentives/BoostCalculator";
import { incentives } from "@/lib/mockData";

describe("BoostCalculator", () => {
  it("calculates projected bonus from position and hold duration", () => {
    render(<BoostCalculator incentives={incentives} />);

    const positionInput = screen.getByLabelText("Position Size (USD)");
    const daysInput = screen.getByLabelText("Hold Duration (Days)");

    fireEvent.change(positionInput, { target: { value: "10000" } });
    fireEvent.change(daysInput, { target: { value: "30" } });

    expect(screen.getByText("Projected Bonus")).toBeInTheDocument();
    expect(screen.getByText("$21")).toBeInTheDocument();
    expect(screen.getByText("Eligible: 30-day threshold reached.")).toBeInTheDocument();
  });
});
