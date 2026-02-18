import { render, screen } from "@testing-library/react";
import { DashboardCard } from "@/components/shared/DashboardCard";

describe("DashboardCard", () => {
  it("renders title and value", () => {
    render(<DashboardCard title="Total TVL" value="$100,000" />);

    expect(screen.getByText("Total TVL")).toBeInTheDocument();
    expect(screen.getByText("$100,000")).toBeInTheDocument();
  });
});
