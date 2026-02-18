import { render, screen } from "@testing-library/react";
import { GuideAccordion } from "@/components/guides/GuideAccordion";
import { guidesCatalog } from "@/lib/mockData";

describe("GuideAccordion", () => {
  it("renders guide titles from provided catalog", () => {
    render(<GuideAccordion guides={guidesCatalog} />);

    expect(screen.getByText("Mint to Fluid Journey")).toBeInTheDocument();
    expect(screen.getByText("USDM Starter Loop")).toBeInTheDocument();
  });
});
