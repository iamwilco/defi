import { render, screen } from "@testing-library/react";
import { UtilizationHeatmap } from "@/components/dashboard/UtilizationHeatmap";
import { heatmapCells } from "@/lib/mockData";
import { useUtilization } from "@/lib/hooks/useUtilization";

jest.mock("@/lib/hooks/useUtilization", () => ({
  useUtilization: jest.fn(),
}));

const mockedUseUtilization = useUtilization as jest.MockedFunction<typeof useUtilization>;

describe("UtilizationHeatmap", () => {
  it("renders interactive controls and legend with mock data", () => {
    mockedUseUtilization.mockReturnValue({
      data: {
        assets: [],
        heatmap: heatmapCells,
      },
      isLoading: false,
      isError: false,
      refetch: jest.fn(),
    } as unknown as ReturnType<typeof useUtilization>);

    render(<UtilizationHeatmap />);

    expect(screen.getByRole("button", { name: "All Assets" })).toBeInTheDocument();
    expect(screen.getByText("Intensity")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "USDM" })).toBeInTheDocument();
  });
});
